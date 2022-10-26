import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilterObject } from 'src/app/core/interfaces/filter-object.interface';
import { PlaceFilterInfor } from 'src/app/core/interfaces/place-filter-infor.interface';
import { Place } from 'src/app/core/models/place.model';
import { FilterService } from 'src/app/core/services/filter.service';
import { PlaceService } from 'src/app/core/services/place.service';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-destination-list-page',
  templateUrl: './destination-list-page.component.html',
  styleUrls: ['./destination-list-page.component.scss'],
})
export class DestinationListPageComponent implements OnInit, OnDestroy {
  filterSelected: { type: string; value: string }[] = [];
  filterData: FilterObject[] = [];
  isFetching = false;
  destinations!: Place[];
  destinationSub!: Subscription;
  totalDestinations: number = 0;
  keyword!: string;
  removeFilter: any = false;
  page: number = 1;
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private filterService: FilterService,
    private placeService: PlaceService
  ) {}
  ngOnInit(): void {
    this.destinationSub = this.route.queryParams.subscribe((params: Params) => {
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
    if (this.destinationSub) this.destinationSub.unsubscribe();
  }
  handleFilterChanged(filterInfor: PlaceFilterInfor) {
    let restemp = [...this.destinations];
    let isFiltered = false;
    this.filterSelected = [];
    /* ----------------- PLACE TYPES ----------------- */
    if (filterInfor.placeTypes.length > 0) {
      isFiltered = true;
      filterInfor.placeTypes.forEach((placeType) => {
        this.filterSelected.push({ type: 'placeType', value: placeType.type });
        restemp = restemp.filter((res) =>
          res.placeTypes.find((c) => c === placeType.type)
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
    console.log('Destination list: ', filterInfor, restemp);
    if (isFiltered && this.destinations.length > 0)
      this.destinations = [...restemp];
    else this.fetchData(this.keyword);
  }

  handleRemoveFilter(filter: any) {
    this.filterService.removeEvent.next(filter);
    this.filterSelected = this.filterSelected.filter(
      (filterSelect) => filterSelect.value !== filter.value
    );
  }
  private fetchData(keyword: string) {
    this.searchService.placeSearch(keyword).subscribe({
      next: (res) => {
        this.destinations = [...(res as Place[])];
        this.totalDestinations = this.destinations.length;
        this.isFetching = false;
      },
      error: () => (this.isFetching = false),
    });
  }

  private fetchFilterData() {
    this.placeService.getAllFilterInfor().subscribe((data) => {
      this.filterData = [];

      this.filterData.push({
        filters: data.placeTypes,
        nameGroup: 'Destination types',
        type: 'placeType',
      });
    });
  }
}
