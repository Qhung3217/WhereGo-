import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToReviewDirective } from './scroll-to-review.directive';

@NgModule({
  declarations: [ScrollToReviewDirective],
  imports: [CommonModule],
  exports: [ScrollToReviewDirective],
})
export class ScrollToReviewDirectiveModule {}
