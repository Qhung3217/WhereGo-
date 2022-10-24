import { PlaceType } from './place-type.model';

export class Place {
  constructor(
    public id: number,
    public name: string,
    public image: string,
    public districtName: string,
    public placeTypes: PlaceType[],
    public averageRating: number,
    public totalRating: number
  ) {}
}
