export class Booking {
  constructor(
    public id: number,
    public bookingDate: Date,
    public price: number,
    public numberOfPeople: number,
    public checkInDate: Date,
    public checkOutDate: Date
  ) {}
}
