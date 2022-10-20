import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefreshDirective } from './refresh.directive';

@NgModule({
  declarations: [RefreshDirective],
  imports: [CommonModule],
  exports: [RefreshDirective],
})
export class RefreshDirectiveModule {}
