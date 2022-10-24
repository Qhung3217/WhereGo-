import { Place } from '../models/place.model';

export interface PlaceLocalStorage {
  type: 'destination';
  data: Place;
}
