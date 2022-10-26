import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { FilterObject } from 'src/app/core/interfaces/filter-object.interface';
import { RestaurantFilterInfor } from 'src/app/core/interfaces/restaurant-filter-infor.interface';
import { Restaurant } from 'src/app/core/models/restaurant.model';
import { FilterService } from 'src/app/core/services/filter.service';

import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-restaurant-list-page',
  templateUrl: './restaurant-list-page.component.html',
  styleUrls: ['./restaurant-list-page.component.scss'],
})
export class RestaurantListPageComponent implements OnInit, OnDestroy {
  filterSelected: { type: string; value: string }[] = [];
  filterData: FilterObject[] = [];
  restaurants!: Restaurant[];
  restaurantSub!: Subscription;
  isFetching = false;
  keyword!: string;
  removeFilter: any = false;
  page: number = 1;
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.restaurantSub = this.route.queryParams.subscribe((params: Params) => {
      this.keyword = params['keyword'];
      console.log('list: ', this.keyword);
      if (this.keyword) {
        this.isFetching = true;
        this.fetchData(this.keyword);
        this.fetchFilterData();
      }
    });
  }
  ngOnDestroy(): void {
    if (this.restaurantSub) this.restaurantSub.unsubscribe();
  }
  handleFilterChanged(filterInfor: RestaurantFilterInfor) {
    let restemp = [...this.restaurants];
    let isFiltered = false;
    this.filterSelected = [];
    /* ----------------- CUISINES ----------------- */
    if (filterInfor.cuisines.length > 0) {
      isFiltered = true;
      filterInfor.cuisines.forEach((cuisine) => {
        this.filterSelected.push({ type: 'cuisines', value: cuisine.type });
        restemp = restemp.filter((res) =>
          res.cuisines.find((c) => c === cuisine.type)
        );
      });
    }
    /* ----------------- FEATURES ----------------- */
    if (filterInfor.features.length > 0) {
      isFiltered = true;
      filterInfor.features.forEach((feature) => {
        this.filterSelected.push({ type: 'feature', value: feature.type });
        restemp = restemp.filter((res) =>
          res.features.find((f) => f === feature.type)
        );
      });
    }
    /* ------------------- MEALS ------------------ */
    if (filterInfor.meals.length > 0) {
      isFiltered = true;
      filterInfor.meals.forEach((meal) => {
        this.filterSelected.push({ type: 'meal', value: meal.type });
        restemp = restemp.filter((res) =>
          res.meals.find((m) => m === meal.type)
        );
      });
    }

    /* ------------------ RATING ------------------ */
    if (filterInfor.rating !== 0) {
      isFiltered = true;
      this.filterSelected.push({
        type: 'rating',
        value: filterInfor.rating + ' Rating & up',
      });

      restemp = restemp.filter(
        (res) => res.averageRating >= filterInfor.rating!
      );
    }

    /* ------------------ RESULT ------------------ */
    console.log('restaurant list: ', filterInfor, restemp);
    if (isFiltered && this.restaurants.length > 0)
      this.restaurants = [...restemp];
    else this.fetchData(this.keyword);
  }

  handleRemoveFilter(filter: any) {
    this.filterService.removeEvent.next(filter);
    this.filterSelected = this.filterSelected.filter(
      (filterSelect) => filterSelect.value !== filter.value
    );
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
      this.filterData = [];
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
  }
}
