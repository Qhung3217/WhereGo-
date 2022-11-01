import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';

import { ProfileBookingsComponent } from './profile-page/profile-bookings/profile-bookings.component';
import { ProfileChangePasswordComponent } from './profile-page/profile-change-password/profile-change-password.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfileEditComponent } from './profile-page/profile-edit/profile-edit.component';
import { ImageIconModule } from 'src/app/shared/icons/image-icon/image-icon.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { CheckOutPageComponent } from './check-out-page/check-out-page.component';
import { TravelerAuthenticateGuard } from 'src/app/core/guards/traveler-authenticate.guard';
import { LoadingSpinnerModule } from 'src/app/shared/components/loading-spinner/loading-spinner.module';
import { CircleExclamationIconModule } from 'src/app/shared/icons/circle-exclamation-icon/circle-exclamation-icon.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SafeUrlPipeModule } from 'src/app/shared/pipes/safe-url-pipe/safe-url-pipe.module';
import { FetchFailModule } from 'src/app/shared/components/fetch-fail/fetch-fail.module';

const routes: Routes = [
  {
    path: '',
    canActivate: [TravelerAuthenticateGuard],
    component: ProfilePageComponent,
    children: [
      { path: 'edit', component: ProfileEditComponent },
      { path: 'bookings', component: ProfileBookingsComponent },
      { path: 'change-password', component: ProfileChangePasswordComponent },
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
    ],
  },
  {
    path: 'check-out/:hotelId',
    canActivate: [TravelerAuthenticateGuard],
    component: CheckOutPageComponent,
  },
];

@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileBookingsComponent,
    ProfileChangePasswordComponent,
    ProfileEditComponent,
    CheckOutPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

    NgbDatepickerModule,

    TableModule,
    LoadingSpinnerModule,
    FetchFailModule,

    SafeUrlPipeModule,

    ImageIconModule,
    CircleExclamationIconModule,
  ],
})
export class TravelerModule {}
