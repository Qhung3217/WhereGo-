import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/core/models/hotel.model';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss'],
})
export class HotelCardComponent {
  @Input() hotel!: Hotel;
  @Input() isLazy = true;
  constructor(public imageService: ImageService) {}
}
