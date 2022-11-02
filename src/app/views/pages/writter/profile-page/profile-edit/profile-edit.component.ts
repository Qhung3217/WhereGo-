import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { Writer } from 'src/app/core/models/writer.model';
import { ImageService } from 'src/app/core/services/image.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { WriterService } from 'src/app/core/services/writer.service';
import { phoneValidator } from 'src/app/core/utils/validators/phone-validator';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit, OnDestroy {
  writer?: Writer;
  writerSub!: Subscription;
  profileForm!: FormGroup;
  avatarPreview!: string;
  isFetching = false;
  // Date of birth
  minDate: NgbDateStruct | any;
  maxDate: NgbDateStruct | any;
  // end Date of birth
  constructor(
    private writerService: WriterService,
    private fb: FormBuilder,
    private toast: ToastService,
    private cookieService: CookieService,
    public imageService: ImageService
  ) {}
  ngOnInit() {
    this.subcribeWriter();
    this.initialForm();
    this.setMinAndMaxDate();
  }
  ngOnDestroy(): void {
    if (this.writerSub) this.writerSub.unsubscribe();
  }
  handleSubmit() {
    const dob =
      this.profileForm.get('dob')?.value?.year +
      '-' +
      this.profileForm.get('dob')?.value?.month +
      '-' +
      this.profileForm.get('dob')?.value?.day;
    console.log('profile form submit', this.profileForm);
    this.isFetching = true;
    this.writerService
      .update(
        this.profileForm.get('name')?.value,
        this.profileForm.get('phone')?.value,
        dob,
        this.profileForm.get('avatar')?.value
      )
      .subscribe({
        next: (data) => this.handleEditSuccess(data),
        error: (err) => {
          this.isFetching = false;
        },
      });
  }
  getControl(field: string) {
    return this.profileForm.get(field);
  }
  isInvalidControl(field: string) {
    return (
      !this.profileForm.get(field)?.valid &&
      this.profileForm.get(field)?.touched
    );
  }
  handleChangeAvatar(image: any) {
    console.log(image);
    this.profileForm.get('avatar')?.setValue(image.target.files[0]);
    this.avatarPreview = URL.createObjectURL(image.target.files[0]);
  }
  private handleEditSuccess(data: any) {
    console.log(data);
    this.toast.showSuccess(
      'Update profile success',
      'Your profile information has been updated!'
    );
    this.isFetching = false;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      this.writerService
        .getDetail(this.writer!.username, this.cookieService.get('writer'))
        .then(() => {
          window.location.reload();
        });
    }, 1000);
  }
  private initialForm() {
    this.avatarPreview = this.imageService.defaultImage;
    let name = null;
    let phone = null;
    let dob = null;
    let avatar = null;
    if (this.writer) {
      name = this.writer.name;
      const dobDate = new Date(this.writer.dob);
      dob = {
        year: dobDate.getFullYear(),
        month: dobDate.getMonth() + 1,
        day: dobDate.getDate(),
      };
      phone = this.writer.tel;
    }

    this.profileForm = this.fb.group({
      name: [name, [Validators.required]],
      dob: [dob, [Validators.required]],
      phone: [phone, [Validators.required, phoneValidator.bind(this)]],
      avatar: [avatar],
    });
  }

  private subcribeWriter() {
    if (this.writerService.writer)
      this.writer = { ...this.writerService.writer };
    this.writerSub = this.writerService.writerEvent.subscribe((writer) => {
      if (writer) this.writer = { ...writer };
      else this.writer = writer;
      this.initialForm();
    });
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
}
