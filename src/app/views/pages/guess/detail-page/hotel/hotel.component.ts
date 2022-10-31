import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HotelDetail } from 'src/app/core/models/hotel-detail.model';
import { Hotel } from 'src/app/core/models/hotel.model';
import { HotelService } from 'src/app/core/services/hotel.service';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {
  isFetching: {
    hotel: boolean;
    hotelSuggestion: boolean;
  } = {
    hotel: false,
    hotelSuggestion: false,
  };
  hotelId!: number;
  hotel?: HotelDetail;
  hotelSuggestions?: Hotel[];
  averageRating: number = 0;
  ratingType: string = 'Excellent';
  reviewNumber: number = 0;
  numberOfPeople: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hotelService: HotelService,
    public imageService: ImageService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.hotelId = params['id'];
      if (this.hotelId) {
        this.fetchItem();
      }
    });
  }

  onSubmit(bookForm: NgForm) {
    console.log(bookForm.value);
    if (bookForm.valid) {
      const people = bookForm.value['people'];

      let ngbDateBucket = bookForm.value['checkIn'];
      const checkIn = new Date(
        ngbDateBucket.year,
        ngbDateBucket.month - 1,
        ngbDateBucket.day
      );

      ngbDateBucket = bookForm.value['checkOut'];
      const checkOut = new Date(
        ngbDateBucket.year,
        ngbDateBucket.month - 1,
        ngbDateBucket.day
      );

      this.router.navigate(['/traveler/check-out', this.hotel?.id], {
        queryParams: {
          people: people,
          checkIn: JSON.stringify(checkIn),
          checkOut: JSON.stringify(checkOut),
        },
      });
    }
  }
  decreaseNumberOfPeople() {
    if (this.numberOfPeople > 1) this.numberOfPeople--;
    else this.numberOfPeople = 1;
  }
  increaseNumberOfPeople() {
    this.numberOfPeople++;
  }
  handle(event: any) {
    console.log(event);
  }
  getCurrentDate() {
    const currentDate = new Date();
    return {
      year: currentDate.getFullYear(),
      month: currentDate.getMonth() + 1,
      day: currentDate.getDate(),
    };
  }
  handleReviewChange() {
    this.router.navigate(['hotel', this.hotelId]);
    setTimeout(() => window.location.reload(), 1000);
  }
  private fetchItem() {
    this.fetchHotelDetail();
    this.fetchHotelSuggestions();
  }

  private fetchHotelDetail() {
    this.isFetching.hotel = true;
    this.hotelService.getDetail(this.hotelId!).subscribe({
      next: (item) => {
        this.assignHotel(item);
        this.getAverageRating();
        this.getRatingType();
      },
      error: (err) => (this.isFetching.hotel = false),
    });
  }

  private assignHotel(item: HotelDetail) {
    this.hotel = { ...item };
    this.isFetching.hotel = false;
  }

  private assignHotelSuggestions(items: Hotel[]) {
    this.hotelSuggestions = [...items];
    this.isFetching.hotelSuggestion = false;
  }

  private getAverageRating() {
    if (!!this.hotel) {
      // console.log('Hotel detail average rating: ');
      const totalRating = this.hotel.reviews.reduce(
        (total, review) => (total += review.rating),
        0
      );
      this.reviewNumber = this.hotel.reviews.length;
      this.averageRating = totalRating / this.reviewNumber || 0;
    }
  }
  private getRatingType() {
    switch (true) {
      case this.averageRating === 0:
        this.ratingType = 'Unknown';
        break;
      case this.averageRating >= 4:
        this.ratingType = 'Excellent';
        break;
      case this.averageRating >= 3.5:
        this.ratingType = 'Very good';
        break;
      case this.averageRating >= 2.5:
        this.ratingType = 'Average';
        break;
      case this.averageRating >= 1.5:
        this.ratingType = 'Poor';
        break;

      default:
        this.ratingType = 'Terrible';
        break;
    }
  }

  private fetchHotelSuggestions() {
    this.isFetching.hotelSuggestion = true;
    this.hotelService.getRandom().subscribe({
      next: (items) => this.assignHotelSuggestions(items),
      error: (err) => (this.isFetching.hotelSuggestion = false),
    });
  }
}
