import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileReviewComponent } from './profile-page/profile-review/profile-review.component';
import { ProfileBookingsComponent } from './profile-page/profile-bookings/profile-bookings.component';
import { ProfileChangePasswordComponent } from './profile-page/profile-change-password/profile-change-password.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditProfileComponent } from './profile-page/modal-edit-profile/modal-edit-profile.component';

const routes: Routes = [
  {
    path: ':username',
    component: ProfilePageComponent,
    children: [
      { path: '', component: ProfileReviewComponent },
      { path: 'bookings', component: ProfileBookingsComponent },
      { path: 'change-password', component: ProfileChangePasswordComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileReviewComponent,
    ProfileBookingsComponent,
    ProfileChangePasswordComponent,
    ModalEditProfileComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), NgbDatepickerModule],
})
export class TravelerModule {}
