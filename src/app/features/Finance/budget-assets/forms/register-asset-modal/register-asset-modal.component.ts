import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  inject
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-register-asset-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register-asset-modal.component.html'
})
export class RegisterAssetModalComponent {

  @Output()
  close = new EventEmitter<void>();

  private readonly fb = inject(FormBuilder);

  readonly categories = [
    'Computer',
    'Furniture',
    'Vehicle',
    'Machinery',
    'Office Equipment',
    'Software',
    'Building',
    'Other'
  ];

  readonly departments = [
    'Finance',
    'HR',
    'Sales',
    'Marketing',
    'IT',
    'Operations'
  ];

  readonly statusOptions = [
    'Active',
    'In Use',
    'Maintenance',
    'Disposed'
  ];

  form = this.fb.nonNullable.group({

    assetName: [
      '',
      Validators.required
    ],

    category: [
      '',
      Validators.required
    ],

    department: [
      '',
      Validators.required
    ],

    purchaseDate: [
      '',
      Validators.required
    ],

    vendor: [
      ''
    ],

    assetValue: [
      0,
      [
        Validators.required,
        Validators.min(1)
      ]
    ],

    depreciation: [
      10,
      Validators.required
    ],

    usefulLife: [
      5,
      Validators.required
    ],

    location: [
      '',
      Validators.required
    ],

    status: [
      'Active',
      Validators.required
    ],

    description: [
      ''
    ]

  });

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    console.log(this.form.getRawValue());

    this.close.emit();

  }

  cancel(): void {

    this.close.emit();

  }

}