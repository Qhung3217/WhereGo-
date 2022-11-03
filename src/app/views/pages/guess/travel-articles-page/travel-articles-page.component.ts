import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/core/models/article.model';
import { ArticleService } from 'src/app/core/services/article.service';
import { ImageService } from 'src/app/core/services/image.service';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-travel-articles-page',
  templateUrl: './travel-articles-page.component.html',
  styleUrls: ['./travel-articles-page.component.scss'],
})
export class TravelArticlesPageComponent implements OnInit {
  page: number = 1;
  articles: Article[] = [];
  isFetching = false;
  articleSub!: Subscription;
  keyword: string = '';
  constructor(
    private articleService: ArticleService,
    private title: Title,
    private route: ActivatedRoute,
    private searchService: SearchService,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Travel articles');
    this.articleSub = this.route.queryParams.subscribe((params: Params) => {
      this.keyword = params['keyword'];
      console.log('list: ', this.keyword);

      if (this.keyword) {
        this.title.setTitle('Travel articles search: ' + this.keyword);
        this.isFetching = true;
        this.searchArticles(this.keyword);
      } else this.fetchAllArticles();
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
  private searchArticles(keyword: string) {
    this.searchService.articleSearch(this.keyword).subscribe({
      next: (res) => {
        this.articles = [...(res as Article[])];
        this.isFetching = false;
      },
      error: () => (this.isFetching = false),
    });
  }
  private fetchAllArticles() {
    this.articleService.getAll().subscribe((articles) => {
      this.isFetching = false;
      this.articles = [...articles];
    });
  }
}
