import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-group-checkbox',
  templateUrl: './form-group-checkbox.component.html',
  styleUrls: ['./form-group-checkbox.component.scss'],
})
export class FormGroupCheckboxComponent {
  @Input() htmlId: string = 'checkbox';
  @Input() label: string = 'Checkbox';
  @Input() checked: boolean = false;
  @Output() changeEvent = new EventEmitter();
  constructor() {}

  onChange() {
    this.checked = !this.checked;
    this.changeEvent.emit(true);
  }
}
