import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { ConfirmPasswordValidator } from 'src/app/core/utils/validators/confirm-password-math-validator';
import { phoneValidator } from 'src/app/core/utils/validators/phone-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  // Date of birth
  minDate: NgbDateStruct | any;
  maxDate: NgbDateStruct | any;
  // end Date of birth
  isFetching = false;
  avatarPreview: string | null = null;
  registerForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private toast: ToastService,
    private router: Router
  ) {
    this.initialForm();
    this.setMinAndMaxDate();
  }

  handleSubmit() {
    const dob =
      this.registerForm.get('dob')?.value?.year +
      '-' +
      this.registerForm.get('dob')?.value?.month +
      '-' +
      this.registerForm.get('dob')?.value?.day;
    console.log(this.registerForm);
    this.isFetching = true;
    this.authService
      .register(
        this.registerForm.get('email')?.value,
        this.registerForm.get('password')?.value,
        this.registerForm.get('username')?.value,
        this.registerForm.get('name')?.value,
        this.registerForm.get('tel')?.value,
        dob,
        this.registerForm.get('avatar')?.value
      )
      .subscribe({
        next: (data) => {
          console.log(data);
          this.toast.showSuccess(
            'Register success',
            'Thank you for registering! Login and enjoy'
          );
          this.isFetching = false;
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          this.isFetching = false;
        },
      });
  }
  getControl(field: string) {
    return this.registerForm.get(field);
  }
  isInvalidControl(field: string) {
    return (
      !this.registerForm.get(field)?.valid &&
      this.registerForm.get(field)?.touched
    );
  }
  handleChangeAvatar(image: any) {
    console.log(image);
    this.registerForm.get('avatar')?.setValue(image.target.files[0]);
    this.avatarPreview = URL.createObjectURL(image.target.files[0]);
  }
  private initialForm() {
    this.registerForm = this.fb.group(
      {
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]],
        confirmPassword: [null, [Validators.required, Validators.minLength(6)]],
        username: [null, [Validators.required]],
        name: [null, [Validators.required]],
        tel: [undefined, [Validators.required, phoneValidator.bind(this)]],
        dob: [undefined, [Validators.required]],
        avatar: [null],
      },
      { validators: ConfirmPasswordValidator }
    );
  }
  private setMinAndMaxDate() {
    const currentDate = new Date();
    this.minDate = {
      year: currentDate.getFullYear() - 100,
      month: 1,
      day: 1,
    };
    this.maxDate = {
      year: currentDate.getFullYear() - 16,
      month: 12,
      day: 31,
    };
  }
  // private checkConfirmPassword(control: FormControl) {
  //   if (!this.registerForm) return null;
  //   if (control.value === this.registerForm.get('password')?.value) return null;
  //   return { checkConfirmPassword: true };
  // }
}
