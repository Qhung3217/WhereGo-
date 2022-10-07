import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss'],
})
export class SidebarNavComponent {
  @Input() findInTitle = 'Can tho';
  navItems = [
    { label: 'Hotels', href: '/hotel' },
    { label: 'Restaurants', href: '/restaurant' },
    { label: 'Destinations', href: '/destination' },
  ];
  constructor() {}
}
