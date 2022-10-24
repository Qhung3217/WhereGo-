import { PropertyAmenity } from './property-amenity.model';
import { RoomFeature } from './room-feature.model';
import { RoomType } from './room-type.model';

export class Hotel {
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public hotelClass: string,
    public image: string,
    public price: number,
    public districtName: string,
    public roomFeatures: RoomFeature[],
    public roomTypes: RoomType[],
    public propertyAmenities: PropertyAmenity[],
    public averageRating: number,
    public totalRating: number
  ) {}
}
