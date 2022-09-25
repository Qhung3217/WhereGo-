import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { RatingDecimarModule } from '../rating-decimar/rating-decimar.module';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, RatingDecimarModule],
  exports: [CardComponent],
})
export class CardModule {}
