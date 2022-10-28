import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('emailInput', { static: true }) emailInput!: ElementRef;
  constructor(private authService: AuthService, private router: Router) {}

  handleSubmit(loginForm: NgForm) {
    this.isFetching = true;
    this.authService
      .travelerLogin(loginForm.value['email'], loginForm.value['password'])
      .subscribe({
        next: (res) => {
          console.log('Login successfull: ', res);

          this.isFetching = false;
        },
        error: (err) => {
          console.log('Login failed: ', err);
          this.emailInput.nativeElement.focus();
          loginForm.resetForm();
          this.isFetching = false;
        },
      });
  }
}
