import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoResizeTextareaDirective } from './auto-resize-textarea.directive';

@NgModule({
  declarations: [AutoResizeTextareaDirective],
  imports: [CommonModule],
  exports: [AutoResizeTextareaDirective],
})
export class AutoResizeTextareaDirectiveModule {}
