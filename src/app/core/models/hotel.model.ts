export class Hotel {
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public hotelClass: string,
    public image: string,
    public price: number,
    public districtName: string,
    public roomFeatures: string[],
    public roomTypes: string[],
    public propertyAmenities: string[],
    public averageRating: number,
    public totalRating: number
  ) {}
}
