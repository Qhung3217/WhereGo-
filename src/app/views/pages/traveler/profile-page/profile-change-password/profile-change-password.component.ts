import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Traveler } from 'src/app/core/models/traveler.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { TravelerService } from 'src/app/core/services/traveler.service';
import { ConfirmPasswordValidator } from 'src/app/core/utils/validators/confirm-password-math-validator';
@Component({
  selector: 'app-profile-change-password',
  templateUrl: './profile-change-password.component.html',
  styleUrls: ['./profile-change-password.component.scss'],
})
export class ProfileChangePasswordComponent implements OnInit {
  form!: FormGroup;
  isFetching = false;
  constructor(
    private fb: FormBuilder,
    private travelerService: TravelerService,
    private toast: ToastService
  ) {}
  ngOnInit() {
    this.initForm();
  }

  handleSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.isFetching = true;
      this.travelerService
        .changePassword(
          this.form.get('oldPassword')?.value,
          this.form.get('newPassword')?.value
        )
        .subscribe({
          next: (res) => {
            this.toast.showSuccess(
              'Change password success',
              'Password has been updated.'
            );
            this.isFetching = false;
            this.initForm();
          },
          error: () => {
            this.isFetching = false;
            this.initForm();
          },
        });
    }
  }
  getControl(field: string) {
    return this.form.get(field);
  }
  isInvalidControl(field: string) {
    return !this.form.get(field)?.valid && this.form.get(field)?.touched;
  }
  private initForm() {
    this.form = this.fb.group(
      {
        oldPassword: [null, [Validators.required, Validators.minLength(6)]],
        newPassword: [null, [Validators.required, Validators.minLength(6)]],
        confirmPassword: [null, [Validators.required]],
      },
      { validators: ConfirmPasswordValidator }
    );
  }
}
