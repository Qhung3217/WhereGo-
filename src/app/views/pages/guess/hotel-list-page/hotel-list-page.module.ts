import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListPageComponent } from './hotel-list-page.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { SidebarNavModule } from 'src/app/views/base/sidebar-nav/sidebar-nav.module';
import { FilterBoxModule } from 'src/app/shared/components/filter-box/filter-box.module';
import { XIconModule } from 'src/app/shared/icons/x-icon/x-icon.module';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { RatingDecimarModule } from 'src/app/shared/components/rating-decimar/rating-decimar.module';
import { HeartIconModule } from 'src/app/shared/icons/heart-icon/heart-icon.module';
import { HeartSolidIconModule } from 'src/app/shared/icons/heart-solid-icon/heart-solid-icon.module';
import { PaginationModule } from 'src/app/shared/components/pagination/pagination.module';
import { SlidersIconModule } from 'src/app/shared/icons/sliders-icon/sliders-icon.module';
@NgModule({
  declarations: [HotelListPageComponent, HotelCardComponent],
  imports: [
    CommonModule,

    BreadcrumbModule,
    SidebarNavModule,
    FilterBoxModule,
    RatingDecimarModule,
    PaginationModule,

    XIconModule,
    HeartIconModule,
    HeartSolidIconModule,
    SlidersIconModule,
  ],
  exports: [HotelListPageComponent],
})
export class HotelListPageModule {}
