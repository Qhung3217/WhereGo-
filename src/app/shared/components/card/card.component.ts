import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/core/services/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() item?: any;
  @Input() category: 'hotel' | 'restaurant' = 'hotel';
  isHeartActive = false;

  constructor(public imageService: ImageService) {
    console.log('card ', this.item);
  }
  handleHeartClick(event: MouseEvent) {
    this.isHeartActive = !this.isHeartActive;
    event.stopPropagation();
  }
}
