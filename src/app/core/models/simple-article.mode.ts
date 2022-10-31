export class SimpleArticle {
  constructor(
    public id: number,
    public title: string,
    public image: string,
    public content: string,
    public shortDesc: string,
    public createdDate: Date
  ) {}
}
