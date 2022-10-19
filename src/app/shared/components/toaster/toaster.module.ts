import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToasterComponent } from './toaster.component';

@NgModule({
  declarations: [ToasterComponent],
  imports: [CommonModule, NgbToastModule],
  exports: [ToasterComponent],
})
export class ToasterModule {}
