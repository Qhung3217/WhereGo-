import { Cuisine } from '../models/cuisine.model';
import { Feature } from '../models/feature.model';
import { Meal } from '../models/meal.model';

export interface RestaurantFilterInfor {
  cuisines: Cuisine[];
  meals: Meal[];
  features: Feature[];
  rating?: number;
}
