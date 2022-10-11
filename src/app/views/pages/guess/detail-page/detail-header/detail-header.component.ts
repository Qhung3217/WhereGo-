import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.scss'],
})
export class DetailHeaderComponent {
  @Input() headerTitle: string = 'Title';
  @Input() reviewNumber: number = 0;
  @Input() address: string = 'Viet nam';
  constructor() {}
}
