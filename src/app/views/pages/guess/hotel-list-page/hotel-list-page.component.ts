import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilterObject } from 'src/app/core/interfaces/filter-object.interface';
import { HotelFilterInfor } from 'src/app/core/interfaces/hotel-filter-infor.interface';
import { Hotel } from 'src/app/core/models/hotel.model';
import { FilterService } from 'src/app/core/services/filter.service';
import { HotelService } from 'src/app/core/services/hotel.service';
import { ImageService } from 'src/app/core/services/image.service';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-hotel-list-page',
  templateUrl: './hotel-list-page.component.html',
  styleUrls: ['./hotel-list-page.component.scss'],
})
export class HotelListPageComponent implements OnInit, OnDestroy {
  filterSelected: { type: string; value: string }[] = [];
  filterData: FilterObject[] = [];
  hotels!: Hotel[];
  hotelSub?: Subscription;
  isFetching = false;
  keyword!: string;
  removeFilter: any = false;
  page: number = 1;
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private filterService: FilterService,
    private hotelService: HotelService
  ) {}
  ngOnInit(): void {
    this.hotelSub = this.route.queryParams.subscribe((params: Params) => {
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
    if (this.hotelSub) this.hotelSub.unsubscribe();
  }
  handleFilterChanged(filterInfor: HotelFilterInfor) {
    let restemp = [...this.hotels];
    let isFiltered = false;
    this.filterSelected = [];
    /* ----------------- ROOM TYPES ----------------- */
    if (filterInfor.roomTypes.length > 0) {
      isFiltered = true;
      filterInfor.roomTypes.forEach((roomType) => {
        this.filterSelected.push({ type: 'roomType', value: roomType.name });
        restemp = restemp.filter((res) =>
          res.roomTypes.find((c) => c === roomType.name)
        );
      });
    }
    /* ----------------- ROOM FEATURES ----------------- */
    if (filterInfor.roomFeatures.length > 0) {
      isFiltered = true;
      filterInfor.roomFeatures.forEach((roomFeature) => {
        this.filterSelected.push({
          type: 'roomFeature',
          value: roomFeature.feature,
        });
        restemp = restemp.filter((res) =>
          res.roomFeatures.find((f) => f === roomFeature.feature)
        );
      });
    }
    /* ------------------- PROPERTY AMENITIES ------------------ */
    if (filterInfor.propertyAmenities.length > 0) {
      isFiltered = true;
      filterInfor.propertyAmenities.forEach((propertyAmenity) => {
        this.filterSelected.push({
          type: 'propertyAmenity',
          value: propertyAmenity.name,
        });
        restemp = restemp.filter((res) =>
          res.propertyAmenities.find((m) => m === propertyAmenity.name)
        );
      });
    }

    /* ------------------ CLASS ------------------ */
    if (filterInfor.hotelClasses && filterInfor.hotelClasses.length > 0) {
      isFiltered = true;
      filterInfor.hotelClasses.forEach((hotelClass) => {
        this.filterSelected.push({
          type: 'hotelClass',
          value: hotelClass.name,
        });
        restemp = restemp.filter((res) => res.hotelClass === hotelClass.name);
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
    console.log('hotel list: ', filterInfor, restemp);
    if (isFiltered && this.hotels.length > 0) this.hotels = [...restemp];
    else this.fetchData(this.keyword);
  }

  handleRemoveFilter(filter: any) {
    this.filterService.removeEvent.next(filter);
    this.filterSelected = this.filterSelected.filter(
      (filterSelect) => filterSelect.value !== filter.value
    );
  }
  private fetchData(keyword: string) {
    this.searchService.hotelSearch(keyword).subscribe({
      next: (res) => {
        this.hotels = [...(res as Hotel[])];
        this.isFetching = false;
      },
      error: () => (this.isFetching = false),
    });
  }
  private fetchFilterData() {
    this.hotelService.getAllFilterInfor().subscribe((data) => {
      this.filterData.push({
        filters: data.roomTypes,
        nameGroup: 'Room types',
        type: 'roomType',
      });
      this.filterData.push({
        filters: data.roomFeatures,
        nameGroup: 'Room features',
        type: 'roomFeatures',
      });
      this.filterData.push({
        filters: data.propertyAmenities,
        nameGroup: 'Amenities',
        type: 'propertyAmenity',
      });
    });
    this.filterData.push({
      filters: [
        {
          name: '5 star',
          id: '5 star',
        },
        {
          name: '4 star',
          id: '4 star',
        },
        {
          name: '3 star',
          id: '3 star',
        },
      ],
      nameGroup: 'Hotel class',
      type: 'hotelClass',
    });
  }
}
