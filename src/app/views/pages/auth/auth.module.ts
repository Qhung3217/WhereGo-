import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { RegisterComponent } from './register/register.component';
import { WritterLoginComponent } from './writter-login/writter-login.component';
import { WritterLoginModule } from './writter-login/writter-login.module';

const routes: Routes = [
  { path: 'traveler/login', component: LoginComponent },
  { path: 'writer/login', component: WritterLoginComponent },
  { path: 'traveler/register', component: RegisterComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoginModule,
    RegisterModule,
    WritterLoginModule,
  ],
})
export class AuthModule {}
