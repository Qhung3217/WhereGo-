import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, NgbPaginationModule],
  exports: [PaginationComponent],
})
export class PaginationModule {}
