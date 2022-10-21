import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, lastValueFrom, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Traveler } from '../models/traveler.model';

@Injectable({ providedIn: 'root' })
export class TravelerService {
  traveler?: Traveler;
  travelerEvent = new BehaviorSubject<any>(undefined);
  constructor(private http: HttpClient, private cookie: CookieService) {}
  loadFormLocal() {
    const local = localStorage.getItem('traveler');
    // console.log(local);
    if (local) {
      // console.log('2', local);

      this.traveler = JSON.parse(local);
      this.travelerEvent.next({ ...this.traveler! });
    }
  }

  async getDetail(username: string, token: string) {
    return await lastValueFrom(
      this.http
        .get<Traveler>(
          environment.apiURL + 'travelers/' + username,
          this.permitsion(token)
        )
        .pipe(
          tap((traveler) => {
            this.saved(traveler);
            this.travelerEvent.next({ ...traveler });
          })
        ),
      { defaultValue: null }
    );
  }
  remove() {
    localStorage.removeItem('traveler');
    this.traveler = undefined;
    this.travelerEvent.next(undefined);
  }
  private saved(traveler: Traveler) {
    console.log('saved', traveler);
    this.traveler = { ...traveler };
    localStorage.setItem('traveler', JSON.stringify(traveler));
  }
  private permitsion(token: string) {
    return {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    };
  }
}
