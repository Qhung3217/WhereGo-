import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-list-page',
  templateUrl: './hotel-list-page.component.html',
  styleUrls: ['./hotel-list-page.component.scss'],
})
export class HotelListPageComponent {
  filterSelected = ['Free parking', 'Pool', 'Breakfast included', 'Free wifi'];
  hotels = [
    {
      img: 'https://picsum.photos/500?random=1',
      name: 'Sheraton Can Tho',
      rating: '4.5',
      amenities: ['Free wifi', 'Pool', 'Breakfast included'],
      property: 'Lodge',
    },
    {
      img: 'https://picsum.photos/500?random=2',
      name: 'Muong Thanh',
      rating: '4.7',
      amenities: ['Pool', 'Breakfast included'],
    },
    {
      img: 'https://picsum.photos/500?random=3',
      name: 'Green Village Mekhong',
      rating: '3.5',
      amenities: ['Pool', 'Breakfast included'],
    },
  ];
  constructor() {}
}
