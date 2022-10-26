import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() page: number = 1;
  @Input() itemsPerPage: number = 10;
  @Input() maxSize: number = 5;
  @Input() totalItems: number = 100;

  constructor() {}
}
