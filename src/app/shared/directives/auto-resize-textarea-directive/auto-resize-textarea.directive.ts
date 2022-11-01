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
  @HostListener('input') resize() {
    this.elRef.nativeElement.style.height = 'auto';
    this.elRef.nativeElement.style.height = `${this.elRef.nativeElement.scrollHeight}px`;
  }

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.elRef.nativeElement.style.height = 'auto';
    this.elRef.nativeElement.style.height = `${this.elRef.nativeElement.scrollHeight}px`;
  }
}
