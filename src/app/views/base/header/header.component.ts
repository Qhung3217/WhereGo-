import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { Traveler } from 'src/app/core/models/traveler.model';
import { Writer } from 'src/app/core/models/writer.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { ImageService } from 'src/app/core/services/image.service';
import { TravelerService } from 'src/app/core/services/traveler.service';
import { WriterService } from 'src/app/core/services/writer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  showHeaderMenuMobile = false;
  showSearchModal = false;

  writer: Writer | undefined;
  traveler: Traveler | undefined;
  travelerSub!: Subscription;
  writerSub!: Subscription;
  constructor(
    private travelerService: TravelerService,
    private writerService: WriterService,
    private cookieService: CookieService,
    public imageService: ImageService,
    public authService: AuthService
  ) {}
  ngOnInit(): void {
    this.subcribeTraveler();
    this.subcribeWriter();
  }
  ngOnDestroy(): void {
    this.travelerSub.unsubscribe();
    this.writerSub.unsubscribe();
  }
  handleSearchClick(event: Event) {
    event.stopPropagation();
    this.showSearchModal = true;
  }
  handleSignOut() {
    if (this.writer) this.authService.writerLogout();
    else this.authService.travelerLogout();
  }
  private subcribeTraveler() {
    this.travelerService.loadFormLocal();
    this.travelerSub = this.travelerService.travelerEvent.subscribe(
      (traveler) => {
        console.log('[HEADER] travelerEvent: ', traveler);

        if (traveler) this.traveler = { ...traveler };
        else this.traveler = traveler;
      }
    );
    if (!this.cookieService.get('traveler')) this.travelerService.remove();
  }
  private subcribeWriter() {
    this.writerService.loadFormLocal();

    this.writerSub = this.writerService.writerEvent.subscribe((writer) => {
      console.log('[HEADER] writerEvent: ', writer);
      if (writer) this.writer = { ...writer };
      else this.writer = writer;
    });
    if (!this.cookieService.get('writer')) this.writerService.remove();
  }
}
