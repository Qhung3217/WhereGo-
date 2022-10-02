import { HotelListPageModule } from './hotel-list-page/hotel-list-page.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { HotelListPageComponent } from './hotel-list-page/hotel-list-page.component';
import { LandingPageModule } from './landing-page/landing-page.module';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'hotel', component: HotelListPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LandingPageModule,
    HotelListPageModule,
  ],
})
export class GuessModule {}
