import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/core/models/article.model';
import { ArticleService } from 'src/app/core/services/article.service';
import { ImageService } from 'src/app/core/services/image.service';

import SwiperCore, { Lazy, Pagination } from 'swiper';
SwiperCore.use([Pagination, Lazy]);
@Component({
  selector: 'app-section-article',
  templateUrl: './section-article.component.html',
  styleUrls: ['./section-article.component.scss'],
})
export class SectionArticleComponent implements OnInit {
  articles: Article[] = [];
  constructor(
    public imageService: ImageService,
    private articleService: ArticleService
  ) {}
  ngOnInit() {
    this.articleService
      .getRandom()
      .subscribe((articles) => (this.articles = [...articles]));
  }
}
