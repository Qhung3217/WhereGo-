import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRefresh]',
})
export class RefreshDirective {
  @HostListener('click') refresh() {
    window.location.reload();
  }
  constructor(private elementRef: ElementRef) {}
}
