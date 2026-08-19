import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';


// =====================================================
// MODELS
// =====================================================

import {
  Order,
  PaymentHistory
} from '../../../../../core/models/finance/order-tracking.model';


// =====================================================
// COMPONENT
// =====================================================

@Component({

  selector:
    'app-record-payment-form',

  standalone:
    true,

  imports: [

    CommonModule,

    FormsModule

  ],

  templateUrl:
    './record-payment-form.component.html'

})
export class RecordPaymentFormComponent
  implements OnChanges {


  // =====================================================
  // INPUT
  // =====================================================

  @Input()
  order:
    Order | null = null;


  // =====================================================
  // OUTPUTS
  // =====================================================

  @Output()
  close =
    new EventEmitter<void>();


  @Output()
  saved =
    new EventEmitter<PaymentHistory>();


  // =====================================================
  // FORM DATA
  // =====================================================

  paymentAmount:
    number = 0;


  depositBankAccount:
    string =
      'HDFC Corporate Checking (₹83,245)';


  paymentMode:
    string =
      'Bank Transfer (NEFT/RTGS/IMPS)';


  referenceNumber:
    string =
      '';


  paymentNotes:
    string =
      '';


  // =====================================================
  // BANK ACCOUNTS
  // =====================================================

  bankAccounts:
    string[] = [

      'HDFC Corporate Checking (₹83,245)',

      'ICICI Business Account (₹1,24,500)',

      'SBI Current Account (₹2,45,800)'

    ];


  // =====================================================
  // PAYMENT MODES
  // =====================================================

  paymentModes:
    string[] = [

      'Bank Transfer (NEFT/RTGS/IMPS)',

      'UPI',

      'Cheque',

      'Cash'

    ];


  // =====================================================
  // INPUT CHANGE
  // =====================================================

  ngOnChanges(
    changes: SimpleChanges
  ): void {

    if (
      changes['order'] &&
      this.order
    ) {

      this.paymentAmount =
        this.getBalanceDue();


      this.referenceNumber =
        '';


      this.paymentNotes =
        `Payment for ${this.order.orderNumber}`;

    }

  }


  // =====================================================
  // TOTAL AMOUNT
  // =====================================================

  getTotalAmount(): number {

    if (!this.order) {

      return 0;

    }


    return this.order.items.reduce(

      (
        total: number,
        item
      ) => {

        return (
          total +
          (
            Number(item.quantity) *
            Number(item.unitPrice)
          )
        );

      },

      0

    );

  }


  // =====================================================
  // RECEIVED AMOUNT
  // =====================================================

  getReceivedAmount(): number {

    return (
      this.order?.receivedAmount ||
      0
    );

  }


  // =====================================================
  // BALANCE DUE
  // =====================================================

  getBalanceDue(): number {

    return Math.max(

      0,

      this.getTotalAmount() -
      this.getReceivedAmount()

    );

  }


  // =====================================================
  // PAYMENT PERCENTAGE
  // =====================================================

  getPaymentPercentage(): number {

    const total =
      this.getTotalAmount();


    const received =
      this.getReceivedAmount();


    if (
      total <= 0
    ) {

      return 0;

    }


    return Math.min(

      100,

      Math.round(

        (
          received /
          total
        ) * 100

      )

    );

  }


  // =====================================================
  // FORMAT AMOUNT
  // =====================================================

  formatAmount(
    amount: number
  ): string {

    return new Intl.NumberFormat(

      'en-IN',

      {

        style:
          'currency',

        currency:
          'INR',

        maximumFractionDigits:
          0

      }

    ).format(
      amount || 0
    );

  }


  // =====================================================
  // HALF PAYMENT
  // =====================================================

  setHalfPayment(): void {

    this.paymentAmount =
      Math.round(

        this.getBalanceDue() /
        2

      );

  }


  // =====================================================
  // FULL PAYMENT
  // =====================================================

  setFullPayment(): void {

    this.paymentAmount =
      this.getBalanceDue();

  }


  // =====================================================
  // VALIDATION
  // =====================================================

  isValidPayment(): boolean {

    const amount =
      Number(
        this.paymentAmount
      );


    const balance =
      this.getBalanceDue();


    return (

      !!this.order &&

      amount > 0 &&

      amount <= balance &&

      !!this.depositBankAccount &&

      !!this.paymentMode

    );

  }


  // =====================================================
  // CLOSE FORM
  // =====================================================

  onClose(): void {

    this.close.emit();

  }


  // =====================================================
  // SUBMIT FORM
  // =====================================================

  onSubmit(): void {

    if (
      !this.isValidPayment()
    ) {

      return;

    }


    if (!this.order) {

      return;

    }


    const payment:
      PaymentHistory = {

      id:
        Date.now(),

      orderId:
        this.order.id,

      paymentDate:
        this.getCurrentDate(),

      amount:
        Number(
          this.paymentAmount
        ),

      paymentMode:
        this.paymentMode,

      transactionReference:
        this.referenceNumber.trim(),

      status:
        'SUCCESS'

    };


    this.saved.emit(
      payment
    );

  }


  // =====================================================
  // CURRENT DATE
  // =====================================================

  private getCurrentDate(): string {

    return new Intl.DateTimeFormat(

      'en-IN',

      {

        day:
          '2-digit',

        month:
          'short',

        year:
          'numeric'

      }

    ).format(
      new Date()
    );

  }

}