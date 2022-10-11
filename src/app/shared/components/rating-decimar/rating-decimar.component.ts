import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-decimar',
  templateUrl: './rating-decimar.component.html',
  styleUrls: ['./rating-decimar.component.scss'],
})
export class RatingDecimarComponent {
  @Input() rate = 3.5;
  @Input() readOnly: boolean = true;
  constructor() {}
}
