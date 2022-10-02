import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-promotion',
  templateUrl: './section-promotion.component.html',
  styleUrls: ['./section-promotion.component.scss'],
})
export class SectionPromotionComponent {
  @Input() title: string = 'Top experiences on WhereGo?';

  constructor() {}
}
