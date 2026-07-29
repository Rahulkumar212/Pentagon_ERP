import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { InvoiceService } from '../../../../../core/services/finance/invoice.service';

import {
  CreateInvoicePayload
} from '../../../../../core/models/finance/invoice.model';

@Component({
  selector: 'app-customer-invoice-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './customer-invoice-modal.component.html'
})
export class CustomerInvoiceModalComponent {

  @Output()
  close = new EventEmitter<void>();

  invoiceForm: FormGroup;

  isSubmitting = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly invoiceService: InvoiceService
  ) {

    this.invoiceForm = this.fb.group({

      invoiceId: [
        this.generateInvoiceId(),
        Validators.required
      ],

      customer: [
        '',
        Validators.required
      ],

      dueDate: [
        '',
        Validators.required
      ],

      items: this.fb.array([
        this.createRow()
      ])

    });

  }

  private generateInvoiceId(): string {

    const now = new Date();

    const year = now.getFullYear();

    const month = String(
      now.getMonth() + 1
    ).padStart(2, '0');

    const random = Math.floor(
      1000 + Math.random() * 9000
    );

    return `INV-${year}${month}-${random}`;

  }

  get items(): FormArray {

    return this.invoiceForm.get(
      'items'
    ) as FormArray;

  }

  createRow(): FormGroup {

    return this.fb.group({

      description: [
        '',
        Validators.required
      ],

      quantity: [
        1,
        [
          Validators.required,
          Validators.min(1)
        ]
      ],

      price: [
        0,
        [
          Validators.required,
          Validators.min(0)
        ]
      ]

    });

  }

  addRow(): void {

    this.items.push(
      this.createRow()
    );

  }

  removeRow(index: number): void {

    if (this.items.length > 1) {

      this.items.removeAt(index);

    }

  }

  getTotal(): number {

    return this.items.controls.reduce(
      (total, control) => {

        const value = control.value;

        return total +
          (Number(value.quantity) * Number(value.price));

      },
      0
    );

  }

  submit(): void {

    if (this.invoiceForm.invalid) {

      this.invoiceForm.markAllAsTouched();

      return;

    }

    this.isSubmitting = true;

    const payload: CreateInvoicePayload = {

      invoiceId: this.invoiceForm.value.invoiceId,

      customer: this.invoiceForm.value.customer,

      dueDate: this.invoiceForm.value.dueDate,

      totalAmount: this.getTotal(),

      items: this.invoiceForm.value.items

    };

    this.invoiceService
      .createInvoice(payload)
      .subscribe({

        next: (response) => {

          console.log(
            'Invoice Created',
            response
          );

          this.isSubmitting = false;

          this.invoiceForm.reset({

            invoiceId: this.generateInvoiceId(),

            customer: '',

            dueDate: ''

          });

          this.items.clear();

          this.items.push(
            this.createRow()
          );

          this.close.emit();

        },

        error: (error) => {

          console.error(
            'Failed to create invoice',
            error
          );

          this.isSubmitting = false;

        }

      });

  }

  cancel(): void {

    this.close.emit();

  }

}