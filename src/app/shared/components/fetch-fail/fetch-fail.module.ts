import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchFailComponent } from './fetch-fail.component';
import { RefreshDirectiveModule } from '../../directives/refresh-directive/refresh-directive.module';
import { CircleExclamationIconModule } from '../../icons/circle-exclamation-icon/circle-exclamation-icon.module';

@NgModule({
  declarations: [FetchFailComponent],
  imports: [CommonModule, RefreshDirectiveModule, CircleExclamationIconModule],
  exports: [FetchFailComponent],
})
export class FetchFailModule {}
