import { SimpleArticle } from './simple-article.mode';

export class Writer {
  constructor(
    public email: string,
    public password: string,
    public username: string,
    public name: string,
    public tel: string,
    public avatar: string,
    public dob: Date,
    public articles: SimpleArticle[]
  ) {}
}
