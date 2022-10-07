import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListPageComponent } from './restaurant-list-page.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';

import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { FilterBoxModule } from 'src/app/shared/components/filter-box/filter-box.module';
import { ListItemModule } from 'src/app/shared/components/list-item/list-item.module';
import { PaginationModule } from 'src/app/shared/components/pagination/pagination.module';
import { RatingDecimarModule } from 'src/app/shared/components/rating-decimar/rating-decimar.module';
import { DropdownDirectiveModule } from 'src/app/shared/directives/dropdown-directive/dropdown-directive.module';

import { SlidersIconModule } from 'src/app/shared/icons/sliders-icon/sliders-icon.module';
import { XIconModule } from 'src/app/shared/icons/x-icon/x-icon.module';
import { SidebarNavModule } from 'src/app/views/base/sidebar-nav/sidebar-nav.module';

@NgModule({
  declarations: [RestaurantListPageComponent, RestaurantCardComponent],
  imports: [
    CommonModule,

    BreadcrumbModule,
    SidebarNavModule,
    FilterBoxModule,
    RatingDecimarModule,
    PaginationModule,
    ListItemModule,

    DropdownDirectiveModule,

    XIconModule,
    SlidersIconModule,
  ],
  exports: [RestaurantListPageComponent, RestaurantCardComponent],
})
export class RestaurantListPageModule {}
