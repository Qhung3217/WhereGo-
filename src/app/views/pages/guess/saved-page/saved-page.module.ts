import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedPageComponent } from './saved-page.component';
import { SavedItemComponent } from './saved-item/saved-item.component';
import { HeartIconModule } from 'src/app/shared/icons/heart-icon/heart-icon.module';
import { HeartSolidIconModule } from 'src/app/shared/icons/heart-solid-icon/heart-solid-icon.module';
import { RatingDecimarModule } from 'src/app/shared/components/rating-decimar/rating-decimar.module';
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { RouterModule } from '@angular/router';
import { SavedActionModule } from 'src/app/shared/directives/saved-action/saved-action.module';

@NgModule({
  declarations: [SavedPageComponent, SavedItemComponent],
  imports: [
    CommonModule,
    RouterModule,

    LazyLoadImageModule,

    RatingDecimarModule,

    HeartIconModule,
    HeartSolidIconModule,
  ],
  exports: [SavedPageComponent, SavedItemComponent],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
})
export class SavedPageModule {}
