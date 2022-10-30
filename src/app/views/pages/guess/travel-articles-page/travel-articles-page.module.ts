import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelArticlesPageComponent } from './travel-articles-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingSpinnerModule } from 'src/app/shared/components/loading-spinner/loading-spinner.module';
import { RouterModule } from '@angular/router';
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';
import { FetchFailModule } from 'src/app/shared/components/fetch-fail/fetch-fail.module';

@NgModule({
  declarations: [TravelArticlesPageComponent],
  imports: [
    CommonModule,
    RouterModule,

    NgxPaginationModule,

    LoadingSpinnerModule,
    LazyLoadImageModule,

    FetchFailModule,
  ],
  exports: [TravelArticlesPageComponent],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
})
export class TravelArticlesPageModule {}
