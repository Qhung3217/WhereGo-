import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollToReview]',
})
export class ScrollToReviewDirective {
  @HostListener('window:click', ['$event']) scrollToReview(event: Event) {
    if (this.elRef.nativeElement.contains(event.target)) {
      const body = this.elRef.nativeElement.closest('body');
      const review = body.querySelector('#reviews');
      // console.log(body, review);
      if (review)
        review.scrollIntoView({
          behavior: 'smooth',
        });
    }
  }
  constructor(private elRef: ElementRef) {}
}
