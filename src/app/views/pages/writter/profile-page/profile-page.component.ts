import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Writer } from 'src/app/core/models/writer.model';
import { ImageService } from 'src/app/core/services/image.service';
import { WriterService } from 'src/app/core/services/writer.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit, AfterViewInit {
  writer?: Writer;
  writerSub!: Subscription;
  isFetching = true;
  constructor(
    private writerService: WriterService,
    private cd: ChangeDetectorRef,
    private title: Title,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('My profile');
    this.writer = this.writerService.writer
      ? { ...this.writerService.writer }
      : this.writerService.writer;
    this.writerSub = this.writerService.writerEvent.subscribe((writer) => {
      if (writer) this.writer = { ...writer };
      else this.writer = writer;
    });
  }
  ngAfterViewInit(): void {
    this.isFetching = false;
    this.cd.detectChanges();
  }
}
