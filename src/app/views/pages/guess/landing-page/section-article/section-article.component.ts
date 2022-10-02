import { Component, OnInit } from '@angular/core';

import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-section-article',
  templateUrl: './section-article.component.html',
  styleUrls: ['./section-article.component.scss'],
})
export class SectionArticleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
