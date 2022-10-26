import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterObject } from 'src/app/core/interfaces/filter-object.interface';

@Component({
  selector: 'app-destination-filter',
  templateUrl: './destination-filter.component.html',
  styleUrls: ['./destination-filter.component.scss'],
})
export class DestinationFilterComponent {
  @Input() filterObject: FilterObject[] = [];
  @Output() filterEvent = new EventEmitter();
  filters: { placeTypes: any[]; rating: number } = {
    placeTypes: [],

    rating: 0,
  };
  constructor() {}

  handleFilterEvent(filterApplies: any[], type: string) {
    switch (type) {
      case 'placeType':
        this.filters.placeTypes = [...filterApplies];
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
