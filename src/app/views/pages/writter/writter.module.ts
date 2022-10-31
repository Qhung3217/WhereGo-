import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { ImageIconModule } from 'src/app/shared/icons/image-icon/image-icon.module';
import { ProfileArticlesComponent } from './profile-page/profile-articles/profile-articles.component';
import { ProfileEditComponent } from './profile-page/profile-edit/profile-edit.component';
import { ProfileChangePasswordComponent } from './profile-page/profile-change-password/profile-change-password.component';
import { ArticleFormPageComponent } from './article-form-page/article-form-page.component';
import { LoadingSpinnerModule } from 'src/app/shared/components/loading-spinner/loading-spinner.module';
import { FetchFailModule } from 'src/app/shared/components/fetch-fail/fetch-fail.module';
import { SafeUrlPipeModule } from 'src/app/shared/pipes/safe-url-pipe/safe-url-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WriterAuthenticateGuard } from 'src/app/core/guards/writer-authenticate.guard';

const routes: Routes = [
  {
    path: ':username',
    component: ProfilePageComponent,
    canActivate: [WriterAuthenticateGuard],
    children: [
      { path: 'edit', component: ProfileEditComponent },
      { path: 'articles', component: ProfileArticlesComponent },
      { path: 'change-password', component: ProfileChangePasswordComponent },
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
    ],
  },
  {
    path: 'new-article',
    canActivate: [WriterAuthenticateGuard],

    component: ArticleFormPageComponent,
  },
  {
    path: ':articleId/edit',
    canActivate: [WriterAuthenticateGuard],

    component: ArticleFormPageComponent,
  },
];

@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileArticlesComponent,
    ProfileChangePasswordComponent,
    ProfileEditComponent,
    ArticleFormPageComponent,
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
  ],
})
export class WritterModule {}
