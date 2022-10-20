import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/core/models/place.model';
import { PlaceService } from 'src/app/core/services/place.service';

@Component({
  selector: 'app-section-top-destination',
  templateUrl: './section-top-destination.component.html',
  styleUrls: ['./section-top-destination.component.scss'],
})
export class SectionTopDestinationComponent {
  items?: Place[];
  constructor(public placeService: PlaceService) {
    this.placeService
      .getRandom()
      .subscribe((items: Place[]) => (this.items = [...items]));
  }
}
