import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedPageComponent } from './saved-page.component';
import { SavedItemComponent } from './saved-item/saved-item.component';
import { HeartIconModule } from 'src/app/shared/icons/heart-icon/heart-icon.module';
import { HeartSolidIconModule } from 'src/app/shared/icons/heart-solid-icon/heart-solid-icon.module';
import { RatingDecimarModule } from 'src/app/shared/components/rating-decimar/rating-decimar.module';

@NgModule({
  declarations: [SavedPageComponent, SavedItemComponent],
  imports: [
    CommonModule,

    RatingDecimarModule,

    HeartIconModule,
    HeartSolidIconModule,
  ],
  exports: [SavedPageComponent, SavedItemComponent],
})
export class SavedPageModule {}
