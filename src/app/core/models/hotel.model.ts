import { Review } from './review.model';

export class Hotel {
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public hotelClass: string,

    public image: string,
    public price: number,
    public districtName: string,
    public averageRating: number,
    public totalRating: number
  ) {}
}
