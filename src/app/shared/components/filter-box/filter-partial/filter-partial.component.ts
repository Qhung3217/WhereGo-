import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/core/services/filter.service';

@Component({
  selector: 'app-filter-partial',
  templateUrl: './filter-partial.component.html',
  styleUrls: ['./filter-partial.component.scss'],
})
export class FilterPartialComponent implements OnInit, OnDestroy {
  @Input() filters: any[] = [];
  @Input() nameGroup: string = 'Filter Group';
  @Input() isFilterRating = false;
  @Output() filterEvent = new EventEmitter();
  @Output() ratingEvent = new EventEmitter();

  filterApplies: any[] = [];
  filterSub!: Subscription;
  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.filterSub = this.filterService.removeEvent.subscribe((filterRemove) =>
      this.remove(filterRemove)
    );
  }
  ngOnDestroy(): void {
    if (this.filterSub) this.filterSub.unsubscribe();
  }
  handlCheckboxChange(filter: any) {
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
  handleRadioChange(rating: number) {
    this.ratingEvent.emit(rating);
  }
  remove(removeFilter: any) {
    if (removeFilter === 'all') {
      this.filterApplies = [];
      this.filterEvent.emit([...this.filterApplies]);
    } else if (removeFilter === 'rating') {
      this.ratingEvent.emit(0);
    } else {
      const newFilterApply = this.filterApplies.filter((filterApply) => {
        return (
          (filterApply?.type && filterApply.type !== removeFilter.value) ||
          (filterApply?.name && filterApply.name !== removeFilter.value) ||
          (filterApply?.feature && filterApply.feature !== removeFilter.value)
        );
      });
      console.log(
        JSON.stringify(newFilterApply),
        JSON.stringify(this.filterApplies),
        removeFilter
      );
      if (
        JSON.stringify(newFilterApply) !== JSON.stringify(this.filterApplies)
      ) {
        this.filterApplies = [...newFilterApply];
        this.filterEvent.emit([...this.filterApplies]);
      }
    }
  }
  updateUIAfterRemove(id: number) {
    return !!this.filterApplies.find((filterApply) => filterApply.id === id);
  }
}
