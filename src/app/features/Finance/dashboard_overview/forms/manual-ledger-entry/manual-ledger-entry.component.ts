import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-manual-ledger-entry',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './manual-ledger-entry.component.html'
})
export class ManualLedgerEntryComponent {

  @Output()
  close = new EventEmitter<void>();

  form: FormGroup;

  categories = [
    'General',
    'Sales Income',
    'Software Subscription',
    'Office Rent',
    'Logistics',
    'Tax',
    'Refund',
    'Consulting'
  ];

  accounts = [
    'Silicon Valley Operating',
    'HDFC Corporate Checking',
    'ICICI Business Account'
  ];

  constructor(
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({

      type: [
        'credit',
        Validators.required
      ],

      description: [
        '',
        Validators.required
      ],

      category: [
        'General',
        Validators.required
      ],

      amount: [
        1,
        [
          Validators.required,
          Validators.min(1)
        ]
      ],

      account: [
        this.accounts[0],
        Validators.required
      ]

    });

  }

  setTransactionType(
    type: 'credit' | 'debit'
  ): void {

    this.form.patchValue({
      type
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