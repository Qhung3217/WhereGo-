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

const routes: Routes = [
  {
    path: ':username',
    component: ProfilePageComponent,
    children: [
      { path: 'edit', component: ProfileEditComponent },
      { path: 'articles', component: ProfileArticlesComponent },
      { path: 'change-password', component: ProfileChangePasswordComponent },
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
    ],
  },
  {
    path: 'new-article',
    component: ArticleFormPageComponent,
  },
  {
    path: ':articleId/edit',
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
    RouterModule.forChild(routes),
    NgbDatepickerModule,

    TableModule,

    ImageIconModule,
  ],
})
export class WritterModule {}
