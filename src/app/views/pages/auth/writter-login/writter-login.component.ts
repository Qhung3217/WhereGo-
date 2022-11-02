import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-writter-login',
  templateUrl: './writter-login.component.html',
  styleUrls: ['./writter-login.component.scss'],
})
export class WritterLoginComponent implements OnInit {
  isFetching = false;
  @ViewChild('emailInput', { static: true }) emailInput!: ElementRef;
  constructor(private authService: AuthService, private title: Title) {}
  ngOnInit() {
    this.title.setTitle('Writer login');
  }
  handleSubmit(loginForm: NgForm) {
    this.isFetching = true;
    this.authService
      .writerLogin(loginForm.value['email'], loginForm.value['password'])
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
