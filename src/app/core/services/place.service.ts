import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PlaceLocalStorage } from '../interfaces/place-local-storage.interface';
import { PlaceDetail } from '../models/place-detail.model';
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
  getDetail(id: number) {
    return this.http.get<PlaceDetail>(environment.apiURL + 'places/' + id);
  }

  saved(place: Place) {
    const savedList = this.getSavedListInLocal();
    if (!savedList) {
      this.storeSavedListInLocal([{ data: place, type: 'destination' }]);
    } else {
      savedList.push({ data: place, type: 'destination' });
      this.storeSavedListInLocal(savedList);
    }
  }

  unSaved(placeId: number) {
    const savedList = this.getSavedListInLocal();
    if (savedList && savedList.length > 0) {
      const newList = savedList.filter((place) => place.data.id !== placeId);
      this.storeSavedListInLocal(newList);
    }
  }
  getSavedListInLocal() {
    const savedList = localStorage.getItem('placeSaved');
    return savedList && (JSON.parse(savedList) as PlaceLocalStorage[]);
  }

  private storeSavedListInLocal(list: PlaceLocalStorage[]) {
    localStorage.setItem('placeSaved', JSON.stringify(list));
  }
}
