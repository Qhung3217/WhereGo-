export class Writer {
  constructor(
    public email: string,
    public password: string,
    public username: string,
    public name: string,
    public tel: string,
    public avatar: string,
    public dob: Date,
    public articles: {
      id: number;
      image: string;
      content: string;
      shortDesc: string;
      createdDate: Date;
    }
  ) {}
}
