import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isFetching = false;
  constructor(private authService: AuthService, private router: Router) {}

  handleSubmit(loginForm: NgForm) {
    this.isFetching = true;
    this.authService
      .travelerLogin(loginForm.value['email'], loginForm.value['password'])
      .subscribe({
        next: (res) => {
          console.log('Login successfull: ', res);

          this.isFetching = false;
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log('Login failed: ', err);
          loginForm.resetForm();
          this.isFetching = false;
        },
      });
  }
}
