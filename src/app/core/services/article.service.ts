import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArticleDetail } from '../models/article-detail.model';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}
  getRandom(quantity: number = 4) {
    return this.http.get<Article[]>(environment.apiURL + 'articles/random', {
      params: {
        quantity: quantity,
      },
    });
  }
  getDetail(id: number) {
    return this.http.get<ArticleDetail>(environment.apiURL + 'articles/' + id);
  }
}
