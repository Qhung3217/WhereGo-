import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @Input() runInMobile = true;
  @HostBinding('class.active') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    if (this.runInMobile === true) {
      this.handleToggleClass(event);
    } else if (window.innerWidth > 768) {
      this.handleToggleClass(event);
    }
  }
  constructor(private elRef: ElementRef) {}
  private handleToggleClass(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}
