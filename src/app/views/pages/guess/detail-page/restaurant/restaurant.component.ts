import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RestaurantDetail } from 'src/app/core/models/restaurant-detail-model';
import { Restaurant } from 'src/app/core/models/restaurant.model';
import { ImageService } from 'src/app/core/services/image.service';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  isFetching: {
    restaurant: boolean;
    restaurantSuggestion: boolean;
  } = {
    restaurant: false,
    restaurantSuggestion: false,
  };
  restaurantId!: number;
  restaurant?: RestaurantDetail;
  restaurantSuggestions?: Restaurant[];
  averageRating: number = 0;
  ratingType: string = 'Excellent';
  reviewNumber: number = 0;
  numberOfPeople: number = 1;
  addressEncode = '';
  cuisinesString = '';
  featuresString = '';
  mealsString = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantService,
    private title: Title,

    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.restaurantId = params['id'];
      if (this.restaurantId) {
        this.fetchItem();
      }
    });
  }
  handleReviewChange() {
    this.router.navigate(['restaurant', this.restaurantId]);
    setTimeout(() => window.location.reload(), 1000);
  }
  private fetchItem() {
    this.fetchRestaurantDetail();
    this.fetchRestaurantSuggestions();
  }

  private fetchRestaurantDetail() {
    this.isFetching.restaurant = true;
    this.restaurantService.getDetail(this.restaurantId!).subscribe({
      next: (item) => {
        this.assignRestaurant(item);
        this.getAverageRating();
        this.getRatingType();
        this.assignRestaurantProperties();
        this.addressEncode = encodeURIComponent(
          this.restaurant?.address || false
        );
      },
      error: (err) => (this.isFetching.restaurant = false),
    });
  }

  private assignRestaurant(item: RestaurantDetail) {
    this.restaurant = { ...item };
    this.title.setTitle(this.restaurant.name);
    this.isFetching.restaurant = false;
  }

  private assignRestaurantSuggestions(items: Restaurant[]) {
    this.restaurantSuggestions = [...items];
    this.isFetching.restaurantSuggestion = false;
  }
  private assignRestaurantProperties() {
    this.cuisinesString = this.restaurant?.cuisines
      .map((cuisine) => cuisine.type)
      .join(', ')!;
    this.featuresString = this.restaurant?.features
      .map((feature) => feature.type)
      .join(', ')!;
    this.mealsString = this.restaurant?.meals
      .map((meals) => meals.type)
      .join(', ')!;
  }
  private getAverageRating() {
    if (!!this.restaurant) {
      // console.log('Restaurant detail average rating');
      const totalRating = this.restaurant.restaurantReviews.reduce(
        (total, review) => (total += review.rating),
        0
      );
      this.reviewNumber = this.restaurant.restaurantReviews.length;
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

  private fetchRestaurantSuggestions() {
    this.isFetching.restaurantSuggestion = true;
    this.restaurantService.getRandom().subscribe({
      next: (items) => this.assignRestaurantSuggestions(items),
      error: (err) => (this.isFetching.restaurantSuggestion = false),
    });
  }
}
