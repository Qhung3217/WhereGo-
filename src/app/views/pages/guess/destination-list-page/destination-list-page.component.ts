import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/core/models/hotel.model';
import { Place } from 'src/app/core/models/place.model';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-destination-list-page',
  templateUrl: './destination-list-page.component.html',
  styleUrls: ['./destination-list-page.component.scss'],
})
export class DestinationListPageComponent implements OnInit, OnDestroy {
  filterSelected = ['Landmark', 'Nature'];
  isFetching = false;
  destinations!: Place[];
  destinationSub!: Subscription;
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.destinationSub = this.route.queryParams.subscribe((params: Params) => {
      const keyword = params['keyword'];
      console.log('list: ', keyword);
      if (keyword) {
        this.isFetching = true;
        this.fetchData(keyword);
      }
    });
  }
  ngOnDestroy(): void {
    if (this.destinationSub) this.destinationSub.unsubscribe();
  }
  private fetchData(keyword: string) {
    this.searchService.placeSearch(keyword).subscribe({
      next: (res) => {
        this.destinations = [...(res as Place[])];
        this.isFetching = false;
      },
      error: () => (this.isFetching = false),
    });
  }
}
