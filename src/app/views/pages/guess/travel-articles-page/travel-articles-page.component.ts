import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/core/models/article.model';
import { ArticleService } from 'src/app/core/services/article.service';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-travel-articles-page',
  templateUrl: './travel-articles-page.component.html',
  styleUrls: ['./travel-articles-page.component.scss'],
})
export class TravelArticlesPageComponent implements OnInit {
  page: number = 1;
  articles: Article[] = [];
  isFetching = false;
  constructor(
    private articleService: ArticleService,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.isFetching = true;
    this.articleService.getAll().subscribe((articles) => {
      this.isFetching = false;
      this.articles = [...articles];
    });
  }
  handlePageChange(page: any) {
    this.page = page;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
