import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private http: HttpClient) {}

  private search(category: 'restaurant' | 'article' | 'place' | 'hotel') {
    return this.http.get;
  }
}
