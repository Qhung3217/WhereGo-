import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { HotelService } from 'src/app/core/services/hotel.service';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'app-section-promotion',
  templateUrl: './section-promotion.component.html',
  styleUrls: ['./section-promotion.component.scss'],
})
export class SectionPromotionComponent implements OnInit {
  @Input() titleHeader: string = 'Top experiences on WhereGo?';
  @Input() category: 'hotel' | 'restaurant' = 'hotel';
  items: any[] = [];
  constructor(
    private hotelService: HotelService,
    private restaurantService: RestaurantService
  ) {}
  ngOnInit() {
    this.fetchItems();
  }
  fetchItems() {
    if (this.category === 'restaurant')
      this.restaurantService
        .getRandom()
        .pipe(tap((items: any) => (this.items = [...items])))
        .subscribe();
    else
      this.hotelService
        .getRandom()
        .pipe(tap((items: any) => (this.items = [...items])))
        .subscribe((items: any[]) => (this.items = [...items]));
  }
}
