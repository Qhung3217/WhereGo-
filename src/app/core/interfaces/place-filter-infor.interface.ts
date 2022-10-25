import { PlaceType } from '../models/place-type.model';

export interface PlaceFilterInfor {
  placeTypes: PlaceType[];
  rating?: number;
}
