import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { Writer } from 'src/app/core/models/writer.model';
import { ImageService } from 'src/app/core/services/image.service';
import { WriterService } from 'src/app/core/services/writer.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  writer?: Writer;
  writerSub!: Subscription;
  isFetching = false;
  constructor(
    private writerService: WriterService,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.subcribeWriter();
  }
  ngOnDestroy(): void {
    if (this.writerSub) this.writerSub.unsubscribe();
  }
  private subcribeWriter() {
    this.writerSub = this.route.params.subscribe((params) => {
      const username = params['username'];
      if (username) {
        this.isFetching = true;
        this.writerService
          .getDetail(username, this.cookieService.get('writer'))
          .then((writer) => {
            if (writer) this.writer = { ...writer };
            this.isFetching = false;
          });
      }
    });
  }
}
