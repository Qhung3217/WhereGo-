import { Review } from './review.model';

export class Place {
  constructor(
    public id: number,
    public name: string,
    public image: string,
    public districtName: string,
    public averageRating: number,
    public totalRating: number
  ) {}
}
