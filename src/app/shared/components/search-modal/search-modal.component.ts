import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss'],
})
export class SearchModalComponent {
  @Input() searchType: 'hotel' | 'restaurant' | 'destination' | 'place' =
    'hotel';
  constructor() {}
}
