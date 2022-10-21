import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestaurantDetail } from '../models/restaurant-detail-model';
import { Restaurant } from '../models/restaurant.model';

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  constructor(private http: HttpClient) {}
  getRandom(quantity: number = 4) {
    return this.http.get<Restaurant[]>(
      environment.apiURL + 'restaurants/random',
      {
        params: {
          quantity: quantity,
        },
      }
    );
  }
  getDetail(id: number) {
    return this.http.get<RestaurantDetail>(
      environment.apiURL + 'restaurants/' + id
    );
  }
}
