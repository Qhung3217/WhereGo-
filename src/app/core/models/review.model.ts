export class Review {
  constructor(
    public id: number,
    public comment: string,
    public rating: number,
    public name: string,
    public avatar: string
  ) {}
}
