import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HotelDetail } from 'src/app/core/models/hotel-detail.model';
import { Hotel } from 'src/app/core/models/hotel.model';
import { HotelService } from 'src/app/core/services/hotel.service';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {
  isFetching: {
    hotel: boolean;
    hotelSuggestion: boolean;
  } = {
    hotel: false,
    hotelSuggestion: false,
  };
  hotelId!: number;
  hotel?: HotelDetail;
  hotelSuggestions?: Hotel[];
  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    public imageService: ImageService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.hotelId = params['id'];
      if (this.hotelId) this.fetchItem();
    });
  }

  private fetchItem() {
    this.isFetching.hotel = true;
    this.isFetching.hotelSuggestion = true;
    this.hotelService.getDetail(this.hotelId!).subscribe({
      next: (item) => this.assignHotel(item),
      error: (err) => (this.isFetching.hotel = false),
    });
    this.hotelService.getRandom().subscribe({
      next: (items) => this.assignHotelSuggestions(items),
      error: (err) => (this.isFetching.hotelSuggestion = false),
    });
  }
  private assignHotel(item: HotelDetail) {
    this.hotel = { ...item };

    this.isFetching.hotel = false;
  }
  private assignHotelSuggestions(items: Hotel[]) {
    this.hotelSuggestions = [...items];
    this.isFetching.hotelSuggestion = false;
  }
}
