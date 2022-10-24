import { Component, OnInit } from '@angular/core';
import {
  SearchModalConfig,
  SearchType,
} from 'src/app/core/interfaces/search-modal-config.interface';

@Component({
  selector: 'app-section-nav-card',
  templateUrl: './section-nav-card.component.html',
  styleUrls: ['./section-nav-card.component.scss'],
})
export class SectionNavCardComponent {
  searchModalConfig: SearchModalConfig = {
    show: false,
    type: 'hotel',
    placeholder: 'Where to stay?',
  };

  constructor() {}
  handleNavClick(type: SearchType) {
    this.searchModalConfig.show = true;
    this.searchModalConfig.type = type;
    switch (type) {
      case 'restaurant':
        this.searchModalConfig.placeholder = 'Where to eat?';
        break;
      case 'destination':
        this.searchModalConfig.placeholder = 'Where to go?';
        break;
      case 'article':
        this.searchModalConfig.placeholder = 'What article?';
        break;
      case 'hotel':
        this.searchModalConfig.placeholder = 'Where to stay?';
        break;
      default:
        this.searchModalConfig.placeholder = 'Where go?';
        break;
    }
  }
}
