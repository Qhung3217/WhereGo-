import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showHeaderMenuMobile = false;
  showSearchModal = false;
  constructor() {}
  handleSearchClick(event: Event) {
    event.stopPropagation();
    this.showSearchModal = true;
  }
}
