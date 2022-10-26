import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/core/models/review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  @Input() rounded: boolean = false;
  @Input() reviews: Review[] = [];
  page = 1;
  constructor() {}
}
