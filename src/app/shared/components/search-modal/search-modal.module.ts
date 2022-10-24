import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModalComponent } from './search-modal.component';
import { FormsModule } from '@angular/forms';
import { SearchIconModule } from '../../icons/search-icon/search-icon.module';
import { BedIconModule } from '../../icons/bed-icon/bed-icon.module';
import { UtensilIconModule } from '../../icons/utensil-icon/utensil-icon.module';
import { MapLocationDotIconModule } from '../../icons/map-location-dot-icon/map-location-dot-icon.module';
import { XIconModule } from '../../icons/x-icon/x-icon.module';
import { NewspaperIconModule } from '../../icons/newspaper-icon/newspaper-icon.module';
import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';

@NgModule({
  declarations: [SearchModalComponent],
  imports: [
    CommonModule,
    FormsModule,

    LoadingSpinnerModule,

    SearchIconModule,
    BedIconModule,
    UtensilIconModule,
    MapLocationDotIconModule,
    XIconModule,
    NewspaperIconModule,
  ],
  exports: [SearchModalComponent],
})
export class SearchModalModule {}
