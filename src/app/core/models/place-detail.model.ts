import { PlaceType } from './place-type.model';
import { Review } from './review.model';

export class PlaceDetail {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public image: string,
    public placeReviews: Review[],
    public placeTypes: PlaceType[],
    public placeGalleries: []
  ) {}
}
