import { Review } from './review.model';

export class Restaurant {
  constructor(
    private id: number,
    private name: string,
    private address: string,
    private thumbnail: string,
    private cuisines: string,
    private meals: string,
    private features: string,
    private restaurantGalleries: [],
    private restaurantReviews: Review[]
  ) {}
}
