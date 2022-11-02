import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appAutoResizeTextarea]',
})
export class AutoResizeTextareaDirective implements OnInit {
  @HostListener('input') handleInput() {
    this.setHeight();
  }
  @HostListener('window:resize') handleResize() {
    this.setHeight();
  }
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.setHeight();
  }
  private setHeight() {
    this.elRef.nativeElement.style.height = 'auto';
    this.elRef.nativeElement.style.height = `${this.elRef.nativeElement.scrollHeight}px`;
  }
}
