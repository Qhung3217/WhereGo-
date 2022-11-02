import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, lastValueFrom, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WriterLocal } from '../interfaces/writer-local.interface';
import { Writer } from '../models/writer.model';

@Injectable({ providedIn: 'root' })
export class WriterService {
  writer?: Writer;
  writerEvent = new BehaviorSubject<any>(undefined);

  constructor(private http: HttpClient, private cookie: CookieService) {}
  loadFormLocal() {
    const local = localStorage.getItem('writer');
    if (local && this.cookie.check('writer')) {
      const writer = JSON.parse(local);
      const token = this.cookie.get('writer');
      this.getDetail(writer.username, token).then((writer) => {
        if (writer) {
          this.writer = { ...writer };
          this.writerEvent.next({ ...writer });
        } else {
          this.writer = undefined;
          this.writerEvent.next(undefined);
        }
      });
    }
  }
  async getDetail(username: string, token: string) {
    return await lastValueFrom(
      this.http
        .get<Writer>(
          environment.apiURL + 'writers/' + username,
          this.permitsion(token)
        )
        .pipe(
          tap((writer) => {
            this.saved(writer);
            this.writerEvent.next({ ...writer });
          })
        ),
      { defaultValue: null }
    );
  }
  update(name: string, tel: string, dob: string, avatar: null | File = null) {
    const token = this.cookie.get('writer');

    const payload = new FormData();
    payload.append('name', name);
    payload.append('tel', tel);
    payload.append('dob', dob);
    if (avatar == null) payload.append('avatar', '');
    else payload.append('avatar', avatar);

    return this.http.put<{ statusCode: string; message: string }>(
      environment.apiURL + 'writers/' + this.writer?.username,
      payload,
      this.permitsion(token)
    );
  }
  changePassword(oldPassword: string, newPassword: string) {
    const token = this.cookie.get('writer');
    return this.http.put(
      environment.apiURL + 'writers/change-password',
      {
        email: this.writer?.email,
        oldPassword,
        newPassword,
      },
      this.permitsion(token)
    );
  }
  createArticle(
    title: string,
    image: File,
    shortDesc: string,
    content: string
  ) {
    const token = this.cookie.get('writer');
    const payload = new FormData();
    payload.append('title', title);
    payload.append('image', image);
    payload.append('shortDesc', shortDesc);
    payload.append('content', content);

    // console.log(payload);  thi

    return this.http.post(
      environment.apiURL + 'articles?writer=' + this.writer?.username,
      payload,

      {
        headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + token)
          .set('Content-Transfer-Encoding', 'utf-8'),
      }
    );
  }
  updateArticle(
    id: number,
    title: string,
    image: File,
    shortDesc: string,
    content: string
  ) {
    const token = this.cookie.get('writer');
    const payload = new FormData();
    // payload.append('title', encodeURIComponent(title));
    payload.append('title', title);
    payload.append('shortDesc', shortDesc);
    payload.append('content', content);
    if (image == null) payload.append('image', '');
    else payload.append('image', image);

    return this.http.put(
      environment.apiURL + 'articles/' + id,

      payload,

      {
        headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + token)
          .set('Content-Transfer-Encoding', 'utf-8'),
      }
    );
  }
  remove() {
    localStorage.removeItem('writer');
    this.writer = undefined;
    this.writerEvent.next(undefined);
  }
  private saved(writer: Writer) {
    const writerSimple: WriterLocal = {
      username: writer.username,
    };

    this.writer = { ...writer };

    localStorage.setItem('writer', JSON.stringify(writerSimple));
  }
  private permitsion(token: string) {
    return {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    };
  }
}
