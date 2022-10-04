import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupCheckboxComponent } from './form-group-checkbox.component';
import { CheckIconModule } from '../../icons/check-icon/check-icon.module';

@NgModule({
  declarations: [FormGroupCheckboxComponent],
  imports: [CommonModule, CheckIconModule],
  exports: [FormGroupCheckboxComponent],
})
export class FormGroupCheckboxModule {}
