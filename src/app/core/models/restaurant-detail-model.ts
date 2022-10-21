import { Review } from './review.model';

export class RestaurantDetail {
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public thumbnail: string,
    public cuisines: string,
    public meals: string,
    public features: string,
    public restaurantGalleries: [],
    public restaurantReviews: Review[]
  ) {}
}
