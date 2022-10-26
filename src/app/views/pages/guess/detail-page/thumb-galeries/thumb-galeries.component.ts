import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/core/services/image.service';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';

SwiperCore.use([FreeMode, Thumbs, Navigation]);
@Component({
  selector: 'app-thumb-galeries',
  templateUrl: './thumb-galeries.component.html',
  styleUrls: ['./thumb-galeries.component.scss'],
})
export class ThumbGaleriesComponent {
  thumbsSwiper: any;
  @Input() galeries: any[] = [];
  constructor(public imageService: ImageService) {}
}
