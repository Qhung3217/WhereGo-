import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Review } from 'src/app/core/models/review.model';
import { HotelService } from 'src/app/core/services/hotel.service';
import { ImageService } from 'src/app/core/services/image.service';
import { PlaceService } from 'src/app/core/services/place.service';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Input() isWriter = false;
  @Input() rounded: boolean = false;
  @Input() reviews: Review[] = [];
  @Input() category: 'hotel' | 'restaurant' | 'destination' = 'hotel';
  @Input() id!: number;
  @Output() reviewSuccess = new EventEmitter();
  @ViewChild('scrollTarget', { static: true }) scrollTarget!: ElementRef;
  page = 1;
  rate = 0;
  reviewForm!: FormGroup;
  isSubmitted = false;
  isFetching = false;
  constructor(
    private fb: FormBuilder,
    private hotelService: HotelService,
    private restaurantService: RestaurantService,
    private placeService: PlaceService,
    private toastService: ToastService,
    private cookieService: CookieService,
    private router: Router,
    private route: ActivatedRoute,
    public imageService: ImageService
  ) {}
  ngOnInit() {
    this.initForm();
    this.route.queryParams.subscribe((params) => {
      if (params['scroll'])
        this.scrollTarget.nativeElement.scrollIntoView({
          behavior: 'smooth',
        });
      else localStorage.removeItem('review');
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.reviewForm);
    if (this.reviewForm.valid && !this.isWriter) {
      const rating = this.reviewForm.get('rating')!.value;
      const comment = this.reviewForm.get('comment')!.value;
      localStorage.setItem('review', JSON.stringify({ rating, comment }));
      this.isFetching = true;
      if (!this.cookieService.get('traveler')) {
        this.router.navigate(['auth/traveler/login'], {
          queryParams: { redirectUrl: this.router.url, scroll: true },
        });
        return;
      }
      this.sendData(rating, comment);
    }
  }
  handlePageChange(page: any) {
    this.page = page;
    this.scrollTarget.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
  private initForm() {
    let rating = null;
    let comment = null;
    const review = this.getReviewStored();
    if (review) {
      rating = review.rating;
      comment = review.comment;
    }
    this.reviewForm = this.fb.group({
      rating: [rating, [Validators.required, this.validateRating.bind(this)]],
      comment: [comment, [Validators.required, Validators.maxLength(1000)]],
    });
  }
  private validateRating(control: FormControl) {
    if (control.value !== 0) return null;
    return { rating: true };
  }
  private handleReviewSuccess() {
    this.toastService.showSuccess(
      'Review Success',
      'Thank you for your comment'
    );
    this.isFetching = false;
    this.reviewSuccess.emit(true);
    localStorage.removeItem('review');
  }
  private handleReviewError(statusCode: number) {
    this.isFetching = false;
    if (statusCode === 400) localStorage.removeItem('review');
  }

  private getReviewStored() {
    const review = localStorage.getItem('review');
    if (review) return JSON.parse(review);
    return null;
  }

  private sendData(rating: number, comment: string) {
    switch (this.category) {
      case 'hotel':
        this.hotelService.review(rating, comment, this.id).subscribe({
          next: () => this.handleReviewSuccess(),
          error: (error) => this.handleReviewError(error.statusCode),
        });
        break;
      case 'restaurant':
        this.restaurantService.review(rating, comment, this.id).subscribe({
          next: () => this.handleReviewSuccess(),
          error: (error) => this.handleReviewError(error.statusCode),
        });
        break;
      case 'destination':
        this.placeService.review(rating, comment, this.id).subscribe({
          next: () => this.handleReviewSuccess(),
          error: (error) => this.handleReviewError(error.statusCode),
        });
        break;

      default:
        this.isFetching = false;
        localStorage.removeItem('review');
        break;
    }
  }
}
