export class Article {
  constructor(
    private id: number,
    private title: string,
    private image: string,
    private shortDesc: string,
    private createdDate: Date,
    private writerName: string
  ) {}
}
