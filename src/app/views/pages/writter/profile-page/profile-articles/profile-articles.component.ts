import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/core/models/article.model';
import { SimpleArticle } from 'src/app/core/models/simple-article.mode';
import { ImageService } from 'src/app/core/services/image.service';
import { WriterService } from 'src/app/core/services/writer.service';

@Component({
  selector: 'app-profile-articles',
  templateUrl: './profile-articles.component.html',
  styleUrls: ['./profile-articles.component.scss'],
})
export class ProfileArticlesComponent implements OnInit, OnDestroy {
  tableHeaders = ['Title', 'Image', 'About', 'Create at'];
  articlesData: any[] = [];
  ids: any[] = [];
  writerSub!: Subscription;
  constructor(
    private writerService: WriterService,
    private imageService: ImageService
  ) {}
  ngOnInit() {
    this.subcribeWriter();
  }
  ngOnDestroy(): void {
    if (this.writerSub) this.writerSub.unsubscribe();
  }
  private subcribeWriter() {
    if (this.writerService.writer)
      this.articlesData = this.transformArticles(
        this.writerService.writer.articles
      );
    this.writerSub = this.writerService.writerEvent.subscribe((writer) => {
      if (writer) this.articlesData = this.transformArticles(writer.articles);
      else this.articlesData = writer;
    });
  }
  private transformArticles(articles: SimpleArticle[]) {
    return articles.map((article) => {
      this.ids.push(article.id);
      return {
        title: article.title,
        image: `<img src="${this.imageService.render(article.image)}"/>`,
        about: article.shortDesc,
        createDate: new Date(article.createdDate).toDateString(),
      };
    });
  }
}
