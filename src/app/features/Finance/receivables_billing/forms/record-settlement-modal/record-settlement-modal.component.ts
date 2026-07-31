import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import {
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { BankAccountService } from '../../../../../core/services/finance/bank-account.service';

@Component({
  selector: 'app-record-settlement-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './record-settlement-modal.component.html'
})
export class RecordSettlementModalComponent implements OnInit {

  @Input() invoice: any;

  @Output() close =
    new EventEmitter<void>();

  account =
    new FormControl(
      '',
      Validators.required
    );

  bankAccounts: any[] = [];

  loading = false;

  constructor(
    private readonly bankAccountService: BankAccountService
  ) {}

  ngOnInit(): void {

    this.loadBankAccounts();

  }

  loadBankAccounts(): void {

    this.loading = true;

    this.bankAccountService
      .getBankAccounts()
      .subscribe({

        next: (response: any) => {

          this.bankAccounts =
            response.data ?? [];

          console.log(
            'Bank Accounts',
            this.bankAccounts
          );

          this.loading = false;

        },

        error: (error) => {

          console.error(
            'Failed to load bank accounts',
            error
          );

          this.loading = false;

        }

      });

  }

  processDeposit(): void {

    if (this.account.invalid) {

      this.account.markAsTouched();

      return;

    }

    console.log(
      'Selected Bank Account',
      this.account.value
    );

  }

  cancel(): void {

    this.close.emit();

  }

}