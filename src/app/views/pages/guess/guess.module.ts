import { RestaurantListPageComponent } from './restaurant-list-page/restaurant-list-page.component';
import { HotelListPageModule } from './hotel-list-page/hotel-list-page.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { HotelListPageComponent } from './hotel-list-page/hotel-list-page.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { RestaurantListPageModule } from './restaurant-list-page/restaurant-list-page.module';
import { DestinationListPageModule } from './destination-list-page/destination-list-page.module';
import { DestinationListPageComponent } from './destination-list-page/destination-list-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'hotel', component: HotelListPageComponent },
  { path: 'restaurant', component: RestaurantListPageComponent },
  { path: 'destination', component: DestinationListPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LandingPageModule,
    HotelListPageModule,
    RestaurantListPageModule,
    DestinationListPageModule,
  ],
})
export class GuessModule {}
