import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterObject } from 'src/app/core/interfaces/filter-object.interface';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss'],
})
export class FilterBoxComponent implements OnInit {
  @Input() filterObject: FilterObject[] = [];
  @Input() category: 'hotel' | 'restaurant' | 'destination' = 'hotel';

  @Output() filterChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log();
  }
  handleFilterEvent(filters: any[]) {
    console.log('filter box: ', filters);
    this.filterChanged.emit(filters);
  }
}
