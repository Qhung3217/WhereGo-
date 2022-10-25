import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filter-partial',
  templateUrl: './filter-partial.component.html',
  styleUrls: ['./filter-partial.component.scss'],
})
export class FilterPartialComponent implements OnInit {
  @Input() filters: any[] = [];
  @Input() nameGroup: string = 'Filter Group';
  @Input() isFilterRating = false;
  @Output() filterEvent = new EventEmitter();
  @Output() ratingEvent = new EventEmitter();
  filterApplies: any[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log();
  }
  handlCheckboxClick(filter: any) {
    const isApplied = this.filterApplies.find(
      (filterApply) => filterApply.id === filter.id
    );
    if (isApplied)
      this.filterApplies = this.filterApplies.filter(
        (filterApply) => filterApply.id !== filter.id
      );
    else this.filterApplies.push(filter);
    console.log('In filter partial: ', filter, this.filterApplies);
    this.filterEvent.emit([...this.filterApplies]);
  }
  handleRadioClick(rating: string) {
    this.ratingEvent.emit(rating);
  }
}
