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
import { NgxSummernoteModule } from 'ngx-summernote';
import { AutoResizeTextareaDirectiveModule } from 'src/app/shared/directives/auto-resize-textarea-directive/auto-resize-textarea-directive.module';

const routes: Routes = [
  {
    path: 'article/new',
    canActivate: [WriterAuthenticateGuard],

    component: ArticleFormPageComponent,
  },
  {
    path: 'article/:articleId/edit',
    canActivate: [WriterAuthenticateGuard],

    component: ArticleFormPageComponent,
  },
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
    NgxSummernoteModule,

    TableModule,
    LoadingSpinnerModule,
    FetchFailModule,

    SafeUrlPipeModule,
    AutoResizeTextareaDirectiveModule,

    ImageIconModule,
  ],
})
export class WritterModule {}
