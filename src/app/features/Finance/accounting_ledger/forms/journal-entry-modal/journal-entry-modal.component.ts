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

import { JournalEntryService } from '../../../../../core/services/finance/journal-entry.service';

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

  form!: FormGroup;

  isSubmitting = false;

  selectedFile: File | null = null;

 accounts = [

  // ==========================
  // Bank Accounts
  // ==========================

  'ICICI Bank-CA(Pentagon)',
  'ICICI Bank-OD(Pentagon)',
  'IndusInd Bank-CA(Smart)',
  'IndusInd Bank-CA(Pentagon)',
  'ICICI Bank-CA(SEST)',

  // ==========================
  // Cash
  // ==========================

  'Cash In Hand',

  // ==========================
  // Assets
  // ==========================

  'Accounts Receivable',

  // ==========================
  // Liabilities
  // ==========================

  'Accounts Payable',
  'TDS Payable',
  'PF Payable',

  // ==========================
  // Revenue
  // ==========================

  'Software License Sales',
  'Consulting Revenue',

  // ==========================
  // Expenses
  // ==========================

  'Rent Expense',
  'Software Subscription',
  'Electricity Expense',
  'Salary Expense'

];

  constructor(
    private readonly fb: FormBuilder,
    private readonly journalEntryService: JournalEntryService
  ) {

    this.form = this.fb.group({

      voucherNo: [
        this.generateVoucherNo(),
        Validators.required
      ],

      journalDate: [
        new Date().toISOString().substring(0, 10),
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

  private generateVoucherNo(): string {

    const now = new Date();

    const random = Math.floor(
      1000 + Math.random() * 9000
    );

    return `JV-${now.getFullYear()}${(now.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${random}`;

  }

  onFileSelected(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    if (
      input.files &&
      input.files.length > 0
    ) {

      this.selectedFile =
        input.files[0];

    }

  }

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    if (
      this.form.value.debitAccount ===
      this.form.value.creditAccount
    ) {

      alert(
        'Debit Account and Credit Account cannot be the same.'
      );

      return;

    }

    this.isSubmitting = true;

    const value = this.form.getRawValue();

    const formData = new FormData();

    formData.append(
      'voucherNo',
      value.voucherNo
    );

    formData.append(
      'journalDate',
      value.journalDate
    );

    formData.append(
      'reference',
      value.reference ?? ''
    );

    formData.append(
      'description',
      value.description
    );

    formData.append(
      'debitAccount',
      value.debitAccount
    );

    formData.append(
      'creditAccount',
      value.creditAccount
    );

    formData.append(
      'amount',
      value.amount.toString()
    );

    formData.append(
      'narration',
      value.narration ?? ''
    );

    formData.append(
      'postImmediately',
      value.postImmediately.toString()
    );

    if (this.selectedFile) {

      formData.append(
        'attachment',
        this.selectedFile
      );

    }

    this.journalEntryService
      .createJournalEntry(formData)
      .subscribe({

        next: (response) => {

          console.log(
            'Journal Entry Created',
            response
          );

          this.isSubmitting = false;

          this.selectedFile = null;

          this.form.reset({

            voucherNo:
              this.generateVoucherNo(),

            journalDate:
              new Date()
                .toISOString()
                .substring(0, 10),

            reference: '',

            description: '',

            debitAccount: '',

            creditAccount: '',

            amount: 0,

            narration: '',

            attachment: '',

            postImmediately: true

          });

          this.close.emit();

        },

        error: (error) => {

          console.error(
            'Failed to create Journal Entry',
            error
          );

          this.isSubmitting = false;

        }

      });

  }

  closeModal(): void {

    this.close.emit();

  }

}