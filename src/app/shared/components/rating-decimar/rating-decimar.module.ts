import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingDecimarComponent } from './rating-decimar.component';

@NgModule({
  declarations: [RatingDecimarComponent],
  imports: [CommonModule, NgbModule],
  exports: [RatingDecimarComponent],
})
export class RatingDecimarModule {}
