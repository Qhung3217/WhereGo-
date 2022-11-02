import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PlaceDetail } from 'src/app/core/models/place-detail.model';
import { Place } from 'src/app/core/models/place.model';
import { ImageService } from 'src/app/core/services/image.service';
import { PlaceService } from 'src/app/core/services/place.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements OnInit {
  isFetching: {
    destination: boolean;
    destinationSuggestion: boolean;
  } = {
    destination: false,
    destinationSuggestion: false,
  };
  destinationId!: number;
  destination?: PlaceDetail;
  destinationSuggestions?: Place[];
  averageRating: number = 0;
  ratingType: string = 'Excellent';
  reviewNumber: number = 0;
  numberOfPeople: number = 1;
  placeTypesString = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private placeService: PlaceService,
    private title: Title,

    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.destinationId = params['id'];
      if (this.destinationId) {
        this.fetchItem();
      }
    });
  }
  handleReviewChange() {
    console.log('handel review change');
    this.router.navigate(['destination', this.destinationId]);
    setTimeout(() => window.location.reload(), 1000);
  }
  private fetchItem() {
    this.fetchPlaceDetail();
    this.fetchDestinationSuggestions();
  }

  private fetchPlaceDetail() {
    this.isFetching.destination = true;
    this.placeService.getDetail(this.destinationId!).subscribe({
      next: (item) => {
        this.assignDestination(item);
        this.getAverageRating();
        this.getRatingType();
        this.assignDestinationProperties();
      },
      error: (err) => (this.isFetching.destination = false),
    });
  }

  private assignDestination(item: PlaceDetail) {
    this.destination = { ...item };
    this.title.setTitle(this.destination.name);
    this.isFetching.destination = false;
  }

  private assignDestinationSuggestions(items: Place[]) {
    this.destinationSuggestions = [...items];
    this.isFetching.destinationSuggestion = false;
  }
  private assignDestinationProperties() {
    this.placeTypesString = this.destination?.placeTypes
      .map((placeType) => placeType.type)
      .join(', ')!;
  }
  private getAverageRating() {
    if (!!this.destination) {
      // console.log('destination detail average rating');
      const totalRating = this.destination.placeReviews.reduce(
        (total, review) => (total += review.rating),
        0
      );
      this.reviewNumber = this.destination.placeReviews.length;
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

  private fetchDestinationSuggestions() {
    this.isFetching.destinationSuggestion = true;
    this.placeService.getRandom().subscribe({
      next: (items) => this.assignDestinationSuggestions(items),
      error: (err) => (this.isFetching.destinationSuggestion = false),
    });
  }
}
