import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, lastValueFrom, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TravelerLocal } from '../interfaces/traveler-local.interface';
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
      const traveler = JSON.parse(local);
      const token = this.cookie.get('traveler');
      this.getDetail(traveler.username, token).then((traveler) => {
        if (traveler) {
          this.traveler = { ...traveler };
          this.travelerEvent.next({ ...traveler });
        } else {
          this.traveler = undefined;
          this.travelerEvent.next(undefined);
        }
      });
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

  update(name: string, tel: string, dob: string, avatar: null | File = null) {
    const token = this.cookie.get('traveler');

    const payload = new FormData();
    payload.append('name', name);
    payload.append('tel', tel);
    payload.append('dob', dob);
    if (avatar == null) payload.append('avatar', '');
    else payload.append('avatar', avatar);

    return this.http.put<{ statusCode: string; message: string }>(
      environment.apiURL + 'travelers/' + this.traveler?.username,
      payload,
      this.permitsion(token)
    );
  }
  changePassword(oldPassword: string, newPassword: string) {
    const token = this.cookie.get('traveler');
    return this.http.put(
      environment.apiURL + 'travelers/change-password',
      {
        email: this.traveler?.email,
        oldPassword,
        newPassword,
      },
      this.permitsion(token)
    );
  }
  remove() {
    localStorage.removeItem('traveler');
    this.traveler = undefined;
    this.travelerEvent.next(undefined);
  }
  checkOut(
    hotelId: number,
    bookingDate: string,
    numberOfPeople: number,
    price: number,
    checkInDate: string,
    checkOutDate: string
  ) {
    const token = this.cookie.get('traveler');

    return this.http.post(
      environment.apiURL + 'bookings',
      {
        travelerEmail: this.traveler?.email,
        hotelId: hotelId,
        bookingDate: bookingDate,
        numberOfPeople: numberOfPeople,
        price: price,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
      },
      this.permitsion(token)
    );
  }
  private saved(traveler: Traveler) {
    console.log('saved', traveler);
    const travelerSimple: TravelerLocal = {
      username: traveler.username,
    };
    this.traveler = { ...traveler };
    localStorage.setItem('traveler', JSON.stringify(travelerSimple));
  }
  private permitsion(token: string) {
    return {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    };
  }
}
