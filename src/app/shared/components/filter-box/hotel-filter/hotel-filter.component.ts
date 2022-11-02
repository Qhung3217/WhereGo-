import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterObject } from 'src/app/core/interfaces/filter-object.interface';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss'],
})
export class HotelFilterComponent {
  @Input() filterObject: FilterObject[] = [];

  @Output() filterEvent = new EventEmitter();

  filters: {
    roomTypes: any[];
    roomFeatures: any[];
    propertyAmenities: any[];
    rating: number;
    hotelClasses: any[];
  } = {
    roomTypes: [],
    roomFeatures: [],
    propertyAmenities: [],
    rating: 0,
    hotelClasses: [],
  };
  constructor() {}
  handleFilterEvent(filterApplies: any[], type: string) {
    console.log(filterApplies, type);
    switch (type) {
      case 'roomType':
        this.filters.roomTypes = [...filterApplies];
        break;
      case 'roomFeature':
        this.filters.roomFeatures = [...filterApplies];
        break;
      case 'propertyAmenity':
        this.filters.propertyAmenities = [...filterApplies];
        break;
      case 'hotelClass':
        this.filters.hotelClasses = [...filterApplies];
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
