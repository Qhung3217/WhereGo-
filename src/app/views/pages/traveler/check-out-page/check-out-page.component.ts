import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HotelDetail } from 'src/app/core/models/hotel-detail.model';
import { HotelService } from 'src/app/core/services/hotel.service';
import { ImageService } from 'src/app/core/services/image.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { TravelerService } from 'src/app/core/services/traveler.service';

@Component({
  selector: 'app-check-out-page',
  templateUrl: './check-out-page.component.html',
  styleUrls: ['./check-out-page.component.scss'],
})
export class CheckOutPageComponent implements OnInit, OnDestroy {
  checkOutForm!: FormGroup;
  hotel?: HotelDetail;
  isFetching = false;
  travelerSub!: Subscription;
  hotelIdSub!: Subscription;
  inforBookingsSub!: Subscription;
  /* --------------- FORM PAYLOAD --------------- */
  hotelId: number | null = null;
  checkIn: string | null = null;
  checkOut: string | null = null;
  price: number | null = null;
  people: number | null = null;
  email: string | null = null;
  /* --------------------- x -------------------- */
  tel: string | null = null;
  constructor(
    private travelerService: TravelerService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService,
    private hotelService: HotelService,
    public imageService: ImageService
  ) {}
  ngOnInit(): void {
    this.getHotelId();
    this.prepareForBooking();
    this.getEmail();
  }
  ngOnDestroy(): void {
    if (this.travelerSub) this.travelerSub.unsubscribe();
    if (this.hotelIdSub) this.hotelIdSub.unsubscribe();
    if (this.inforBookingsSub) this.inforBookingsSub.unsubscribe();
  }
  handleCheckOut() {
    if (!this.checkOutForm.valid) return;
    this.isFetching = true;
    this.travelerService
      .checkOut(
        this.checkOutForm.get('hotelId')!.value,
        this.checkOutForm.get('bookingDate')!.value,
        this.checkOutForm.get('numberOfPeople')!.value,
        this.checkOutForm.get('price')!.value,
        this.checkOutForm.get('checkInDate')!.value,
        this.checkOutForm.get('checkOutDate')!.value
      )
      .subscribe({
        next: () => {
          this.isFetching = false;
          this.toast.showSuccess(
            'Check out success',
            'Thank you for believing in us. Wish you have a good trip'
          );
          setTimeout(() => this.router.navigate(['/']), 1000);
        },
        error: () => {
          this.isFetching = false;
          history.back();
        },
      });
  }
  private getHotelId() {
    this.route.params.subscribe((params) => {
      this.hotelId = params['hotelId'];
      if (this.hotelId) {
        this.isFetching = true;
        this.hotelService.getDetail(this.hotelId).subscribe((hotel) => {
          this.hotel = { ...hotel };
          this.price = this.hotel.price;
          this.isFetching = false;
          this.initForm();
        });
      }
    });
  }

  private getEmail() {
    if (this.travelerService.traveler)
      this.email = this.travelerService.traveler.email;
    this.travelerSub = this.travelerService.travelerEvent.subscribe(
      (traveler) => {
        if (traveler) {
          this.email = traveler.email;
          this.tel = traveler.tel;
        }
        this.initForm();
      }
    );
  }

  private prepareForBooking() {
    this.inforBookingsSub = this.route.queryParamMap.subscribe((params) => {
      console.log(params);
      this.checkIn = this.jsonParse(params.get('checkIn'));
      this.checkOut = this.jsonParse(params.get('checkOut'));
      this.people = this.jsonParse(params.get('people'));
      this.initForm();
    });
  }

  private initForm() {
    this.checkOutForm = this.fb.group({
      hotelId: [this.hotelId, [Validators.required]],
      bookingDate: [new Date(), [Validators.required]],
      numberOfPeople: [this.people, [Validators.required]],
      price: [this.price, [Validators.required]],
      checkInDate: [this.checkIn, [Validators.required]],
      checkOutDate: [this.checkOut, [Validators.required]],
    });
  }

  private jsonParse(string: string | null) {
    if (string) return JSON.parse(string);
  }
}
