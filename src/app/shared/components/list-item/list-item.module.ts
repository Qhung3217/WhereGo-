import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item.component';
import { HeartIconModule } from '../../icons/heart-icon/heart-icon.module';
import { RatingDecimarModule } from '../rating-decimar/rating-decimar.module';
import { HeartSolidIconModule } from '../../icons/heart-solid-icon/heart-solid-icon.module';

@NgModule({
  declarations: [ListItemComponent],
  imports: [
    CommonModule,

    RatingDecimarModule,

    HeartIconModule,
    HeartSolidIconModule,
  ],
  exports: [ListItemComponent],
})
export class ListItemModule {}
