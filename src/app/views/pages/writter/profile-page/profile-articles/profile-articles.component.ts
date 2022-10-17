import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-articles',
  templateUrl: './profile-articles.component.html',
  styleUrls: ['./profile-articles.component.scss'],
})
export class ProfileArticlesComponent {
  tableHeaders = ['Id', 'Title', 'Image', 'About'];
  articlesData: {
    id: number;
    title: string;
    image: string;
    about: string;
  }[] = [
    {
      id: 1,
      title: 'The best places to visit around the world in December',
      image: '<img src="https://picsum.photos/500" alt="" />',
      about:
        'One of the most beautiful things about Chicago is the ability to take in the stunning natural scenes the Midwest is known for, then turn around to immediately immerse yourself in big-city vibes. From a park dedicated to the Wizard of Oz to escape rooms and tales of former gangsters, Chicago has plenty of hidden attractions and cultural sites to explore. So whether you consider yourself a food-lover, a history buff, or an urban explorer, here are the activities and sights that will gain you a nod of approval from locals.',
    },
    {
      id: 2,
      title: 'Head to Half Moon Bay for a NorCal coastal vibe and fall spirit',
      image: '<img src="https://picsum.photos/500?random=2" alt="" />',
      about:
        'Romantic canal cruises, adrenaline rushes, and luxe shopping are in store.',
    },
    {
      id: 3,
      title: '15 fun and unique things you can only do in Chicago',
      image: '<img src="https://picsum.photos/500?random=3" alt="" />',
      about:
        'One of the most beautiful things about Chicago is the ability to take in the stunning natural scenes the Midwest is known for, then turn around to immediately immerse yourself in big-city vibes. From a park dedicated to the Wizard of Oz to escape rooms and tales of former gangsters, Chicago has plenty of hidden attractions and cultural sites to explore. So whether you consider yourself a food-lover, a history buff, or an urban explorer, here are the activities and sights that will gain you a nod of approval from locals.',
    },
  ];
  constructor() {}
}
