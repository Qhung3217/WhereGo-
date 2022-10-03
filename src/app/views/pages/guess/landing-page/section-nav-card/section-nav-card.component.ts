import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-nav-card',
  templateUrl: './section-nav-card.component.html',
  styleUrls: ['./section-nav-card.component.scss'],
})
export class SectionNavCardComponent {
  searchModalConfig = {
    show: false,
    type: 'hotel',
  };
  constructor() {}
  handleNavClick(type: string) {
    this.searchModalConfig.show = true;
    this.searchModalConfig.type = type;
  }
}
