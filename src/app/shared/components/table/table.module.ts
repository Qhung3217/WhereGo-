import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableToolsComponent } from './table-tools/table-tools.component';
import { SearchIconModule } from 'src/app/shared/icons/search-icon/search-icon.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ChevronRightIconModule } from 'src/app/shared/icons/chevron-right-icon/chevron-right-icon.module';
import { EditIconModule } from 'src/app/shared/icons/edit-icon/edit-icon.module';
import { TrashIconModule } from 'src/app/shared/icons/trash-icon/trash-icon.module';
@NgModule({
  declarations: [TableComponent, TableBodyComponent, TableToolsComponent],
  imports: [
    CommonModule,

    SearchIconModule,
    NgbPaginationModule,
    ChevronRightIconModule,
    EditIconModule,
    TrashIconModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
