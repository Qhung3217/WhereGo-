import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBoxComponent } from './filter-box.component';

import { ChevronRightIconModule } from '../../icons/chevron-right-icon/chevron-right-icon.module';
import { FilterPartialComponent } from './filter-partial/filter-partial.component';

import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';
import { RestaurantFilterComponent } from './restaurant-filter/restaurant-filter.component';
import { FormsModule } from '@angular/forms';
import { CheckIconModule } from '../../icons/check-icon/check-icon.module';

import { RatingDecimarModule } from '../rating-decimar/rating-decimar.module';

@NgModule({
  declarations: [
    FilterBoxComponent,
    FilterPartialComponent,
    HotelFilterComponent,
    RestaurantFilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    RatingDecimarModule,

    ChevronRightIconModule,
    CheckIconModule,
  ],
  exports: [FilterBoxComponent, FilterPartialComponent],
})
export class FilterBoxModule {}
