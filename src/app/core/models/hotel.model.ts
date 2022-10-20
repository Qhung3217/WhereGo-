import { Review } from './review.model';

export class Hotel {
  constructor(
    public id: number,
    public name: string,
    public hotelClass: string,
    public description: string,
    public image: string,
    public price: number,
    public roomFeatures: [],
    public roomTypes: [],
    public propertyAmenities: [],
    public hotelGalleries: [],
    public reviews: Review[],
    public booking: any
  ) {}
}
