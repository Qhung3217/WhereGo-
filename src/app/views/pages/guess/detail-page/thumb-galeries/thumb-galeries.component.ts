import { Component, OnInit } from '@angular/core';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';

SwiperCore.use([FreeMode, Navigation, Thumbs]);
@Component({
  selector: 'app-thumb-galeries',
  templateUrl: './thumb-galeries.component.html',
  styleUrls: ['./thumb-galeries.component.scss'],
})
export class ThumbGaleriesComponent {
  thumbsSwiper: any;
  constructor() {}
}
