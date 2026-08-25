import { CommonModule } from '@angular/common';

import {
  Component
} from '@angular/core';

import {
  FormsModule
} from '@angular/forms';


// =====================================================
// RECONCILIATION STATUS
// =====================================================

type ReconciliationStatus =
  | 'Reconciled'
  | 'Pending'
  | 'Mismatch';


// =====================================================
// RECONCILIATION MODEL
// =====================================================

interface PayrollReconciliationItem {

  id: number;

  payrollId: string;

  employeeCode: string;

  employeeName: string;

  payrollAmount: number;

  bankAmount: number | null;

  difference: number;

  bankReference: string | null;

  status: ReconciliationStatus;

}


// =====================================================
// COMPONENT
// =====================================================

@Component({

  selector:
    'app-payroll-reconciliation',

  standalone:
    true,

  imports: [

    CommonModule,

    FormsModule

  ],

  templateUrl:
    './payroll-reconciliation.component.html'

})
export class PayrollReconciliationComponent {


  // ===================================================
  // FILTER
  // ===================================================

  selectedStatus:
    'All' | ReconciliationStatus = 'All';


  readonly statuses:
    Array<'All' | ReconciliationStatus> = [

      'All',

      'Reconciled',

      'Pending',

      'Mismatch'

    ];


  // ===================================================
  // RECONCILIATION DATA
  // ===================================================

  readonly records:
    PayrollReconciliationItem[] = [

      {

        id: 1,

        payrollId:
          'PAY-2026-00124',

        employeeCode:
          'EMP-1001',

        employeeName:
          'Aarav Sharma',

        payrollAmount:
          78500,

        bankAmount:
          78500,

        difference:
          0,

        bankReference:
          'HDFC-UTR-784521',

        status:
          'Reconciled'

      },


      {

        id: 2,

        payrollId:
          'PAY-2026-00125',

        employeeCode:
          'EMP-1002',

        employeeName:
          'Priya Verma',

        payrollAmount:
          92400,

        bankAmount:
          92400,

        difference:
          0,

        bankReference:
          'HDFC-UTR-784522',

        status:
          'Reconciled'

      },


      {

        id: 3,

        payrollId:
          'PAY-2026-00126',

        employeeCode:
          'EMP-1003',

        employeeName:
          'Rohan Mehta',

        payrollAmount:
          68500,

        bankAmount:
          null,

        difference:
          68500,

        bankReference:
          null,

        status:
          'Pending'

      },


      {

        id: 4,

        payrollId:
          'PAY-2026-00127',

        employeeCode:
          'EMP-1004',

        employeeName:
          'Neha Kapoor',

        payrollAmount:
          112000,

        bankAmount:
          111500,

        difference:
          500,

        bankReference:
          'AXIS-UTR-982341',

        status:
          'Mismatch'

      },


      {

        id: 5,

        payrollId:
          'PAY-2026-00128',

        employeeCode:
          'EMP-1005',

        employeeName:
          'Vikram Singh',

        payrollAmount:
          54800,

        bankAmount:
          54800,

        difference:
          0,

        bankReference:
          'HDFC-FAILED-4421',

        status:
          'Reconciled'

      },


      {

        id: 6,

        payrollId:
          'PAY-2026-00129',

        employeeCode:
          'EMP-1006',

        employeeName:
          'Ananya Gupta',

        payrollAmount:
          87500,

        bankAmount:
          87500,

        difference:
          0,

        bankReference:
          'ICICI-UTR-562314',

        status:
          'Reconciled'

      },


      {

        id: 7,

        payrollId:
          'PAY-2026-00130',

        employeeCode:
          'EMP-1007',

        employeeName:
          'Karan Malhotra',

        payrollAmount:
          96500,

        bankAmount:
          null,

        difference:
          96500,

        bankReference:
          null,

        status:
          'Pending'

      }

    ];


  // ===================================================
  // FILTERED RECORDS
  // ===================================================

  filteredRecords:
    PayrollReconciliationItem[] =
      this.records;


  // ===================================================
  // APPLY FILTER
  // ===================================================

  applyFilter(): void {

    if (
      this.selectedStatus === 'All'
    ) {

      this.filteredRecords =
        this.records;

      return;

    }


    this.filteredRecords =
      this.records.filter(

        record =>
          record.status ===
          this.selectedStatus

      );

  }


  // ===================================================
  // RESET FILTER
  // ===================================================

  resetFilter(): void {

    this.selectedStatus =
      'All';

    this.filteredRecords =
      this.records;

  }


  // ===================================================
  // RECONCILE PAYMENT
  // ===================================================

  reconcile(
    record: PayrollReconciliationItem
  ): void {

    if (
      record.bankAmount === null
    ) {

      console.log(
        'Bank transaction not found:',
        record.payrollId
      );

      return;

    }


    if (
      record.bankAmount ===
      record.payrollAmount
    ) {

      record.difference =
        0;

      record.status =
        'Reconciled';

      return;

    }


    record.difference =
      record.payrollAmount -
      record.bankAmount;

    record.status =
      'Mismatch';

  }


  // ===================================================
  // RECONCILED COUNT
  // ===================================================

  get reconciledCount(): number {

    return this.filteredRecords.filter(

      record =>
        record.status ===
        'Reconciled'

    ).length;

  }


  // ===================================================
  // PENDING COUNT
  // ===================================================

  get pendingCount(): number {

    return this.filteredRecords.filter(

      record =>
        record.status ===
        'Pending'

    ).length;

  }


  // ===================================================
  // MISMATCH COUNT
  // ===================================================

  get mismatchCount(): number {

    return this.filteredRecords.filter(

      record =>
        record.status ===
        'Mismatch'

    ).length;

  }


  // ===================================================
  // TOTAL DIFFERENCE
  // ===================================================

  get totalDifference(): number {

    return this.filteredRecords.reduce(

      (
        total,
        record
      ) =>

        total +
        record.difference,

      0

    );

  }

}