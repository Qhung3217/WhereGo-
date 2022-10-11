import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent {
  propertySelected = '/hotel';
  constructor(private router: Router) {
    console.log(this.router.url);
    this.propertySelected = this.router.url.slice(
      0,
      this.router.url.indexOf('/', 1)
    );
  }
}
