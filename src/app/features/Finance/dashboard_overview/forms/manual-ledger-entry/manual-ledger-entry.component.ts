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

import { LedgerTransactionService } from '../../../../../core/services/finance/ledger-transaction.service';

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

  isSubmitting = false;

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
    'ICICI Bank-CA(Pentagon)',
    'ICICI Bank-OD(Pentagon)',
    'IndusInd Bank-CA(Smart)',
    'IndusInd Bank-CA(Pentagon)',
    'ICICI Bank-CA(SEST)'
  ];

  constructor(
    private readonly fb: FormBuilder,
    private readonly ledgerTransactionService: LedgerTransactionService
  ) {

    this.form = this.fb.group({

      transactionId: [
        this.generateTransactionId(),
        Validators.required
      ],

      date: [
        new Date().toISOString().substring(0, 10),
        Validators.required
      ],

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

  private generateTransactionId(): string {

    const now = new Date();

    const year = now.getFullYear();

    const month = String(now.getMonth() + 1).padStart(2, '0');

    const day = String(now.getDate()).padStart(2, '0');

    const random = Math.floor(1000 + Math.random() * 9000);

    return `TXN-${year}${month}${day}-${random}`;

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

    this.isSubmitting = true;

    this.ledgerTransactionService
      .createLedgerTransaction(this.form.getRawValue())
      .subscribe({

        next: (response) => {

          console.log(
            'Ledger Transaction Created',
            response
          );

          this.isSubmitting = false;

          this.form.reset({

            transactionId: this.generateTransactionId(),

            transactionDate: new Date()
              .toISOString()
              .substring(0, 10),

            type: 'credit',

            category: 'General',

            amount: 1,

            account: this.accounts[0],

            description: ''

          });

          this.close.emit();

        },

        error: (error) => {

          console.error(
            'Create Ledger Transaction Failed',
            error
          );

          this.isSubmitting = false;

        }

      });

  }

}