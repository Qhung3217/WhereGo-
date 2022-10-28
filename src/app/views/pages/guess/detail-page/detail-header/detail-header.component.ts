import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HotelLocalStorage } from 'src/app/core/interfaces/hotel-local-storage.interface';
import { PlaceLocalStorage } from 'src/app/core/interfaces/place-local-storage.interface';
import { RestaurantLocalStorage } from 'src/app/core/interfaces/restaurant-local-storage.interface';
import { Cuisine } from 'src/app/core/models/cuisine.model';
import { Feature } from 'src/app/core/models/feature.model';
import { Hotel } from 'src/app/core/models/hotel.model';
import { Meal } from 'src/app/core/models/meal.model';
import { PlaceType } from 'src/app/core/models/place-type.model';
import { Place } from 'src/app/core/models/place.model';
import { PropertyAmenity } from 'src/app/core/models/property-amenity.model';
import { Restaurant } from 'src/app/core/models/restaurant.model';
import { RoomFeature } from 'src/app/core/models/room-feature.model';
import { RoomType } from 'src/app/core/models/room-type.model';
import { HotelService } from 'src/app/core/services/hotel.service';
import { PlaceService } from 'src/app/core/services/place.service';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.scss'],
})
export class DetailHeaderComponent implements OnInit {
  @Input() headerTitle: string = 'Title';
  @Input() reviewNumber: number = 0;
  @Input() averageRating: number = 0;
  @Input() address: string = 'Viet nam';
  @Input() item: any;
  @Input() category: 'hotel' | 'restaurant' | 'destination' = 'hotel';
  addressEncode: string = encodeURIComponent(this.address);
  isSaved = false;
  constructor(
    private hotelService: HotelService,
    private restaurantService: RestaurantService,
    private placeService: PlaceService
  ) {}
  ngOnInit(): void {
    this.addressEncode = encodeURIComponent(this.address);
    this.checkIsSaved();
  }
  handleSavedAction() {
    this.isSaved = !this.isSaved;
    if (this.isSaved) this.storeSavedItem();
    else this.removeSavedItem();
  }

  private storeSavedItem() {
    switch (this.category) {
      case 'restaurant':
        const meals = this.item.meals.map((meal: Meal) => meal.type);
        const features = this.item.features.map(
          (feature: Feature) => feature.type
        );
        const cuisines = this.item.cuisines.map(
          (cuisine: Cuisine) => cuisine.type
        );
        const restaurant = new Restaurant(
          this.item.id,
          this.item.name,
          this.item.address,
          this.item.thumbnail,
          cuisines,
          meals,
          features,
          this.item.district,
          this.averageRating,
          this.reviewNumber
        );
        this.restaurantService.saved(restaurant);
        break;
      case 'destination':
        const placeTypes = this.item.placeTypes.map(
          (placeType: PlaceType) => placeType.type
        );
        const place = new Place(
          this.item.id,
          this.item.name,
          this.item.image,
          this.item.district,
          placeTypes,
          this.averageRating,
          this.reviewNumber
        );
        this.placeService.saved(place);
        break;
      default:
        const roomFeatures = this.item.roomFeatures.map(
          (roomFeature: RoomFeature) => roomFeature.feature
        );
        const roomTypes = this.item.roomTypes.map(
          (roomType: RoomType) => roomType.name
        );
        const propertyAmenities = this.item.propertyAmenities.map(
          (propertyAmenity: PropertyAmenity) => propertyAmenity.name
        );
        const hotel = new Hotel(
          this.item.id,
          this.item.name,
          this.item.address,
          this.item.hotelClass,
          this.item.image,
          this.item.price,
          this.item.district,
          roomFeatures,
          roomTypes,
          propertyAmenities,
          this.averageRating,
          this.reviewNumber
        );
        this.hotelService.saved(hotel);
    }
  }

  private removeSavedItem() {
    switch (this.category) {
      case 'restaurant':
        this.restaurantService.unSaved(this.item.id);
        break;
      case 'destination':
        this.restaurantService.unSaved(this.item.id);
        break;
      default:
        this.hotelService.unSaved(this.item.id);
    }
  }

  private checkIsSaved() {
    switch (this.category) {
      case 'restaurant':
        const restaurantList =
          this.restaurantService.getSavedListInLocal() as RestaurantLocalStorage[];
        this.isSaved = !!restaurantList?.find(
          (item) => item.data.id === this.item.id
        );
        return;
      case 'destination':
        const placeList =
          this.placeService.getSavedListInLocal() as PlaceLocalStorage[];
        this.isSaved = !!placeList?.find(
          (item) => item.data.id === this.item.id
        );
        return;
      default:
        const list =
          this.hotelService.getSavedListInLocal() as HotelLocalStorage[];
        this.isSaved = !!list?.find((item) => item.data.id === this.item.id);
        return;
    }
  }
}
