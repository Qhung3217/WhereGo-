import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationListPageComponent } from './destination-list-page.component';
import { DestinationCardComponent } from './destination-card/destination-card.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { FilterBoxModule } from 'src/app/shared/components/filter-box/filter-box.module';

import { PaginationModule } from 'src/app/shared/components/pagination/pagination.module';
import { RatingDecimarModule } from 'src/app/shared/components/rating-decimar/rating-decimar.module';
import { DropdownDirectiveModule } from 'src/app/shared/directives/dropdown-directive/dropdown-directive.module';
import { SlidersIconModule } from 'src/app/shared/icons/sliders-icon/sliders-icon.module';
import { XIconModule } from 'src/app/shared/icons/x-icon/x-icon.module';
import { SidebarNavModule } from 'src/app/views/base/sidebar-nav/sidebar-nav.module';
import { SavedActionDirectiveModule } from 'src/app/shared/directives/saved-action/saved-action-directive.module';
import { HeartIconModule } from 'src/app/shared/icons/heart-icon/heart-icon.module';
import { HeartSolidIconModule } from 'src/app/shared/icons/heart-solid-icon/heart-solid-icon.module';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerModule } from 'src/app/shared/components/loading-spinner/loading-spinner.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [DestinationListPageComponent, DestinationCardComponent],
  imports: [
    CommonModule,
    RouterModule,

    NgxPaginationModule,

    BreadcrumbModule,
    SidebarNavModule,
    FilterBoxModule,
    RatingDecimarModule,
    PaginationModule,
    LoadingSpinnerModule,

    DropdownDirectiveModule,
    SavedActionDirectiveModule,

    HeartIconModule,
    HeartSolidIconModule,
    XIconModule,
    SlidersIconModule,
  ],
  exports: [DestinationListPageComponent, DestinationCardComponent],
})
export class DestinationListPageModule {}
