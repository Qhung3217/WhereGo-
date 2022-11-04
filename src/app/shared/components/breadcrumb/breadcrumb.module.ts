import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterModule } from '@angular/router';
import { ChevronRightIconModule } from '../../icons/chevron-right-icon/chevron-right-icon.module';
import { ShortenPipeModule } from '../../pipes/shorten-pipe/shorten-pipe.module';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule,
    ShortenPipeModule,
    ChevronRightIconModule,
  ],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
