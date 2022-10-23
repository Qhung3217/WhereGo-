import { Hotel } from '../models/hotel.model';
export interface HotelLocalStorage {
  type: 'hotel';
  data: Hotel;
}
