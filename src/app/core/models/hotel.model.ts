import { Review } from './review.model';

export class Hotel {
  constructor(
    private id: number,
    private name: string,
    private hotelClass: string,
    private description: string,
    private image: string,
    private price: number,
    private roomFeatures: [],
    private roomTypes: [],
    private propertyAmenities: [],
    private hotelGalleries: [],
    private reviews: Review[],
    private booking: any
  ) {}
}
