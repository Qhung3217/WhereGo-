import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SearchType } from '../interfaces/search-modal-config.interface';
import { Article } from '../models/article.model';
import { Hotel } from '../models/hotel.model';
import { Place } from '../models/place.model';
import { Restaurant } from '../models/restaurant.model';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private http: HttpClient) {}
  hotelSearch(keyword: string) {
    return this.search('hotel', keyword);
  }
  restaurantSearch(keyword: string) {
    return this.search('restaurant', keyword);
  }
  articleSearch(keyword: string) {
    return this.search('article', keyword);
  }
  placeSearch(keyword: string) {
    return this.search('destination', keyword);
  }

  private search(category: SearchType, keyword: string) {
    let params = new HttpParams();
    if (category == 'destination') params = params.append('category', 'place');
    else params = params.append('keyword', category);
    params = params.append('keyword', keyword);
    return this.http.get<Hotel[] | Restaurant[] | Place[] | Article[]>(
      environment.apiURL + 'search',
      {
        params: params,
      }
    );
  }
}
