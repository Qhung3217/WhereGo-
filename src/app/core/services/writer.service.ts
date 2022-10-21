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
