import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
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
import { InvoiceService } from '../../../../../core/services/finance/invoice.service';

import {
  UpdateInvoicePayload
} from '../../../../../core/models/finance/invoice.model';

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

  @Input()
  invoice: any;

  @Output()
  close = new EventEmitter<boolean>();

  account = new FormControl(
    '',
    Validators.required
  );

  bankAccounts: any[] = [];

  loading = false;

  isSubmitting = false;

  constructor(
    private readonly bankAccountService: BankAccountService,
    private readonly invoiceService: InvoiceService,
    private readonly cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.loadBankAccounts();

  }

  loadBankAccounts(): void {

    this.loading = true;

    this.bankAccountService
      .getBankAccounts()
      .subscribe({

        next: (response: any) => {

          this.bankAccounts = response.data ?? [];

          this.loading = false;

          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(
            'Failed to load bank accounts',
            error
          );

          this.loading = false;

          this.cdr.detectChanges();

        }

      });

  }

  processDeposit(): void {

    if (this.account.invalid) {

      this.account.markAsTouched();

      return;

    }

    this.isSubmitting = true;

    const payload: UpdateInvoicePayload = {

      status: 'Paid',

      bankAccount: this.account.value!

    };

    this.invoiceService
      .updateInvoice(
        this.invoice.id,
        payload
      )
      .subscribe({

        next: (response: any) => {

          console.log(
            'Invoice Updated Successfully',
            response
          );

          this.isSubmitting = false;

          this.close.emit(true);

        },

        error: (error) => {

          console.error(
            'Failed to update invoice',
            error
          );

          this.isSubmitting = false;

          this.cdr.detectChanges();

        }

      });

  }

  cancel(): void {

    this.close.emit(false);

  }

}