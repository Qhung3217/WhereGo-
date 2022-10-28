import { PropertyAmenity } from './property-amenity.model';
import { Review } from './review.model';
import { RoomFeature } from './room-feature.model';
import { RoomType } from './room-type.model';

export class HotelDetail {
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public hotelClass: string,
    public description: string,
    public image: string,
    public price: number,
    public district: string,
    public roomFeatures: RoomFeature[],
    public roomTypes: RoomType[],
    public propertyAmenities: PropertyAmenity[],
    public hotelGalleries: [],
    public reviews: Review[],
    public booking: any
  ) {}
}
