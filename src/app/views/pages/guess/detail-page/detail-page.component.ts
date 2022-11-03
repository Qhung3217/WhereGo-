import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  propertySelected = '/hotel';
  isWriter = false;

  constructor(private router: Router, private cookieService: CookieService) {
    console.log(this.router.url);
    this.propertySelected = this.router.url.slice(
      0,
      this.router.url.indexOf('/', 1)
    );
  }
  ngOnInit() {
    this.isWriter = this.cookieService.check('writer');
  }
}
