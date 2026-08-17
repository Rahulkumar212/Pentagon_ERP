import {
  Component,
  Input
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';


// =====================================================
// PAYMENT HISTORY TYPE
// =====================================================

export interface PaymentHistory {

  id: number;

  paymentDate: string;

  amount: number;

  paymentMode: string;

  transactionReference?: string;

  status: 'SUCCESS' | 'PENDING' | 'FAILED';

  remarks?: string;

}


@Component({
  selector: 'app-payment-history',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './payment-history.component.html'
})
export class PaymentHistoryComponent {

  // =====================================================
  // INPUT
  // =====================================================

  @Input()
  payments: PaymentHistory[] = [];


  // =====================================================
  // FORMAT AMOUNT
  // =====================================================

  formatAmount(
    amount: number
  ): string {

    return amount.toLocaleString(
      'en-IN',
      {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }
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
        return 'Success';

      case 'PENDING':
        return 'Pending';

      case 'FAILED':
        return 'Failed';

      default:
        return status;

    }

  }

}