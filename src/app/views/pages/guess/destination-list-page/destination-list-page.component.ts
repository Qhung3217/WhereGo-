import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-list-page',
  templateUrl: './destination-list-page.component.html',
  styleUrls: ['./destination-list-page.component.scss'],
})
export class DestinationListPageComponent {
  filterSelected = ['Landmark', 'Nature'];
  destinations = [
    {
      img: 'https://picsum.photos/500?random=1',
      name: 'Tomato - Pad Thai',
      rating: '4.5',
    },
    {
      img: 'https://picsum.photos/500?random=2',
      name: "L'Escale - Sky Garden & Lounge",
      rating: '4.7',
    },
    {
      img: 'https://picsum.photos/500?random=3',
      name: 'Phuong Nam Restaurant',
      rating: '3.5',
    },
  ];
  constructor() {}
}
