export class ArticleDetail {
  constructor(
    public id: number,
    public title: string,
    public image: string,
    public content: string,
    public shortDesc: string,
    public createdDate: Date,
    public writer: {
      email: string;
      name: string;
      avatar: string;
    }
  ) {}
}
