import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilterObject } from 'src/app/core/interfaces/filter-object.interface';
import { RestaurantFilterInfor } from 'src/app/core/interfaces/restaurant-filter-infor.interface';
import { Restaurant } from 'src/app/core/models/restaurant.model';

import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-restaurant-list-page',
  templateUrl: './restaurant-list-page.component.html',
  styleUrls: ['./restaurant-list-page.component.scss'],
})
export class RestaurantListPageComponent implements OnInit, OnDestroy {
  filterSelected = ['Restaurants', 'Breakfast'];
  filterData: FilterObject[] = [];
  restaurants!: Restaurant[];
  restaurantSub!: Subscription;
  isFetching = false;
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.restaurantSub = this.route.queryParams.subscribe((params: Params) => {
      const keyword = params['keyword'];
      console.log('list: ', keyword);
      if (keyword) {
        this.isFetching = true;
        this.fetchData(keyword);
        this.fetchFilterData();
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
  private fetchFilterData() {
    this.restaurantService.getAllFilterInfor().subscribe((data) => {
      this.filterData.push({
        filters: data.cuisines,
        nameGroup: 'Cuisines',
        type: 'cuisine',
      });
      this.filterData.push({
        filters: data.features,
        nameGroup: 'Features',
        type: 'feature',
      });
      this.filterData.push({
        filters: data.meals,
        nameGroup: 'Meals',
        type: 'meal',
      });
    });
    //   this.filterData.push({
    //     filters: [
    //       {
    //         name: '5 star',
    //         id: '5 star',
    //       },
    //       {
    //         name: '4 star',
    //         id: '4 star',
    //       },
    //       {
    //         name: '3 star',
    //         id: '3 star',
    //       },
    //     ],
    //     nameGroup: 'Hotel class',
    //   });
  }
}
