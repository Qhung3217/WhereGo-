import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterObject } from 'src/app/core/interfaces/filter-object.interface';

@Component({
  selector: 'app-restaurant-filter',
  templateUrl: './restaurant-filter.component.html',
  styleUrls: ['./restaurant-filter.component.scss'],
})
export class RestaurantFilterComponent {
  @Input() filterObject: FilterObject[] = [];

  @Output() filterEvent = new EventEmitter();

  filters: { cuisines: any[]; meals: any[]; features: any[]; rating: number } =
    {
      cuisines: [],
      meals: [],
      features: [],
      rating: 0,
    };
  constructor() {}

  handleFilterEvent(filterApplies: any[], type: string) {
    switch (type) {
      case 'cuisine':
        this.filters.cuisines = [...filterApplies];
        break;
      case 'meal':
        this.filters.meals = [...filterApplies];
        break;
      case 'feature':
        this.filters.features = [...filterApplies];
        break;
      default:
        break;
    }
    this.filterEvent.emit(this.filters);
  }
  handleRatingEvent(rating: number) {
    this.filters.rating = rating;
    this.filterEvent.emit(this.filters);
  }
}
