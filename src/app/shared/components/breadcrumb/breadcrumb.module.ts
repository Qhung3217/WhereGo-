import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterModule } from '@angular/router';
import { ChevronRightIconModule } from '../../icons/chevron-right-icon/chevron-right-icon.module';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [CommonModule, RouterModule, ChevronRightIconModule],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
