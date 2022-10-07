import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() thumb?: string;
  @Input() name?: string;
  @Input() type?: string;
  @Input() rating: number = 0;
  @Input() categories?: string[];
  @Input() isItemHotel: boolean = true;
}
