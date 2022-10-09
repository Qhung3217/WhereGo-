import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { RatingDecimarModule } from '../rating-decimar/rating-decimar.module';
import { HeartIconModule } from '../../icons/heart-icon/heart-icon.module';
import { HeartSolidIconModule } from '../../icons/heart-solid-icon/heart-solid-icon.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent],

  imports: [
    CommonModule,
    RouterModule,
    RatingDecimarModule,
    HeartIconModule,
    HeartSolidIconModule,
  ],
  exports: [CardComponent],
})
export class CardModule {}
