import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestaurantLocalStorage } from '../interfaces/restaurant-local-storage.interface';
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

  private storeSavedListInLocal(list: RestaurantLocalStorage[]) {
    localStorage.setItem('restaurantSaved', JSON.stringify(list));
  }
}
