import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HotelFilterInfor } from '../interfaces/hotel-filter-infor.interface';
import { HotelLocalStorage } from '../interfaces/hotel-local-storage.interface';
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
  saved(hotel: Hotel) {
    const savedList = this.getSavedListInLocal();
    if (!savedList) {
      this.storeSavedListInLocal([{ data: hotel, type: 'hotel' }]);
    } else {
      savedList.push({ data: hotel, type: 'hotel' });
      this.storeSavedListInLocal(savedList as { data: Hotel; type: 'hotel' }[]);
    }
  }

  unSaved(hotelId: number) {
    const savedList = this.getSavedListInLocal();
    if (savedList && savedList.length > 0) {
      const newList = savedList.filter(
        (hotel: HotelLocalStorage) => hotel.data.id !== hotelId
      );
      this.storeSavedListInLocal(newList as { data: Hotel; type: 'hotel' }[]);
    }
  }
  getSavedListInLocal() {
    const savedList = localStorage.getItem('hotelSaved');
    return savedList && (JSON.parse(savedList) as HotelLocalStorage[]);
  }
  getAllFilterInfor() {
    return this.http.get<HotelFilterInfor>(environment.apiURL + 'hotels/info');
  }
  private storeSavedListInLocal(list: HotelLocalStorage[]) {
    localStorage.setItem('hotelSaved', JSON.stringify(list));
  }
}
