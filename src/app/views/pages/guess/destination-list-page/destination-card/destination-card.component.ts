import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/core/models/place.model';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.scss'],
})
export class DestinationCardComponent {
  @Input() destination!: Place;

  constructor(public imageService: ImageService) {}
}
