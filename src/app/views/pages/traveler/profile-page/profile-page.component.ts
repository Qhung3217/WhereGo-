import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { Traveler } from 'src/app/core/models/traveler.model';
import { ImageService } from 'src/app/core/services/image.service';
import { TravelerService } from 'src/app/core/services/traveler.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  traveler?: Traveler;
  travelerSub!: Subscription;
  isFetching = false;
  constructor(
    private travelerService: TravelerService,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    public imageService: ImageService
  ) {}
  ngOnInit() {
    this.subcribeTraveler();
  }
  ngOnDestroy(): void {
    if (this.travelerSub) this.travelerSub.unsubscribe();
  }

  private subcribeTraveler() {
    this.route.params.subscribe((params) => {
      const username = params['username'];
      if (username) {
        this.isFetching = true;
        this.travelerService
          .getDetail(username, this.cookieService.get('traveler'))
          .then((traveler) => {
            if (traveler) this.traveler = { ...traveler };
            this.isFetching = false;
          });
      }
    });
  }
}
