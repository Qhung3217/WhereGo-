export class Booking {
  constructor(
    public hotelName: string,
    public bookingDate: Date,
    public price: number,
    public numberOfPeople: number,
    public checkInDate: Date,
    public checkOutDate: Date
  ) {}
}
