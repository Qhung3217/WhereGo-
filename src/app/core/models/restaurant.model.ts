import { Review } from './review.model';

export class Restaurant {
  constructor(
    public id: number,
    public name: string,
    public address: string,
    private thumbnail: string,
    public cuisines: string,
    public meals: string,
    public features: string,
    public restaurantGalleries: [],
    public restaurantReviews: Review[]
  ) {}
}
