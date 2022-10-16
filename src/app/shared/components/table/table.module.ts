import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableToolsComponent } from './table-tools/table-tools.component';
import { SearchIconModule } from '../../icons/search-icon/search-icon.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ChevronRightIconModule } from '../../icons/chevron-right-icon/chevron-right-icon.module';

@NgModule({
  declarations: [TableComponent, TableBodyComponent, TableToolsComponent],
  imports: [
    CommonModule,
    SearchIconModule,
    NgbPaginationModule,
    ChevronRightIconModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
