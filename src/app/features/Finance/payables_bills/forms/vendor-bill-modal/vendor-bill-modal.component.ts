import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
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

import { IncomingBillService } from '../../../../../core/services/finance/incoming-bill.service';
import { CreateIncomingBillPayload } from '../../../../../core/models/finance/incoming-bill.model';

@Component({
  selector: 'app-vendor-bill-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './vendor-bill-modal.component.html'
})
export class VendorBillModalComponent {

  @Output()
  close = new EventEmitter<boolean>();

  form: FormGroup;

  isSubmitting = false;

  categories = [

    'Software Subscriptions',

    'Utilities',

    'Office Rent',

    'Office Supplies',

    'Travel',

    'Logistics',

    'Marketing',

    'Professional Services'

  ];

  constructor(
    private readonly fb: FormBuilder,
    private readonly incomingBillService: IncomingBillService,
    private readonly cdr: ChangeDetectorRef
  ) {

    this.form = this.fb.group({

      vendor: [
        '',
        Validators.required
      ],

      dueDate: [
        '',
        Validators.required
      ],

      category: [
        'Software Subscriptions',
        Validators.required
      ],

      amount: [
        '',
        [
          Validators.required,
          Validators.min(1)
        ]
      ]

    });

  }

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    this.isSubmitting = true;

    const payload: CreateIncomingBillPayload = {

      vendor: this.form.value.vendor,

      dueDate: this.form.value.dueDate,

      costCategory: this.form.value.category,

      invoiceValue: this.form.value.amount.toString()

    };

    this.incomingBillService
      .createIncomingBill(payload)
      .subscribe({

        next: (response) => {

          console.log(
            'Incoming Bill Created Successfully',
            response
          );

          this.isSubmitting = false;

          this.close.emit(true);

        },

        error: (error) => {

          console.error(
            'Failed to create incoming bill',
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