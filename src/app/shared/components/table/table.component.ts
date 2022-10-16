import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  // Table body
  @Input() ths: string[] = ['Col 1', 'Col 2', 'Col 3'];
  @Input() dataSource: {}[] = [
    {
      col1: 'Data 1',
      col2: 'Data 2',
      col3: 'Data 3',
    },
  ];
  // End table body

  // Table tools

  // End table tools

  constructor() {}
}
