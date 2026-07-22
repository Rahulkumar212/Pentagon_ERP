import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-settlement-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './settlement-modal.component.html'
})
export class SettlementModalComponent {

  @Output()
  close = new EventEmitter<void>();

  form: FormGroup;

  bankAccounts = [

    'HDFC Corporate Checking (Balance: ₹340,800)',

    'ICICI Business Account (Balance: ₹180,500)',

    'Axis Operating Account (Balance: ₹92,600)'

  ];

  constructor(
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({

      invoiceRef: ['BILL-503'],

      supplier: ['BlueSky Office Rentals'],

      liability: ['₹12,000'],

      bankAccount: [
        this.bankAccounts[0],
        Validators.required
      ]

    });

  }

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    console.log(this.form.value);

    this.close.emit();

  }

  cancel(): void {

    this.close.emit();

  }

}