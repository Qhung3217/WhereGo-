import { Restaurant } from '../models/restaurant.model';

export interface RestaurantLocalStorage {
  type: 'restaurant';
  data: Restaurant;
}
