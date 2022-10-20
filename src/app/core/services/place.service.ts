import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Place } from '../models/place.model';

@Injectable({ providedIn: 'root' })
export class PlaceService {
  constructor(private http: HttpClient) {}
  getRandom(quantity: number = 4) {
    return this.http.get<Place[]>(environment.apiURL + 'places/random', {
      params: {
        quantity: quantity,
      },
    });
  }
}
