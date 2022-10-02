import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss'],
})
export class SidebarNavComponent implements OnInit {
  @Input() findInTitle = 'Title';
  navItems = ['Hotel', 'Restaurant', 'Destination'];
  constructor() {}

  ngOnInit(): void {}
}
