import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../interfaces/login-response.interface';
import { TravelerService } from './traveler.service';
import { WriterService } from './writer.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  travelerCredential = new BehaviorSubject<string | null>(null);
  writerCredential = new BehaviorSubject<string | null>(null);
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private cookie: CookieService,
    private travelerService: TravelerService,
    private writerService: WriterService
  ) {}
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
  travelerLogin(email: string, password: string) {
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
      .pipe(
        tap((res) => {
          this.handleAuthentication(res.username, res.token);
          this.cookie.set('traveler', res.token);

          this.travelerCredential.next(res.token);
        })
      );
  }
  writerLogin(email: string, password: string) {
    return this.http
      .post<LoginResponse>(
        environment.apiURL + 'login',
        {
          email,
          password,
        },
        {
          params: {
            type: 'writer',
          },
        }
      )
      .pipe(
        tap((res) => {
          this.handleAuthentication(res.username, res.token, true);
          this.cookie.set('writer', res.token);

          this.writerCredential.next(res.token);
        })
      );
  }
  writerLogout() {
    this.cookie.deleteAll();
    this.writerService.remove();
  }
  travelerLogout() {
    this.cookie.deleteAll();
    this.travelerService.remove();
  }
  private handleAuthentication(
    username: string,
    token: string,
    isWritter = false
  ) {
    if (isWritter) {
      this.writerLogout();
      this.writerService.getDetail(username, token);
      this.redirect(username);
    } else {
      this.travelerLogout();
      this.travelerService.getDetail(username, token);
      this.redirect(username, false);
    }
  }
  private redirect(username: string, isWriter = true) {
    let nextUrl = null;
    let scroll = null;
    this.route.queryParamMap.subscribe((params) => {
      nextUrl = params.get('redirectUrl');
      scroll = params.get('scroll');
    });

    if (nextUrl) {
      if (scroll)
        this.router.navigate([nextUrl], {
          queryParams: {
            scroll: true,
          },
        });
      else this.router.navigate([nextUrl]);
    } else if (isWriter)
      this.router.navigate(['/writer', username], {
        queryParamsHandling: 'merge',
      });
    else
      this.router.navigate(['/traveler', username], {
        queryParamsHandling: 'merge',
      });
  }
}
