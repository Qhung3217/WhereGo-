import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Writer } from 'src/app/core/models/writer.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { WriterService } from 'src/app/core/services/writer.service';
import { ConfirmPasswordValidator } from 'src/app/core/utils/validators/confirm-password-math-validator';

@Component({
  selector: 'app-profile-change-password',
  templateUrl: './profile-change-password.component.html',
  styleUrls: ['./profile-change-password.component.scss'],
})
export class ProfileChangePasswordComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  writer?: Writer;
  writerSub!: Subscription;
  isFetching = false;
  constructor(
    private fb: FormBuilder,
    private writerService: WriterService,
    private toast: ToastService
  ) {}
  ngOnInit() {
    this.initForm();
    this.subcribeWriter();
  }
  ngOnDestroy(): void {
    if (this.writerSub) this.writerSub.unsubscribe();
  }
  handleSubmit() {
    console.log(this.form.value);
    if (this.writer?.email) {
      this.isFetching = true;
      this.writerService
        .changePassword(
          this.writer?.email,
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
  private subcribeWriter() {
    if (this.writerService.writer)
      this.writer = { ...this.writerService.writer };
    this.writerSub = this.writerService.writerEvent.subscribe((writer) => {
      if (writer) this.writer = { ...writer };
      else this.writer = writer;
    });
  }
}
