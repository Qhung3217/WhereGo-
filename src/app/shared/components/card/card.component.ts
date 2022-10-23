import { Component, Input, OnInit } from '@angular/core';
import { HotelLocalStorage } from 'src/app/core/interfaces/hotel-local-storage.interface';
import { RestaurantLocalStorage } from 'src/app/core/interfaces/restaurant-local-storage.interface';
import { HotelService } from 'src/app/core/services/hotel.service';
import { ImageService } from 'src/app/core/services/image.service';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() item?: any;
  @Input() category: 'hotel' | 'restaurant' = 'hotel';
  isHeartActive = false;

  constructor(
    public imageService: ImageService,
    private hotelService: HotelService,
    private restaurantService: RestaurantService
  ) {}
  // handleHeartClick(event: MouseEvent) {
  //   event.stopPropagation();
  //   this.isHeartActive = !this.isHeartActive;
  //   if (this.isHeartActive) this.storeSavedItem();
  //   else this.removeSavedItem();
  // }
  // private storeSavedItem() {
  //   switch (this.category) {
  //     case 'restaurant':
  //       this.restaurantService.saved(this.item);
  //       break;
  //     default:
  //       this.hotelService.saved(this.item);
  //   }
  // }
  // private removeSavedItem() {
  //   switch (this.category) {
  //     case 'restaurant':
  //       this.restaurantService.unSaved(this.item.id);
  //       break;
  //     default:
  //       this.hotelService.unSaved(this.item.id);
  //   }
  // }
  // private isSaved() {
  //   switch (this.category) {
  //     case 'restaurant':
  //       const restaurantList =
  //         this.restaurantService.getSavedListInLocal() as RestaurantLocalStorage[];
  //       this.isHeartActive = !!restaurantList.find(
  //         (item: any) => (item.data.id = this.item.id)
  //       );
  //       console.log(this.isHeartActive);
  //       return;

  //     default:
  //       const list =
  //         this.hotelService.getSavedListInLocal() as HotelLocalStorage[];

  //       this.isHeartActive = !!list.find(
  //         (item) => (item.data.id = this.item.id)
  //       );
  //       /* -------------------- json parse id undefined ------------------- */
  //       console.log(
  //         JSON.parse(localStorage.getItem('hotelSaved')!),
  //         list,
  //         list.find((item: any) => (item.data.id = this.item.id))
  //       );

  //       return;
  //   }
  // }
}
