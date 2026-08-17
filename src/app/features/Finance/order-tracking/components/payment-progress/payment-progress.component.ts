import {
  Component,
  Input
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';


@Component({
  selector: 'app-payment-progress',
  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './payment-progress.component.html'
})
export class PaymentProgressComponent {

  // =====================================================
  // INPUTS
  // =====================================================

  @Input()
  totalAmount = 0;

  @Input()
  paidAmount = 0;


  // =====================================================
  // PAYMENT PERCENTAGE
  // =====================================================

  get paymentPercentage(): number {

    if (
      this.totalAmount <= 0
    ) {

      return 0;

    }

    const percentage =
      (this.paidAmount / this.totalAmount) * 100;

    return Math.min(
      Math.max(percentage, 0),
      100
    );

  }


  // =====================================================
  // REMAINING AMOUNT
  // =====================================================

  get remainingAmount(): number {

    return Math.max(
      this.totalAmount - this.paidAmount,
      0
    );

  }


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

}