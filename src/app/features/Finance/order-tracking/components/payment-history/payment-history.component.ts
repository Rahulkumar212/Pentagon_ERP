import {
  Component,
  Input
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  Order,
  PaymentHistory
} from '../../../../../core/models/finance/order-tracking.model';


@Component({

  selector:
    'app-payment-history',

  standalone:
    true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './payment-history.component.html'

})
export class PaymentHistoryComponent {


  // =====================================================
  // INPUTS
  // =====================================================

  @Input()
  order:
    Order | null = null;


  @Input()
  payments:
    PaymentHistory[] = [];


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
            Number(item.quantity || 0) *
            Number(item.unitPrice || 0)
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

    if (!this.order) {

      return this.payments
        .filter(
          payment =>
            payment.status === 'SUCCESS'
        )
        .reduce(

          (
            total,
            payment
          ) =>
            total +
            Number(payment.amount || 0),

          0

        );

    }

    return Number(
      this.order.receivedAmount || 0
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
      Number(amount || 0)
    );

  }


  // =====================================================
  // PAYMENT STATUS
  // =====================================================

  getStatusLabel(
    status: PaymentHistory['status']
  ): string {

    switch (status) {

      case 'SUCCESS':
        return 'Successful';

      case 'PENDING':
        return 'Pending';

      case 'FAILED':
        return 'Failed';

      default:
        return status;

    }

  }


  // =====================================================
  // PAYMENT STATUS CLASS
  // =====================================================

  getStatusClass(
    status: PaymentHistory['status']
  ): string {

    switch (status) {

      case 'SUCCESS':

        return `
          border-emerald-200
          bg-emerald-50
          text-emerald-700
        `;


      case 'PENDING':

        return `
          border-amber-200
          bg-amber-50
          text-amber-700
        `;


      case 'FAILED':

        return `
          border-red-200
          bg-red-50
          text-red-600
        `;


      default:

        return `
          border-slate-200
          bg-slate-50
          text-slate-600
        `;

    }

  }


  // =====================================================
  // PAYMENT MODE LABEL
  // =====================================================

  getPaymentModeLabel(
    payment: PaymentHistory
  ): string {

    return payment.paymentMode ||
      'Payment';

  }


  // =====================================================
  // GET ORDER SUBTOTAL
  // =====================================================

  getItemSubtotal(
    quantity: number,
    unitPrice: number
  ): number {

    return (
      Number(quantity || 0) *
      Number(unitPrice || 0)
    );

  }

}