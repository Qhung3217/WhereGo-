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
  searchModalConfig: SearchModalConfig = { show: false, type: 'hotel' };
  constructor() {}
  handleNavClick(type: SearchType) {
    this.searchModalConfig.show = true;
    this.searchModalConfig.type = type;
  }
}
