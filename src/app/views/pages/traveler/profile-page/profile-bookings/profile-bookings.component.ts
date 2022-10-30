import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Booking } from 'src/app/core/models/booking.model';
import { TravelerService } from 'src/app/core/services/traveler.service';

@Component({
  selector: 'app-profile-bookings',
  templateUrl: './profile-bookings.component.html',
  styleUrls: ['./profile-bookings.component.scss'],
})
export class ProfileBookingsComponent implements OnInit, OnDestroy {
  tableHeaders = [
    'Hotel',
    'Book date',
    'People',
    'Price',
    'Check in',
    'Check out',
  ];
  bookings: any[] = [];
  travelerSub!: Subscription;
  constructor(private travelerService: TravelerService) {}
  ngOnInit() {
    this.subcribeTraveler();
  }
  ngOnDestroy(): void {
    if (this.travelerSub) this.travelerSub.unsubscribe();
  }
  private subcribeTraveler() {
    if (this.travelerService.traveler)
      this.bookings = this.transformBookings(
        this.travelerService.traveler.bookings
      );
    this.travelerSub = this.travelerService.travelerEvent.subscribe(
      (traveler) => {
        if (traveler) this.bookings = this.transformBookings(traveler.bookings);
        else this.bookings = traveler;
      }
    );
  }
  private transformBookings(bookings: Booking[]) {
    return bookings.map((booking) => {
      return {
        Hotel: booking.id,
        Bookdate: new Date(booking.bookingDate).toDateString(),
        People: booking.numberOfPeople,
        Price: booking.price,
        CheckIn: new Date(booking.checkInDate).toDateString(),
        CheckOut: new Date(booking.checkOutDate).toDateString(),
      };
    });
  }
}
