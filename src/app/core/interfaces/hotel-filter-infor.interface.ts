import { PropertyAmenity } from '../models/property-amenity.model';
import { RoomFeature } from '../models/room-feature.model';
import { RoomType } from '../models/room-type.model';

export interface HotelFilterInfor {
  roomFeatures: RoomFeature[];
  roomTypes: RoomType[];
  propertyAmenities: PropertyAmenity[];
  rating?: number;
  hotelClasses?: any[];
}
