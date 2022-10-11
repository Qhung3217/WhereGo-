import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page.component';
import { ReviewComponent } from './review/review.component';
import { HotelComponent } from './hotel/hotel.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DestinationComponent } from './destination/destination.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { RatingDecimarModule } from 'src/app/shared/components/rating-decimar/rating-decimar.module';
import { ShareIconModule } from 'src/app/shared/icons/share-icon/share-icon.module';
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
import { PaginationModule } from 'src/app/shared/components/pagination/pagination.module';
import { ChevronRightIconModule } from 'src/app/shared/icons/chevron-right-icon/chevron-right-icon.module';
import { DetailHeaderComponent } from './detail-header/detail-header.component';

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

    SwiperModule,
    NgbDatepickerModule,

    BreadcrumbModule,
    RatingDecimarModule,
    PaginationModule,

    ShareIconModule,
    PencilIconModule,
    HeartIconModule,
    HeartSolidIconModule,
    BedIconModule,
    UsersIconModule,
    LocationDotIconModule,
    CalenderDaysIconModule,
    ChevronRightIconModule,
  ],
  exports: [DetailPageComponent],
})
export class DetailPageModule {}
