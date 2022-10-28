import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleDetail } from 'src/app/core/models/article-detail.model';
import { ArticleService } from 'src/app/core/services/article.service';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-article-detail-page',
  templateUrl: './article-detail-page.component.html',
  styleUrls: ['./article-detail-page.component.scss'],
})
export class ArticleDetailPageComponent implements OnInit {
  article!: ArticleDetail;
  isFetching = false;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    public imageService: ImageService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const articleId = params['id'];
      this.fetchArticle(articleId);
    });
  }
  private fetchArticle(id: number) {
    this.isFetching = true;
    this.articleService.getDetail(id).subscribe({
      next: (article) => {
        this.article = { ...article };
        this.isFetching = false;
      },
      error: () => {
        this.isFetching = false;
      },
    });
  }
}
