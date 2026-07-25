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
  selector: 'app-journal-entry-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './journal-entry-modal.component.html'
})
export class JournalEntryModalComponent {

  @Output()
  close = new EventEmitter<void>();

  @Output()
  save = new EventEmitter<any>();

  form!: FormGroup;

  accounts = [

    'Cash In Hand',

    'HDFC Corporate Checking',

    'Silicon Valley Operating',

    'Accounts Receivable',

    'Accounts Payable',

    'Software License Sales',

    'Consulting Revenue',

    'Rent Expense',

    'Software Subscription',

    'Electricity Expense',

    'Salary Expense',

    'TDS Payable',

    'PF Payable'

  ];

  constructor(
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({

      voucherNo: [
        '',
        Validators.required
      ],

      journalDate: [
        '',
        Validators.required
      ],

      reference: [''],

      description: [
        '',
        Validators.required
      ],

      debitAccount: [
        '',
        Validators.required
      ],

      creditAccount: [
        '',
        Validators.required
      ],

      amount: [
        0,
        [
          Validators.required,
          Validators.min(1)
        ]
      ],

      narration: [''],

      attachment: [''],

      postImmediately: [true]

    });

  }

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    // Debit aur Credit account same nahi hone chahiye
    if (
      this.form.value.debitAccount ===
      this.form.value.creditAccount
    ) {

      alert('Debit Account and Credit Account cannot be the same.');

      return;

    }

    this.save.emit(this.form.value);

  }

  closeModal(): void {

    this.close.emit();

  }

}