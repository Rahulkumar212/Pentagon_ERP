import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  ExecutiveLead,
  LeadDiscussion
} from '../models/executive-center.type';

@Component({
  selector: 'app-customer-discussion-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './customer-discussion-form.component.html'
})
export class CustomerDiscussionFormComponent {

  @Input({ required: true })
  lead!: ExecutiveLead;

  @Output()
  close = new EventEmitter<void>();

  @Output()
  save = new EventEmitter<LeadDiscussion>();

  private readonly fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({

    duration: [
      120,
      [
        Validators.required,
        Validators.min(1)
      ]
    ],

    callOutcome: [
      '',
      Validators.required
    ],

    remarks: [
      ''
    ]

  });

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;
    }

    const payload: LeadDiscussion = {
      duration: this.form.controls.duration.value,
      callOutcome: this.form.controls.callOutcome.value,
      remarks: this.form.controls.remarks.value
    };

    this.save.emit(payload);
  }

  onClose(): void {
    this.close.emit();
  }

  resetForm(): void {

    this.form.reset({
      duration: 120,
      callOutcome: '',
      remarks: ''
    });

  }

}