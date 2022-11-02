import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HotelService } from 'src/app/core/services/hotel.service';
import { PlaceService } from 'src/app/core/services/place.service';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'app-saved-page',
  templateUrl: './saved-page.component.html',
  styleUrls: ['./saved-page.component.scss'],
})
export class SavedPageComponent implements OnInit {
  tabSelected: 'hotel' | 'restaurant' | 'destination' | 'all' = 'hotel';
  items: any[] = [];
  constructor(
    private hotelService: HotelService,
    private restaurantService: RestaurantService,
    private placeService: PlaceService,
    private title: Title
  ) {}
  ngOnInit(): void {
    this.title.setTitle('My saved');
    this.loadData();
  }
  handleClick(tab: 'hotel' | 'restaurant' | 'destination' | 'all') {
    this.tabSelected = tab;
    this.loadData();
  }

  loadData() {
    switch (this.tabSelected) {
      case 'hotel':
        this.items = this.hotelService.getSavedListInLocal() || [];

        break;
      case 'restaurant':
        this.items = this.restaurantService.getSavedListInLocal() || [];

        break;
      case 'destination':
        this.items = this.placeService.getSavedListInLocal() || [];

        break;
      default:
        this.items = [];
        const hotels = this.hotelService.getSavedListInLocal();
        const places = this.placeService.getSavedListInLocal();
        const restaurants = this.restaurantService.getSavedListInLocal();
        if (!!hotels && hotels.length > 0)
          this.items = this.items.concat(hotels);
        if (!!places && places.length > 0)
          this.items = this.items.concat(places);
        if (!!restaurants && restaurants.length > 0)
          this.items = this.items.concat(restaurants);

        break;
    }
  }
}
