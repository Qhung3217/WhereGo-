import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HotelDetail } from '../models/hotel-detail.model';
import { Hotel } from '../models/hotel.model';

@Injectable({ providedIn: 'root' })
export class HotelService {
  constructor(private http: HttpClient) {}
  getRandom(quantity: number = 4) {
    return this.http.get<Hotel[]>(environment.apiURL + 'hotels/random', {
      params: {
        quantity: quantity,
      },
    });
  }
  getDetail(id: number) {
    return this.http.get<HotelDetail>(environment.apiURL + 'hotels/' + id);
  }
}
