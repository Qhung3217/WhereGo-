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
import { SavedPageModule } from './saved-page/saved-page.module';
import { SavedPageComponent } from './saved-page/saved-page.component';
import { TravelArticlesPageModule } from './travel-articles-page/travel-articles-page.module';
import { TravelArticlesPageComponent } from './travel-articles-page/travel-articles-page.component';
import { DetailPageModule } from './detail-page/detail-page.module';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { ArticleDetailPageModule } from './article-detail-page/article-detail-page.module';
import { ArticleDetailPageComponent } from './article-detail-page/article-detail-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'hotel', component: HotelListPageComponent },
  { path: 'restaurant', component: RestaurantListPageComponent },
  { path: 'destination', component: DestinationListPageComponent },
  { path: 'saved', component: SavedPageComponent },
  { path: 'travel-articles', component: TravelArticlesPageComponent },
  { path: 'hotel/:slug', component: DetailPageComponent },
  { path: 'restaurant/:slug', component: DetailPageComponent },
  { path: 'destination/:slug', component: DetailPageComponent },
  { path: 'travel-articles/:slug', component: ArticleDetailPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LandingPageModule,
    HotelListPageModule,
    RestaurantListPageModule,
    DestinationListPageModule,
    SavedPageModule,
    TravelArticlesPageModule,
    DetailPageModule,
    ArticleDetailPageModule,
  ],
})
export class GuessModule {}
