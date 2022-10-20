export class Article {
  constructor(
    public id: number,
    public title: string,
    public image: string,
    public shortDesc: string,
    public createdDate: Date,
    public writerName: string
  ) {}
}
