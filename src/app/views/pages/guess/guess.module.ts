import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SectionNavCardComponent } from './landing-page/section-nav-card/section-nav-card.component';
import { LandingPageModule } from './landing-page/landing-page.module';

const routes: Routes = [{ path: '', component: LandingPageComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), LandingPageModule],
})
export class GuessModule {}
