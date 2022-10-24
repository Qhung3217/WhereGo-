import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ImageService } from 'src/app/core/services/image.service';
import { SearchService } from 'src/app/core/services/search.service';

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
  searchSuggestions: any[] = [];
  isSearching = false;
  constructor(
    private searchService: SearchService,
    public imageService: ImageService
  ) {
    this.setPlaceholder();
  }
  ngOnInit() {
    this.input?.nativeElement.focus();
  }

  handleClose() {
    this.closeEmit.emit(true);
  }
  handleKeyPress() {
    switch (this.searchType) {
      case 'restaurant':
        this.isSearching = true;

        this.searchService
          .restaurantSearch(this.searchKey || '')
          .subscribe((res) => {
            this.searchSuggestions = [...res];
            this.isSearching = false;
          });
        break;
      case 'destination':
        this.isSearching = true;
        this.searchService
          .placeSearch(this.searchKey || '')
          .subscribe((res) => {
            this.searchSuggestions = [...res];
            this.isSearching = false;
          });

        break;
      case 'article':
        this.isSearching = true;
        this.searchService
          .articleSearch(this.searchKey || '')
          .subscribe((res) => {
            this.searchSuggestions = [...res];
            this.isSearching = false;
          });
        break;

      default:
        this.isSearching = true;
        this.searchService
          .hotelSearch(this.searchKey || '')
          .subscribe((res) => {
            this.searchSuggestions = [...res];
            this.isSearching = false;
          });

        break;
    }
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
