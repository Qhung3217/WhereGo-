import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-nav-card',
  templateUrl: './section-nav-card.component.html',
  styleUrls: ['./section-nav-card.component.scss'],
})
export class SectionNavCardComponent {
  searchModalConfig: {
    show: boolean;
    type: 'article' | 'hotel' | 'restaurant' | 'destination' | 'place';
  } = { show: false, type: 'hotel' };
  constructor() {}
  handleNavClick(
    type: 'article' | 'hotel' | 'restaurant' | 'destination' | 'place'
  ) {
    this.searchModalConfig.show = true;
    this.searchModalConfig.type = type;
  }
}
