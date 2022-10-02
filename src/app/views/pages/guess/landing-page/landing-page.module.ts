import { SearchModalModule } from './../../../../shared/components/search-modal/search-modal.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page.component';
import { MapLocationDotIconModule } from 'src/app/shared/icons/map-location-dot-icon/map-location-dot-icon.module';
import { BedIconModule } from 'src/app/shared/icons/bed-icon/bed-icon.module';
import { UtensilIconModule } from 'src/app/shared/icons/utensil-icon/utensil-icon.module';
import { SectionNavCardComponent } from './section-nav-card/section-nav-card.component';
import { SectionSearchComponent } from './section-search/section-search.component';
import { SearchIconModule } from 'src/app/shared/icons/search-icon/search-icon.module';
import { SectionTopExperiencesComponent } from './section-top-experiences/section-top-experiences.component';
import { RatingDecimarModule } from 'src/app/shared/components/rating-decimar/rating-decimar.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SectionTopDestinationComponent } from './section-top-destination/section-top-destination.component';
import { DestinationComponent } from './section-top-destination/destination/destination.component';
import { SectionArticleComponent } from './section-article/section-article.component';
import { NewspaperIconModule } from 'src/app/shared/icons/newspaper-icon/newspaper-icon.module';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    LandingPageComponent,
    SectionNavCardComponent,
    SectionSearchComponent,
    SectionTopExperiencesComponent,
    SectionTopDestinationComponent,
    DestinationComponent,
    SectionArticleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    MapLocationDotIconModule,
    BedIconModule,
    UtensilIconModule,
    SearchModalModule,
    SearchIconModule,
    RatingDecimarModule,
    CardModule,
    NewspaperIconModule,
  ],
  exports: [LandingPageComponent],
})
export class LandingPageModule {}
