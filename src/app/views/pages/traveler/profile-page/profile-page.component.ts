import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { Traveler } from 'src/app/core/models/traveler.model';
import { ImageService } from 'src/app/core/services/image.service';
import { TravelerService } from 'src/app/core/services/traveler.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  traveler?: Traveler;
  isFetching = false;
  travelerSub!: Subscription;
  constructor(
    private travelerService: TravelerService,
    public imageService: ImageService
  ) {}
  ngOnInit() {
    this.traveler = this.travelerService.traveler
      ? { ...this.travelerService.traveler }
      : this.travelerService.traveler;
    this.travelerSub = this.travelerService.travelerEvent.subscribe(
      (traveler) => {
        if (traveler) this.traveler = { ...traveler };
        else this.traveler = traveler;
      }
    );
  }
}
