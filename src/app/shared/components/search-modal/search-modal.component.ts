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
    | 'all'
    | 'article' = 'all';
  @Output() closeEmit = new EventEmitter();
  searchKey?: string;
  placeholder: string = 'Where to?';
  constructor() {
    this.setPlaceholder();
  }
  handleClose() {
    this.closeEmit.emit(true);
  }
  private setPlaceholder() {
    switch (this.searchType) {
      case 'hotel':
        this.placeholder = 'Find hotel';
        break;
      case 'restaurant':
        this.placeholder = 'Find restaurant';
        break;
      case 'destination':
        this.placeholder = 'Find destination';
        break;
      case 'article':
        this.placeholder = 'Find article';
        break;

      default:
        this.placeholder = 'Where to?';

        break;
    }
  }
}
