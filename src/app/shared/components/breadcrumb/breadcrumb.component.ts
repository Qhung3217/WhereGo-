import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() rootLevel: { root: string; link?: string } = {
    root: 'Home',
    link: '/',
  };
  @Input() childLevels: { level: string; link?: string }[] = [
    { level: 'level1', link: '/level1' },
    { level: 'level2', link: '/level2' },
  ];
  constructor() {}
}
