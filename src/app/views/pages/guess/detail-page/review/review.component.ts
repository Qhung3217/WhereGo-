import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Review } from 'src/app/core/models/review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Input() rounded: boolean = false;
  @Input() reviews: Review[] = [];
  page = 1;
  rate = 0;
  reviewForm!: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.initForm();
  }
  onSubmit() {
    this.isSubmitted = true;
    console.log(this.reviewForm);
  }
  private initForm() {
    this.reviewForm = this.fb.group({
      rating: [null, [Validators.required, this.validateRating.bind(this)]],
      comment: [null, [Validators.required, Validators.maxLength(1000)]],
    });
  }
  private validateRating(control: FormControl) {
    if (control.value !== 0) return null;
    return { rating: true };
  }
}
