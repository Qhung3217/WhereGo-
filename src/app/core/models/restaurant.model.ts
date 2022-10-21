import { Review } from './review.model';

export class Restaurant {
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public thumbnail: string,
    public cuisines: string,
    public districtName: string,
    public averageRating: number,
    public totalRating: number
  ) {}
}