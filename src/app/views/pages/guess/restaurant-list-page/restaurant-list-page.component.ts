import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-list-page',
  templateUrl: './restaurant-list-page.component.html',
  styleUrls: ['./restaurant-list-page.component.scss'],
})
export class RestaurantListPageComponent {
  filterSelected = ['Restaurants', 'Breakfast'];
  restaurants = [
    {
      img: 'https://picsum.photos/500?random=1',
      name: 'Tomato - Pad Thai',
      rating: '4.5',
      cuisines: ['Thai'],
    },
    {
      img: 'https://picsum.photos/500?random=2',
      name: "L'Escale - Sky Garden & Lounge",
      rating: '4.7',
      cuisines: ['French', 'European'],
    },
    {
      img: 'https://picsum.photos/500?random=3',
      name: 'Phuong Nam Restaurant',
      rating: '3.5',
      cuisines: ['Vietnamese'],
    },
  ];
  constructor() {}
}
