import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, lastValueFrom, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Writer } from '../models/writer.model';

@Injectable({ providedIn: 'root' })
export class WriterService {
  writer?: Writer;
  writerEvent = new BehaviorSubject<any>(undefined);

  constructor(private http: HttpClient, private cookie: CookieService) {}
  loadFormLocal() {
    const local = localStorage.getItem('writer');
    if (local) {
      this.writer = JSON.parse(local) as Writer;
      this.writerEvent.next({ ...this.writer });
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
  update(
    username: string,
    name: string,
    tel: string,
    dob: string,
    avatar: null | File = null
  ) {
    const token = this.cookie.get('writer');

    const payload = new FormData();
    payload.append('name', name);
    payload.append('tel', tel);
    payload.append('dob', dob);
    if (avatar == null) payload.append('avatar', '');
    else payload.append('avatar', avatar);

    return this.http.put<{ statusCode: string; message: string }>(
      environment.apiURL + 'writers/' + username,
      payload,
      this.permitsion(token)
    );
  }
  changePassword(email: string, oldPassword: string, newPassword: string) {
    const token = this.cookie.get('writer');
    return this.http.put(
      environment.apiURL + 'writers/change-password',
      {
        email,
        oldPassword,
        newPassword,
      },
      this.permitsion(token)
    );
  }
  remove() {
    localStorage.removeItem('writer');
    this.writer = undefined;
    this.writerEvent.next(undefined);
  }
  private saved(writer: Writer) {
    this.writer = { ...writer };
    localStorage.setItem('writer', JSON.stringify(writer));
  }
  private permitsion(token: string) {
    return {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    };
  }
}
