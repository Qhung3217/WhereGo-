import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { RatingDecimarModule } from '../rating-decimar/rating-decimar.module';
import { HeartIconModule } from '../../icons/heart-icon/heart-icon.module';
import { HeartSolidIconModule } from '../../icons/heart-solid-icon/heart-solid-icon.module';
import { RouterModule } from '@angular/router';
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';
import { SavedActionModule } from '../../directives/saved-action/saved-action.module';

@NgModule({
  declarations: [CardComponent],

  imports: [
    CommonModule,
    RouterModule,
    LazyLoadImageModule,

    RatingDecimarModule,
    SavedActionModule,

    HeartIconModule,
    HeartSolidIconModule,
  ],
  exports: [CardComponent],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
})
export class CardModule {}
