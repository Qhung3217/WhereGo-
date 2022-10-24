import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HotelService } from 'src/app/core/services/hotel.service';
import { ImageService } from 'src/app/core/services/image.service';
import { PlaceService } from 'src/app/core/services/place.service';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'app-saved-item',
  templateUrl: './saved-item.component.html',
  styleUrls: ['./saved-item.component.scss'],
})
export class SavedItemComponent {
  @Input() item: any;
  @Input() category: 'hotel' | 'restaurant' | 'destination' | 'all' = 'hotel';
  @Output() heartClick = new EventEmitter();

  constructor(
    public imageService: ImageService,
    private hotelService: HotelService,
    private restaurantService: RestaurantService,
    private placeService: PlaceService
  ) {}
  handleHeartClick() {
    this.removeSavedItem();
    this.heartClick.emit();
  }

  private removeSavedItem() {
    switch (this.category) {
      case 'hotel':
        this.hotelService.unSaved(this.item.id);
        break;
      case 'destination':
        this.placeService.unSaved(this.item.id);
        break;
      case 'restaurant':
        this.restaurantService.unSaved(this.item.id);
        break;
      default:
        this.hotelService.unSaved(this.item.id);
        this.placeService.unSaved(this.item.id);
        this.restaurantService.unSaved(this.item.id);
    }
  }
}
