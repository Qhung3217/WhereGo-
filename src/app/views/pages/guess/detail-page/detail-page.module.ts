import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page.component';
import { ReviewComponent } from './review/review.component';
import { HotelComponent } from './hotel/hotel.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DestinationComponent } from './destination/destination.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { RatingDecimarModule } from 'src/app/shared/components/rating-decimar/rating-decimar.module';
import { PencilIconModule } from 'src/app/shared/icons/pencil-icon/pencil-icon.module';
import { HeartIconModule } from 'src/app/shared/icons/heart-icon/heart-icon.module';
import { HeartSolidIconModule } from 'src/app/shared/icons/heart-solid-icon/heart-solid-icon.module';
import { BedIconModule } from 'src/app/shared/icons/bed-icon/bed-icon.module';
import { UsersIconModule } from 'src/app/shared/icons/users-icon/users-icon.module';
import { ThumbGaleriesComponent } from './thumb-galeries/thumb-galeries.component';
import { SwiperModule } from 'swiper/angular';
import { LocationDotIconModule } from 'src/app/shared/icons/location-dot-icon/location-dot-icon.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CalenderDaysIconModule } from 'src/app/shared/icons/calender-days-icon/calender-days-icon.module';
import { ChevronRightIconModule } from 'src/app/shared/icons/chevron-right-icon/chevron-right-icon.module';
import { DetailHeaderComponent } from './detail-header/detail-header.component';
import { LoadingSpinnerModule } from 'src/app/shared/components/loading-spinner/loading-spinner.module';
import { CircleExclamationIconModule } from 'src/app/shared/icons/circle-exclamation-icon/circle-exclamation-icon.module';
import { RefreshDirectiveModule } from 'src/app/shared/directives/refresh-directive/refresh-directive.module';
import { RouterModule } from '@angular/router';
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnlyNumberDirectiveModule } from 'src/app/shared/directives/only-number-directive/only-number-directive.module';
import { ScrollToReviewDirectiveModule } from 'src/app/shared/directives/scroll-to-review-directive/scroll-to-review-directive.module';
import { FetchFailModule } from 'src/app/shared/components/fetch-fail/fetch-fail.module';

@NgModule({
  declarations: [
    DetailPageComponent,
    ReviewComponent,
    HotelComponent,
    RestaurantComponent,
    DestinationComponent,
    ThumbGaleriesComponent,
    DetailHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    SwiperModule,
    NgbDatepickerModule,
    LazyLoadImageModule,
    NgxPaginationModule,

    BreadcrumbModule,
    RatingDecimarModule,
    LoadingSpinnerModule,
    FetchFailModule,

    RefreshDirectiveModule,
    OnlyNumberDirectiveModule,
    ScrollToReviewDirectiveModule,

    PencilIconModule,
    HeartIconModule,
    HeartSolidIconModule,
    BedIconModule,
    UsersIconModule,
    LocationDotIconModule,
    CalenderDaysIconModule,
    ChevronRightIconModule,
    CircleExclamationIconModule,
  ],
  exports: [DetailPageComponent],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
})
export class DetailPageModule {}
