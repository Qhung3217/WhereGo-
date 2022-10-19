export class Booking {
  constructor(
    private id: number,
    private bookingDate: Date,
    private price: number,
    private numberOfPeople: number,
    private checkInDate: Date,
    private checkOutDate: Date
  ) {}
}
