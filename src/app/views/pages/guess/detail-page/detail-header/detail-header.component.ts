import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HotelService } from 'src/app/core/services/hotel.service';
import { PlaceService } from 'src/app/core/services/place.service';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.scss'],
})
export class DetailHeaderComponent implements OnInit {
  @Input() headerTitle: string = 'Title';
  @Input() reviewNumber: number = 0;
  @Input() address: string = 'Viet nam';
  addressEncode: string = encodeURIComponent(this.address);
  constructor() {}
  ngOnInit(): void {
    this.addressEncode = encodeURIComponent(this.address);
  }
}
