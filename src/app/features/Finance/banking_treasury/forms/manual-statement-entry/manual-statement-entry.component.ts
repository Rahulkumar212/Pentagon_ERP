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
  selector: 'app-manual-statement-entry',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './manual-statement-entry.component.html'
})
export class ManualStatementEntryComponent {

  @Output()
  close = new EventEmitter<boolean>();

  private readonly fb = inject(FormBuilder);

  banks = [
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'SBI',
    'PNB',
    'Kotak Mahindra'
  ];

  transactionTypes = [
    'Credit',
    'Debit'
  ];

  form = this.fb.nonNullable.group({

    bank: [
      '',
      Validators.required
    ],

    accountNumber: [
      '',
      Validators.required
    ],

    transactionDate: [
      '',
      Validators.required
    ],

    referenceNo: [
      '',
      Validators.required
    ],

    transactionType: [
      'Credit',
      Validators.required
    ],

    amount: [
      0,
      [
        Validators.required,
        Validators.min(1)
      ]
    ],

    description: [
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

    console.log(
      'Manual Statement Entry',
      this.form.getRawValue()
    );

    // TODO:
    // TreasuryService.createManualStatement()

    this.close.emit(true);

  }

  cancel(): void {

    this.close.emit(false);

  }

}