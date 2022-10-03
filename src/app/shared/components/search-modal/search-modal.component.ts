import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss'],
})
export class SearchModalComponent {
  @Input() searchType:
    | 'hotel'
    | 'restaurant'
    | 'destination'
    | 'place'
    | 'article' = 'hotel';
  @Output() closeEmit = new EventEmitter();
  constructor() {}
  handleClose() {
    this.closeEmit.emit(true);
  }
}
