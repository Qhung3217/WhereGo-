import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { HotelLocalStorage } from 'src/app/core/interfaces/hotel-local-storage.interface';
import { PlaceLocalStorage } from 'src/app/core/interfaces/place-local-storage.interface';
import { RestaurantLocalStorage } from 'src/app/core/interfaces/restaurant-local-storage.interface';
import { HotelService } from 'src/app/core/services/hotel.service';
import { PlaceService } from 'src/app/core/services/place.service';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Directive({
  selector: '[appSavedAction]',
})
export class SavedActionDirective implements OnInit {
  @Input('appSavedAction') category: 'hotel' | 'restaurant' | 'destination' =
    'hotel';
  @Input() item: any;
  @HostBinding('class.heart--active') isHeartActive = false;
  @HostListener('click')
  handleHeartClick() {
    this.isHeartActive = !this.isHeartActive;
    if (this.isHeartActive) this.storeSavedItem();
    else this.removeSavedItem();
  }

  constructor(
    private hotelService: HotelService,
    private restaurantService: RestaurantService,
    private placeService: PlaceService
  ) {}
  ngOnInit(): void {
    this.isSaved();
  }
  private isSaved() {
    switch (this.category) {
      case 'restaurant':
        const restaurantList =
          this.restaurantService.getSavedListInLocal() as RestaurantLocalStorage[];
        this.isHeartActive = !!restaurantList?.find(
          (item) => item.data.id === this.item.id
        );
        return;
      case 'destination':
        const placeList =
          this.placeService.getSavedListInLocal() as PlaceLocalStorage[];
        this.isHeartActive = !!placeList?.find(
          (item) => item.data.id === this.item.id
        );
        return;
      default:
        const list =
          this.hotelService.getSavedListInLocal() as HotelLocalStorage[];
        this.isHeartActive = !!list?.find(
          (item) => item.data.id === this.item.id
        );
        return;
    }
  }
  private storeSavedItem() {
    switch (this.category) {
      case 'restaurant':
        this.restaurantService.saved(this.item);
        break;
      case 'destination':
        this.placeService.saved(this.item);
        break;
      default:
        this.hotelService.saved(this.item);
    }
  }
  private removeSavedItem() {
    switch (this.category) {
      case 'restaurant':
        this.restaurantService.unSaved(this.item.id);
        break;
      default:
        this.hotelService.unSaved(this.item.id);
    }
  }
}
