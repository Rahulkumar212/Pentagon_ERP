import { CommonModule } from '@angular/common';

import {
  Component,
  computed
} from '@angular/core';


// =====================================================
// PAYMENT STATUS
// =====================================================

type PaymentStatus =
  | 'Pending'
  | 'Processing'
  | 'Paid'
  | 'Failed';


// =====================================================
// SALARY PAYMENT MODEL
// =====================================================

interface SalaryPayment {

  id: number;

  employeeCode: string;

  employeeName: string;

  netSalary: number;

  paymentReference: string;

  paymentDate: string;

  status: PaymentStatus;

}


// =====================================================
// COMPONENT
// =====================================================

@Component({

  selector:
    'app-salary-payment',

  standalone:
    true,

  imports: [

    CommonModule

  ],

  templateUrl:
    './salary-payment.component.html'

})
export class SalaryPaymentComponent {


  // =====================================================
  // SELECTED BANK
  // =====================================================

  selectedBank =
    'HDFC Corporate Checking';


  // =====================================================
  // SALARY PAYMENTS
  // =====================================================

  readonly payments: SalaryPayment[] = [

    {

      id: 1,

      employeeCode: 'EMP-1001',

      employeeName: 'Aarav Sharma',

      netSalary: 78500,

      paymentReference: 'SAL-AUG-1001',

      paymentDate: '31 Aug 2026',

      status: 'Paid'

    },


    {

      id: 2,

      employeeCode: 'EMP-1002',

      employeeName: 'Priya Verma',

      netSalary: 92500,

      paymentReference: 'SAL-AUG-1002',

      paymentDate: '31 Aug 2026',

      status: 'Paid'

    },


    {

      id: 3,

      employeeCode: 'EMP-1003',

      employeeName: 'Rohan Mehta',

      netSalary: 68500,

      paymentReference: 'SAL-AUG-1003',

      paymentDate: '31 Aug 2026',

      status: 'Pending'

    },


    {

      id: 4,

      employeeCode: 'EMP-1004',

      employeeName: 'Ananya Kapoor',

      netSalary: 112000,

      paymentReference: 'SAL-AUG-1004',

      paymentDate: '31 Aug 2026',

      status: 'Pending'

    },


    {

      id: 5,

      employeeCode: 'EMP-1005',

      employeeName: 'Vikram Singh',

      netSalary: 84500,

      paymentReference: 'SAL-AUG-1005',

      paymentDate: '31 Aug 2026',

      status: 'Processing'

    },


    {

      id: 6,

      employeeCode: 'EMP-1006',

      employeeName: 'Neha Gupta',

      netSalary: 73500,

      paymentReference: 'SAL-AUG-1006',

      paymentDate: '31 Aug 2026',

      status: 'Failed'

    },


    {

      id: 7,

      employeeCode: 'EMP-1007',

      employeeName: 'Aditya Rao',

      netSalary: 96500,

      paymentReference: 'SAL-AUG-1007',

      paymentDate: '31 Aug 2026',

      status: 'Pending'

    }

  ];


  // =====================================================
  // TOTAL SALARY
  // =====================================================

  readonly totalSalary = computed(() => {

    return this.payments.reduce(

      (total, payment) =>
        total + payment.netSalary,

      0

    );

  });


  // =====================================================
  // PENDING PAYMENTS
  // =====================================================

  readonly pendingPayments = computed(() => {

    return this.payments.filter(

      payment =>
        payment.status === 'Pending'

    ).length;

  });


  // =====================================================
  // PENDING AMOUNT
  // =====================================================

  readonly pendingAmount = computed(() => {

    return this.payments

      .filter(

        payment =>
          payment.status === 'Pending'

      )

      .reduce(

        (total, payment) =>
          total + payment.netSalary,

        0

      );

  });


  // =====================================================
  // PAID AMOUNT
  // =====================================================

  readonly paidAmount = computed(() => {

    return this.payments

      .filter(

        payment =>
          payment.status === 'Paid'

      )

      .reduce(

        (total, payment) =>
          total + payment.netSalary,

        0

      );

  });


  // =====================================================
  // PROCESS SINGLE PAYMENT
  // =====================================================

  processPayment(
    paymentId: number
  ): void {

    const payment =
      this.payments.find(

        item =>
          item.id === paymentId

      );

    if (!payment) {

      return;

    }


    if (

      payment.status !== 'Pending' &&

      payment.status !== 'Failed'

    ) {

      return;

    }


    payment.status =
      'Processing';


    console.log(

      `Processing salary payment ${payment.paymentReference} from ${this.selectedBank}`

    );


    // Demo simulation

    setTimeout(() => {

      payment.status =
        'Paid';

    }, 1000);

  }


  // =====================================================
  // PROCESS ALL PENDING PAYMENTS
  // =====================================================

  processAllPayments(): void {

    this.payments

      .filter(

        payment =>
          payment.status === 'Pending'

      )

      .forEach(

        payment => {

          this.processPayment(
            payment.id
          );

        }

      );

  }


  // =====================================================
  // CURRENCY FORMAT
  // =====================================================

  formatCurrency(
    value: number
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

      Number(value) || 0

    );

  }

}