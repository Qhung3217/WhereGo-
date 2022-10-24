import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Restaurant } from 'src/app/core/models/restaurant.model';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-restaurant-list-page',
  templateUrl: './restaurant-list-page.component.html',
  styleUrls: ['./restaurant-list-page.component.scss'],
})
export class RestaurantListPageComponent implements OnInit, OnDestroy {
  filterSelected = ['Restaurants', 'Breakfast'];
  restaurants!: Restaurant[];
  restaurantSub!: Subscription;
  isFetching = false;
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restaurantSub = this.route.queryParams.subscribe((params: Params) => {
      const keyword = params['keyword'];
      console.log('list: ', keyword);
      if (keyword) {
        this.isFetching = true;
        this.fetchData(keyword);
      }
    });
  }
  ngOnDestroy(): void {
    if (this.restaurantSub) this.restaurantSub.unsubscribe();
  }
  private fetchData(keyword: string) {
    this.searchService.restaurantSearch(keyword).subscribe({
      next: (res) => {
        this.restaurants = [...(res as Restaurant[])];
        this.isFetching = false;
      },
      error: () => (this.isFetching = false),
    });
  }
}
