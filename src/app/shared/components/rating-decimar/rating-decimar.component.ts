import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-decimar',
  templateUrl: './rating-decimar.component.html',
  styleUrls: ['./rating-decimar.component.scss'],
})
export class RatingDecimarComponent implements OnInit {
  @Input('rate') currentRate = 3.5;
  constructor() {}

  ngOnInit(): void {}
}
