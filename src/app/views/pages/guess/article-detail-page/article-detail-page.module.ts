import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailPageComponent } from './article-detail-page.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [ArticleDetailPageComponent],
  imports: [CommonModule, BreadcrumbModule],
  exports: [ArticleDetailPageComponent],
})
export class ArticleDetailPageModule {}
