import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { SearchIconModule } from 'src/app/shared/icons/search-icon/search-icon.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ChevronRightIconModule } from 'src/app/shared/icons/chevron-right-icon/chevron-right-icon.module';
import { EditIconModule } from 'src/app/shared/icons/edit-icon/edit-icon.module';
import { TrashIconModule } from 'src/app/shared/icons/trash-icon/trash-icon.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    NgxPaginationModule,
    Ng2SearchPipeModule,

    SearchIconModule,
    NgbPaginationModule,
    ChevronRightIconModule,
    EditIconModule,
    TrashIconModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
