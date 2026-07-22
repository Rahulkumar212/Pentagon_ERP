import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

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

  constructor(
    private fb: FormBuilder
  ) {

    this.invoiceForm = this.fb.group({

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

  get items(): FormArray {

    return this.invoiceForm.get('items') as FormArray;

  }

  createRow(): FormGroup {

    return this.fb.group({

      description: [
        '',
        Validators.required
      ],

      quantity: [
        1,
        Validators.required
      ],

      price: [
        0,
        Validators.required
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

    return this.items.controls.reduce((total, control) => {

      const value = control.value;

      return total + (value.quantity * value.price);

    }, 0);

  }

  submit(): void {

    if (this.invoiceForm.invalid) {

      this.invoiceForm.markAllAsTouched();

      return;

    }

    console.log(this.invoiceForm.value);

    this.close.emit();

  }

  cancel(): void {

    this.close.emit();

  }

}