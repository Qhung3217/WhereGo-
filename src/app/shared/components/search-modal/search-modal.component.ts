import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss'],
})
export class SearchModalComponent implements OnInit {
  @Input() searchType:
    | 'hotel'
    | 'restaurant'
    | 'destination'
    | 'all'
    | 'article' = 'all';
  @Input() placeholder: string = 'Where to?';

  @Output() closeEmit = new EventEmitter();
  @ViewChild('input', { static: true }) input?: ElementRef;
  searchKey?: string;
  constructor() {
    this.setPlaceholder();
  }
  ngOnInit() {
    this.input?.nativeElement.focus();
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
