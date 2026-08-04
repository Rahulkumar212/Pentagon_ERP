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
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { BankAccountService } from '../../../../../core/services/finance/bank-account.service';
import { IncomingBillService } from '../../../../../core/services/finance/incoming-bill.service';

import {
  UpdateIncomingBillPayload
} from '../../../../../core/models/finance/incoming-bill.model';

@Component({
  selector: 'app-settlement-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './settlement-modal.component.html'
})
export class SettlementModalComponent implements OnInit {

  @Input()
  bill: any;

  @Output()
  close = new EventEmitter<boolean>();

  form: FormGroup;

  bankAccounts: any[] = [];

  loading = false;

  isSubmitting = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly bankAccountService: BankAccountService,
    private readonly incomingBillService: IncomingBillService,
    private readonly cdr: ChangeDetectorRef
  ) {

    this.form = this.fb.group({

      invoiceRef: [''],

      supplier: [''],

      liability: [''],

      bankAccount: [
        '',
        Validators.required
      ]

    });

  }

  ngOnInit(): void {

    if (this.bill) {

      this.form.patchValue({

        invoiceRef: this.bill.id,

        supplier: this.bill.vendor,

        liability: `₹${this.bill.invoiceValue}`

      });

    }

    this.loadBankAccounts();

  }

  loadBankAccounts(): void {

    this.loading = true;

    this.bankAccountService
      .getBankAccounts()
      .subscribe({

        next: (response: any) => {

          this.bankAccounts = response.data ?? [];

          if (this.bankAccounts.length) {

            this.form.patchValue({

              bankAccount:
                this.bankAccounts[0].accountName

            });

          }

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

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    this.isSubmitting = true;

    const payload: UpdateIncomingBillPayload = {

      status: 'Paid',

      bankAccount: this.form.value.bankAccount

    };

    this.incomingBillService
      .updateIncomingBill(
        this.bill.id,
        payload
      )
      .subscribe({

        next: (response) => {

          console.log(
            'Incoming Bill Updated Successfully',
            response
          );

          this.isSubmitting = false;

          this.close.emit(true);

        },

        error: (error) => {

          console.error(
            'Failed to update incoming bill',
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