import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-group-radio',
  templateUrl: './form-group-radio.component.html',
  styleUrls: ['./form-group-radio.component.scss'],
})
export class FormGroupRadioComponent {
  @Input() htmlId: string = 'radio';
  @Input() label: string = 'Radio';
  @Input() checked: boolean = false;
  @Output() changeEvent = new EventEmitter();
  constructor() {}
  onChange() {
    this.checked = !this.checked;
    this.changeEvent.emit(true);
  }
}
