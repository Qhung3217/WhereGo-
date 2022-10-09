import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelArticlesPageComponent } from './travel-articles-page.component';
import { PaginationModule } from 'src/app/shared/components/pagination/pagination.module';

@NgModule({
  declarations: [TravelArticlesPageComponent],
  imports: [CommonModule, PaginationModule],
  exports: [TravelArticlesPageComponent],
})
export class TravelArticlesPageModule {}
