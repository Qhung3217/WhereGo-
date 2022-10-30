import { Component, OnInit } from '@angular/core';
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
  traveler?: Traveler;
  travelerSub!: Subscription;
  isFetching = false;
  constructor(
    private fb: FormBuilder,
    private travelerService: TravelerService,
    private toast: ToastService
  ) {}
  ngOnInit() {
    this.initForm();
    this.subcribeTraveler();
  }
  handleSubmit() {
    console.log(this.form.value);
    if (this.traveler?.email) {
      this.isFetching = true;
      this.travelerService
        .changePassword(
          this.traveler?.email,
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
            this.form.reset();
          },
          error: () => {
            this.isFetching = false;
            this.form.reset();
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
  private subcribeTraveler() {
    if (this.travelerService.traveler)
      this.traveler = { ...this.travelerService.traveler };
    this.travelerSub = this.travelerService.travelerEvent.subscribe(
      (traveler) => {
        if (traveler) this.traveler = { ...traveler };
        else this.traveler = traveler;
      }
    );
  }
}
