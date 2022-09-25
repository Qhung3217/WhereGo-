import { SearchModalModule } from './../../../../shared/components/search-modal/search-modal.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page.component';
import { MapLocationDotIconModule } from 'src/app/shared/icons/map-location-dot-icon/map-location-dot-icon.module';
import { BedIconModule } from 'src/app/shared/icons/bed-icon/bed-icon.module';
import { UtensilIconModule } from 'src/app/shared/icons/utensil-icon/utensil-icon.module';
import { SectionNavCardComponent } from './section-nav-card/section-nav-card.component';

@NgModule({
  declarations: [LandingPageComponent, SectionNavCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    MapLocationDotIconModule,
    BedIconModule,
    UtensilIconModule,
    SearchModalModule,
  ],
  exports: [LandingPageComponent, SectionNavCardComponent],
})
export class LandingPageModule {}
