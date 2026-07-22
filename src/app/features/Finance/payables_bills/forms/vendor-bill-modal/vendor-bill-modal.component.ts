import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-vendor-bill-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './vendor-bill-modal.component.html'
})
export class VendorBillModalComponent {

  @Output()
  close = new EventEmitter<void>();

  form: FormGroup;

  categories = [

    'Software Subscriptions',

    'Utilities',

    'Office Rent',

    'Office Supplies',

    'Travel',

    'Logistics',

    'Marketing',

    'Professional Services'

  ];

  constructor(
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({

      vendor: [
        '',
        Validators.required
      ],

      dueDate: [
        '',
        Validators.required
      ],

      category: [
        'Software Subscriptions',
        Validators.required
      ],

      amount: [
        '',
        [
          Validators.required,
          Validators.min(1)
        ]
      ]

    });

  }

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    console.log(this.form.value);

    this.close.emit();

  }

  cancel(): void {

    this.close.emit();

  }

}