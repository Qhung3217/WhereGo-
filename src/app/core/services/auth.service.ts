import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
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
}
