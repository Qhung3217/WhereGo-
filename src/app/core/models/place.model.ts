import { Review } from './review.model';

export class Place {
  constructor(
    private id: number,
    private name: string,
    private description: string,
    private image: string,
    private placeReviews: Review[],
    private placeTypes: [],
    private placeGalleries: []
  ) {}
}
