import { Review } from './review.model';

export class Traveler {
  constructor(
    public email: string,
    public password: string,
    public username: string,
    public name: string,
    public tel: string,
    public avatar: string,
    public dob: Date,
    public restaurantReviews: Review[],
    public placeReviews: Review[],
    public hotelReviews: Review[]
  ) {}
}
