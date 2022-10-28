import { Cuisine } from './cuisine.model';
import { Feature } from './feature.model';
import { Meal } from './meal.model';
import { Review } from './review.model';

export class RestaurantDetail {
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public thumbnail: string,
    public district: string,
    public cuisines: Cuisine[],
    public meals: Meal[],
    public features: Feature[],
    public restaurantGalleries: [],
    public restaurantReviews: Review[]
  ) {}
}
