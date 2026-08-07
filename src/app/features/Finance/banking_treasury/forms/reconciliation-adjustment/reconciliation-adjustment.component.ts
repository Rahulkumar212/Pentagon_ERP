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
  selector: 'app-reconciliation-adjustment',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reconciliation-adjustment.component.html'
})
export class ReconciliationAdjustmentComponent {

  @Output()
  close = new EventEmitter<boolean>();

  private readonly fb = inject(FormBuilder);

  adjustmentTypes = [

    'Bank Charges',

    'Interest Income',

    'Cheque Bounce',

    'Outstanding Deposit',

    'Outstanding Cheque',

    'Duplicate Entry',

    'Correction Entry',

    'Other'

  ];

  form = this.fb.nonNullable.group({

    bankAccount: [
      '',
      Validators.required
    ],

    adjustmentType: [
      '',
      Validators.required
    ],

    transactionDate: [
      '',
      Validators.required
    ],

    referenceNumber: [
      ''
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

    adjustmentReason: [
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
      'Reconciliation Adjustment',
      this.form.getRawValue()
    );

    // TODO
    // TreasuryService.createAdjustment()

    this.close.emit(true);

  }

  cancel(): void {

    this.close.emit(false);

  }

}