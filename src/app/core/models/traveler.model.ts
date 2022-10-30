import { SimpleReview } from './simple-review.model';
import { Booking } from './booking.model';

export class Traveler {
  constructor(
    public email: string,
    public password: string,
    public username: string,
    public name: string,
    public tel: string,
    public avatar: string,
    public dob: Date,
    public restaurantReviews: SimpleReview[],
    public placeReviews: SimpleReview[],
    public hotelReviews: SimpleReview[],
    public bookings: Booking[]
  ) {}
}
