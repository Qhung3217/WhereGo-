import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../interfaces/login-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private cookie: CookieService) {}
  register(
    email: string,
    password: string,
    username: string,
    name: string,
    tel: string,
    dob: string,
    avatar: null | File = null
  ) {
    const payload = new FormData();
    payload.append('email', email);
    payload.append('password', password);
    payload.append('username', username);
    payload.append('name', name);
    payload.append('tel', tel);
    payload.append('dob', dob);
    if (avatar == null) payload.append('avatar', '');
    else payload.append('avatar', avatar);

    return this.http.post<{ statusCode: string; message: string }>(
      environment.apiURL + 'signup',
      payload
    );
  }
  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>(
        environment.apiURL + 'login',
        {
          email,
          password,
        },
        {
          params: {
            type: 'traveler',
          },
        }
      )
      .pipe(tap((res) => this.handleAuthentication(res.token)));
  }
  writterLogin(email: string, password: string) {
    return this.http
      .post<LoginResponse>(
        environment.apiURL + 'login',
        {
          email,
          password,
        },
        {
          params: {
            type: 'writter',
          },
        }
      )
      .pipe(tap((res) => this.handleAuthentication(res.token)));
  }
  private handleAuthentication(token: string) {
    this.cookie.set('token', token);
  }
}
