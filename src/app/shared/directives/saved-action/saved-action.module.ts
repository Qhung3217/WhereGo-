import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedActionDirective } from './saved-action.directive';

@NgModule({
  declarations: [SavedActionDirective],
  imports: [CommonModule],
  exports: [SavedActionDirective],
})
export class SavedActionModule {}
