export class ArticleDetail {
  constructor(
    private id: number,
    private title: string,
    private image: string,
    private content: string,
    private shortDesc: string,
    private createdDate: Date,
    private writer: {
      email: string;
      name: string;
      avatar: string;
    }
  ) {}
}
