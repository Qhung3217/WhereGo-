import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBoxComponent } from './filter-box.component';

import { ChevronRightIconModule } from '../../icons/chevron-right-icon/chevron-right-icon.module';
import { FormGroupCheckboxModule } from '../form-group-checkbox/form-group-checkbox.module';
import { FilterPartialComponent } from './filter-partial/filter-partial.component';

@NgModule({
  declarations: [FilterBoxComponent, FilterPartialComponent],
  imports: [CommonModule, ChevronRightIconModule, FormGroupCheckboxModule],
  exports: [FilterBoxComponent, FilterPartialComponent],
})
export class FilterBoxModule {}
