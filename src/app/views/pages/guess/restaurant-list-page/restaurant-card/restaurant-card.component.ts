import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/core/models/restaurant.model';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss'],
})
export class RestaurantCardComponent {
  @Input() restaurant!: Restaurant;

  constructor(public imageService: ImageService) {}
}
