import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { RestaurantFilterInfor } from '../interfaces/restaurant-filter-infor.interface';
import { RestaurantLocalStorage } from '../interfaces/restaurant-local-storage.interface';
import { RestaurantDetail } from '../models/restaurant-detail-model';
import { Restaurant } from '../models/restaurant.model';
import { TravelerService } from './traveler.service';

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  constructor(
    private http: HttpClient,
    private travelerService: TravelerService,
    private cookieService: CookieService
  ) {}
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
  saved(restaurant: Restaurant) {
    const savedList = this.getSavedListInLocal();
    if (!savedList) {
      this.storeSavedListInLocal([{ data: restaurant, type: 'restaurant' }]);
    } else {
      savedList.push({ data: restaurant, type: 'restaurant' });
      this.storeSavedListInLocal(savedList);
    }
  }

  unSaved(restaurantId: number) {
    const savedList = this.getSavedListInLocal();
    if (savedList && savedList.length > 0) {
      const newList = savedList.filter(
        (restaurant: RestaurantLocalStorage) =>
          restaurant.data.id !== restaurantId
      );
      this.storeSavedListInLocal(newList);
    }
  }
  getSavedListInLocal() {
    const savedList = localStorage.getItem('restaurantSaved');
    return savedList && (JSON.parse(savedList) as RestaurantLocalStorage[]);
  }
  getAllFilterInfor() {
    return this.http.get<RestaurantFilterInfor>(
      environment.apiURL + 'restaurants/info'
    );
  }
  review(rating: number, comment: string, restaurantId: number) {
    const traveler = this.travelerService.traveler;
    const token = this.cookieService.get('traveler');

    return this.http.post(
      environment.apiURL + 'restaurants/' + restaurantId + '/review',
      {
        travelerEmail: traveler?.email,
        restaurantId,
        comment,
        rating,
      },
      this.permitsion(token)
    );
  }
  private storeSavedListInLocal(list: RestaurantLocalStorage[]) {
    localStorage.setItem('restaurantSaved', JSON.stringify(list));
  }
  private permitsion(token: string) {
    return {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    };
  }
}
