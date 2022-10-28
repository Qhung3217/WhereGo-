import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { HotelFilterInfor } from '../interfaces/hotel-filter-infor.interface';
import { HotelLocalStorage } from '../interfaces/hotel-local-storage.interface';
import { HotelDetail } from '../models/hotel-detail.model';
import { Hotel } from '../models/hotel.model';
import { TravelerService } from './traveler.service';

@Injectable({ providedIn: 'root' })
export class HotelService {
  constructor(
    private http: HttpClient,
    private travelerService: TravelerService,
    private cookieService: CookieService
  ) {}
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
  review(rating: number, comment: string, hotelId: number) {
    const traveler = this.travelerService.traveler;
    const token = this.cookieService.get('traveler');
    return this.http.post(
      environment.apiURL + 'hotels/' + hotelId + '/review',
      {
        travelerEmail: traveler?.email,
        hotelId,
        comment,
        rating,
      },
      this.permitsion(token)
    );
  }
  private storeSavedListInLocal(list: HotelLocalStorage[]) {
    localStorage.setItem('hotelSaved', JSON.stringify(list));
  }
  private permitsion(token: string) {
    return {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    };
  }
}
