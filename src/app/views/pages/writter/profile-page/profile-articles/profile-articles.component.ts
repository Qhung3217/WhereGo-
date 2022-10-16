import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-articles',
  templateUrl: './profile-articles.component.html',
  styleUrls: ['./profile-articles.component.scss'],
})
export class ProfileArticlesComponent {
  tableHeaders = ['Hotel', 'Book date', 'People'];
  articlesData: {
    hotelName: string;
    bookDate: string;
    people: number;
  }[] = [
    {
      hotelName: 'Bình Thủy',
      bookDate: '2020-12-2',
      people: 2,
    },
    {
      hotelName: 'Ninh Kieu',
      bookDate: '2020-12-2',
      people: 2,
    },
  ];
  constructor() {}
}
