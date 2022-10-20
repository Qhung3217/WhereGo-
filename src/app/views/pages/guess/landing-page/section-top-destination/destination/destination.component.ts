import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/core/models/place.model';
import { ImageService } from 'src/app/core/services/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent {
  @Input() item!: Place;

  constructor(public imageService: ImageService) {}
}
