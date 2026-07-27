import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-expense-claim-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './expense-claim-modal.component.html'
})
export class ExpenseClaimModalComponent {

  @Output()
  close = new EventEmitter<void>();

  form: FormGroup;

  categories = [

    'Travel',
    'Meals',
    'Office',
    'Software',
    'Training',
    'Medical',
    'Other'

  ];

  constructor(
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({

      employee: ['', Validators.required],

      category: ['Travel', Validators.required],

      expenseDate: ['', Validators.required],

      amount: [
        '',
        [
          Validators.required,
          Validators.min(1)
        ]
      ],

      description: ['', Validators.required]

    });

  }

  cancel(): void {

    this.close.emit();

  }

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    console.log(this.form.value);

    this.close.emit();

  }

}