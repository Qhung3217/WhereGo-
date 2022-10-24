import { Cuisine } from './cuisine.model';
import { Feature } from './feature.model';
import { Meal } from './meal.model';

export class Restaurant {
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public thumbnail: string,
    public cuisines: Cuisine[],
    public meals: Meal[],
    public features: Feature[],
    public districtName: string,
    public averageRating: number,
    public totalRating: number
  ) {}
}
