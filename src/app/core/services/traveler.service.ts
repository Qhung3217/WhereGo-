import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Traveler } from '../models/traveler.model';

@Injectable({ providedIn: 'root' })
export class TravelerService {
  constructor(private http: HttpClient) {}
  getDetail(username: string) {
    return this.http
      .get<Traveler>(environment.apiURL + 'travelers/' + username)
      .pipe(tap(this.storeUserDetail));
  }

  private storeUserDetail(traveler: Traveler) {
    localStorage.setItem('traveler', JSON.stringify(traveler));
  }
}
