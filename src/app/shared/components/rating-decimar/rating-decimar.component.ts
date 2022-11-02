import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating-decimar',
  templateUrl: './rating-decimar.component.html',
  styleUrls: ['./rating-decimar.component.scss'],
})
export class RatingDecimarComponent {
  @Input() rate = 3.5;
  @Input() readOnly: boolean = true;
  @Output() rateChange = new EventEmitter<number>();
  constructor() {}
  handleRateChange(rate: any) {
    this.rateChange.emit(rate);
  }
}
