import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss'],
})
export class TableBodyComponent {
  @Input() ths: string[] = [];
  @Input() data: {}[] = [];
  constructor() {}
  getValues(dataElement: {}) {
    // console.log(Object.values(dataElement));

    if (this.data.length > 0) {
      return Object.values(dataElement);
    }

    return [];
  }
}
