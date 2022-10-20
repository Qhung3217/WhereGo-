import { Review } from './review.model';

export class Traveler {
  constructor(
    private email: string,
    private password: string,
    private username: string,
    private name: string,
    private tel: string,
    private avatar: string,
    private dob: Date,
    private restaurantReviews: Review[],
    private placeReviews: Review[],
    private hotelReviews: Review[]
  ) {}
}
