import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  /* ---------------- Table body ---------------- */
  // article's properties
  @Input() showArticle = false;
  // end  article's properties
  @Input() ths: string[] = ['Col 1', 'Col 2', 'Col 3'];
  @Input() dataSource: {}[] = [
    {
      col1: 'Data 1',
      col2: 'Data 2',
      col3: 'Data 3',
    },
  ];
  @Input() fieldSearch: string = '';
  dataShow = [...this.dataSource];
  /* -------------- End table body -------------- */

  /* ---------------- Pagination ---------------- */
  page = 1;
  /* -------------- end pagination -------------- */
  constructor(private router: Router) {}

  /* ---------------- Table body ---------------- */
  getValues(dataElement: {}) {
    // console.log(Object.values(dataElement));

    if (this.dataSource.length > 0) {
      return Object.values(dataElement);
    }

    return [];
  }
  decode(value: any) {
    return decodeURIComponent(value);
  }

  /* -------------- End table body -------------- */

  /* ---------------- PAGINATION ---------------- */
  handlePageChange(page: number) {
    this.page = page;
  }
  /* -------------- END PAGINATION -------------- */
}
