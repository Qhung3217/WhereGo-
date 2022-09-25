import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss'],
})
export class SearchModalComponent implements OnInit {
  @Input() searchType: 'hotel' | 'restaurant' | 'destination' | 'place';
  constructor() {}

  ngOnInit(): void {}
}
