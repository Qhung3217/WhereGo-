import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-group-raito',
  templateUrl: './form-group-raito.component.html',
  styleUrls: ['./form-group-raito.component.scss'],
})
export class FormGroupRaitoComponent {
  @Input() htmlId: string = 'checkbox';
  @Input() label: string = 'Checkbox';
  @Input() checked: boolean = false;
  @Output() changeEvent = new EventEmitter();
  constructor() {}
}
