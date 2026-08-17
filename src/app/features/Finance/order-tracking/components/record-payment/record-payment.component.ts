import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';


@Component({
  selector: 'app-record-payment',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './record-payment.component.html'
})
export class RecordPaymentComponent {

  // =====================================================
  // OUTPUTS
  // =====================================================

  @Output()
  close =
    new EventEmitter<void>();

  @Output()
  saved =
    new EventEmitter<any>();


  // =====================================================
  // STATE
  // =====================================================

  isSubmitting = false;


  // =====================================================
  // FORM
  // =====================================================

  paymentDate = '';

  paymentAmount: number | null = null;

  paymentMode = '';

  transactionReference = '';

  remarks = '';


  // =====================================================
  // PAYMENT MODES
  // =====================================================

  readonly paymentModes = [
    'Cash',
    'Bank Transfer',
    'Cheque',
    'UPI',
    'Credit Card',
    'Debit Card',
    'Other'
  ];


  // =====================================================
  // SUBMIT
  // =====================================================

  onSubmit(): void {

    if (
      !this.paymentDate ||
      !this.paymentAmount ||
      this.paymentAmount <= 0 ||
      !this.paymentMode
    ) {

      return;
    }


    const payload = {

      paymentDate:
        this.paymentDate,

      paymentAmount:
        Number(this.paymentAmount),

      paymentMode:
        this.paymentMode,

      transactionReference:
        this.transactionReference.trim(),

      remarks:
        this.remarks.trim()

    };


    console.log(
      'Payment Payload:',
      payload
    );


    this.isSubmitting = true;


    // ---------------------------------------------------
    // API integration yahan add hogi
    // ---------------------------------------------------

    setTimeout(() => {

      this.isSubmitting = false;

      this.saved.emit(
        payload
      );

      this.resetForm();

      this.close.emit();

    }, 500);

  }


  // =====================================================
  // CANCEL
  // =====================================================

  onCancel(): void {

    this.close.emit();

  }


  // =====================================================
  // RESET
  // =====================================================

  private resetForm(): void {

    this.paymentDate = '';

    this.paymentAmount = null;

    this.paymentMode = '';

    this.transactionReference = '';

    this.remarks = '';

  }

}