import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  OnInit
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

export interface BankAccount {

  id: number;

  type: string;

  name: string;

  accountNo: string;

  balance: number;

}

@Component({
  selector: 'app-add-bank-account',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-bank-account.component.html'
})
export class AddBankAccountComponent implements OnInit {

    
  @Input()
  bank: BankAccount | null = null;

  @Output()
  close = new EventEmitter<void>();

  private readonly fb = inject(FormBuilder);

  banks = [
    'State Bank of India',
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'Punjab National Bank',
    'Kotak Mahindra Bank',
    'Yes Bank',
    'Bank of Baroda'
  ];

  accountTypes = [
    'Current Account',
    'Savings Account',
    'Salary Account',
    'Escrow Account',
    'Cash Credit Account'
  ];

  form = this.fb.nonNullable.group({

    bankName: [
      '',
      Validators.required
    ],

    accountName: [
      '',
      Validators.required
    ],

    accountNumber: [
      '',
      [
        Validators.required,
        Validators.minLength(8)
      ]
    ],

    ifscCode: [
      '',
      Validators.required
    ],

    branch: [
      '',
      Validators.required
    ],

    accountType: [
      '',
      Validators.required
    ],

    openingBalance: [
      0,
      [
        Validators.required,
        Validators.min(0)
      ]
    ],

    currency: [
      'INR',
      Validators.required
    ],

    remarks: [
      ''
    ]

  });

  ngOnInit(): void {

    if (!this.bank) {

      return;

    }

    this.form.patchValue({

      bankName: this.bank.name,

      accountName: this.bank.name,

      accountNumber: this.bank.accountNo

    });

  }

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    console.log(
      'Bank Account',
      this.form.getRawValue()
    );

    // TODO:
    // TreasuryService.saveBankAccount()

    this.close.emit();

  }

  cancel(): void {

    this.close.emit();

  }

}