import { CommonModule } from '@angular/common';

import {
  Component
} from '@angular/core';

import {
  FormsModule
} from '@angular/forms';


// =====================================================
// PAYMENT STATUS
// =====================================================

type PaymentStatus =
  | 'Completed'
  | 'Pending'
  | 'Failed';


// =====================================================
// PAYMENT MODEL
// =====================================================

interface PaymentHistoryItem {

  id: number;

  paymentId: string;

  employeeCode: string;

  employeeName: string;

  payrollMonth: string;

  paymentDate: string;

  bank: string;

  amount: number;

  status: PaymentStatus;

  reference: string;

}


// =====================================================
// COMPONENT
// =====================================================

@Component({

  selector:
    'app-payment-history',

  standalone:
    true,

  imports: [

    CommonModule,

    FormsModule

  ],

  templateUrl:
    './payment-history.component.html'

})
export class PaymentHistoryComponent {


  // ===================================================
  // STATUS FILTER
  // ===================================================

  selectedStatus:
    'All' | PaymentStatus = 'All';


  readonly statuses:
    Array<'All' | PaymentStatus> = [

      'All',

      'Completed',

      'Pending',

      'Failed'

    ];


  // ===================================================
  // PAYMENT DATA
  // ===================================================

  readonly payments:
    PaymentHistoryItem[] = [

      {

        id: 1,

        paymentId:
          'PAY-2026-00124',

        employeeCode:
          'EMP-1001',

        employeeName:
          'Aarav Sharma',

        payrollMonth:
          'June 2026',

        paymentDate:
          '30 Jun 2026',

        bank:
          'HDFC Corporate Checking',

        amount:
          78500,

        status:
          'Completed',

        reference:
          'HDFC-UTR-784521'

      },


      {

        id: 2,

        paymentId:
          'PAY-2026-00125',

        employeeCode:
          'EMP-1002',

        employeeName:
          'Priya Verma',

        payrollMonth:
          'June 2026',

        paymentDate:
          '30 Jun 2026',

        bank:
          'HDFC Corporate Checking',

        amount:
          92400,

        status:
          'Completed',

        reference:
          'HDFC-UTR-784522'

      },


      {

        id: 3,

        paymentId:
          'PAY-2026-00126',

        employeeCode:
          'EMP-1003',

        employeeName:
          'Rohan Mehta',

        payrollMonth:
          'June 2026',

        paymentDate:
          '30 Jun 2026',

        bank:
          'ICICI Payroll Account',

        amount:
          68500,

        status:
          'Pending',

        reference:
          'ICICI-PENDING-1256'

      },


      {

        id: 4,

        paymentId:
          'PAY-2026-00127',

        employeeCode:
          'EMP-1004',

        employeeName:
          'Neha Kapoor',

        payrollMonth:
          'June 2026',

        paymentDate:
          '30 Jun 2026',

        bank:
          'Axis Salary Disbursement',

        amount:
          112000,

        status:
          'Completed',

        reference:
          'AXIS-UTR-982341'

      },


      {

        id: 5,

        paymentId:
          'PAY-2026-00128',

        employeeCode:
          'EMP-1005',

        employeeName:
          'Vikram Singh',

        payrollMonth:
          'June 2026',

        paymentDate:
          '30 Jun 2026',

        bank:
          'HDFC Corporate Checking',

        amount:
          54800,

        status:
          'Failed',

        reference:
          'HDFC-FAILED-4421'

      },


      {

        id: 6,

        paymentId:
          'PAY-2026-00129',

        employeeCode:
          'EMP-1006',

        employeeName:
          'Ananya Gupta',

        payrollMonth:
          'June 2026',

        paymentDate:
          '30 Jun 2026',

        bank:
          'ICICI Payroll Account',

        amount:
          87500,

        status:
          'Completed',

        reference:
          'ICICI-UTR-562314'

      }

    ];


  // ===================================================
  // FILTERED PAYMENTS
  // ===================================================

  filteredPayments:
    PaymentHistoryItem[] = this.payments;


  // ===================================================
  // APPLY FILTER
  // ===================================================

  applyFilters(): void {

    if (
      this.selectedStatus === 'All'
    ) {

      this.filteredPayments =
        this.payments;

      return;

    }


    this.filteredPayments =
      this.payments.filter(

        payment =>
          payment.status ===
          this.selectedStatus

      );

  }


  // ===================================================
  // RESET FILTER
  // ===================================================

  resetFilters(): void {

    this.selectedStatus =
      'All';

    this.filteredPayments =
      this.payments;

  }


  // ===================================================
  // SUCCESSFUL COUNT
  // ===================================================

  get successfulCount(): number {

    return this.filteredPayments.filter(

      payment =>
        payment.status ===
        'Completed'

    ).length;

  }


  // ===================================================
  // PENDING COUNT
  // ===================================================

  get pendingCount(): number {

    return this.filteredPayments.filter(

      payment =>
        payment.status ===
        'Pending'

    ).length;

  }


  // ===================================================
  // TOTAL PAID
  // ===================================================

  get totalPaid(): number {

    return this.filteredPayments

      .filter(

        payment =>
          payment.status ===
          'Completed'

      )

      .reduce(

        (
          total,
          payment
        ) =>

          total +
          payment.amount,

        0

      );

  }

}