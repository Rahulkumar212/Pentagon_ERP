import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  computed,
  signal
} from '@angular/core';

import { PayrollAdjustmentFormComponent } from '../../forms/payroll-adjustment-form/payroll-adjustment-form.component';

// =====================================================
// PAYROLL PROCESSING MODEL
// =====================================================

interface PayrollProcessingRecord {
  employeeId: string;
  employeeName: string;
  department: string;
  salaryMonth: string;
  grossSalary: number;
  deductions: number;
  netSalary: number;
  status:
    | 'Draft'
    | 'Processing'
    | 'Processed'
    | 'Failed';
}

// =====================================================
// COMPONENT
// =====================================================

@Component({
  selector: 'app-payroll-processing',
  standalone: true,

  imports: [
    CommonModule,
    PayrollAdjustmentFormComponent
  ],

  templateUrl: './payroll-processing.component.html'
})
export class PayrollProcessingComponent {

  // =====================================================
  // EVENTS
  // =====================================================

  @Output()
  processPayroll = new EventEmitter<void>();

  @Output()
  viewPayroll =
    new EventEmitter<PayrollProcessingRecord>();


  // =====================================================
  // PAYROLL ADJUSTMENT MODAL
  // =====================================================

  readonly isAdjustmentFormOpen =
    signal(false);


  // =====================================================
  // PAYROLL DATA
  // =====================================================

  readonly payrollRecords =
    signal<PayrollProcessingRecord[]>([
      {
        employeeId: 'EMP-1001',
        employeeName: 'Aarav Sharma',
        department: 'Engineering',
        salaryMonth: 'July 2026',
        grossSalary: 125000,
        deductions: 18500,
        netSalary: 106500,
        status: 'Processed'
      },

      {
        employeeId: 'EMP-1002',
        employeeName: 'Priya Mehta',
        department: 'Product',
        salaryMonth: 'July 2026',
        grossSalary: 145000,
        deductions: 22500,
        netSalary: 122500,
        status: 'Processed'
      },

      {
        employeeId: 'EMP-1003',
        employeeName: 'Rohan Verma',
        department: 'Engineering',
        salaryMonth: 'July 2026',
        grossSalary: 95000,
        deductions: 14200,
        netSalary: 80800,
        status: 'Processing'
      },

      {
        employeeId: 'EMP-1004',
        employeeName: 'Neha Kapoor',
        department: 'Human Resources',
        salaryMonth: 'July 2026',
        grossSalary: 78000,
        deductions: 11600,
        netSalary: 66400,
        status: 'Draft'
      },

      {
        employeeId: 'EMP-1005',
        employeeName: 'Vikram Singh',
        department: 'Engineering',
        salaryMonth: 'July 2026',
        grossSalary: 110000,
        deductions: 16500,
        netSalary: 93500,
        status: 'Failed'
      }
    ]);


  // =====================================================
  // FILTERS
  // =====================================================

  readonly searchTerm =
    signal('');

  readonly selectedStatus =
    signal<
      'All' | PayrollProcessingRecord['status']
    >('All');


  // =====================================================
  // STATUS OPTIONS
  // =====================================================

  readonly statuses = [
    'All',
    'Draft',
    'Processing',
    'Processed',
    'Failed'
  ] as const;


  // =====================================================
  // FILTERED RECORDS
  // =====================================================

  readonly filteredPayrollRecords =
    computed(() => {

      const search =
        this.searchTerm()
          .trim()
          .toLowerCase();

      const status =
        this.selectedStatus();

      return this.payrollRecords()
        .filter((payroll) => {

          const matchesSearch =
            !search ||
            payroll.employeeId
              .toLowerCase()
              .includes(search) ||
            payroll.employeeName
              .toLowerCase()
              .includes(search) ||
            payroll.department
              .toLowerCase()
              .includes(search);

          const matchesStatus =
            status === 'All' ||
            payroll.status === status;

          return (
            matchesSearch &&
            matchesStatus
          );
        });
    });


  // =====================================================
  // SUMMARY
  // =====================================================

  readonly totalEmployees =
    computed(
      () =>
        this.filteredPayrollRecords()
          .length
    );


  readonly processedEmployees =
    computed(
      () =>
        this.filteredPayrollRecords()
          .filter(
            (payroll) =>
              payroll.status === 'Processed'
          )
          .length
    );


  readonly processingEmployees =
    computed(
      () =>
        this.filteredPayrollRecords()
          .filter(
            (payroll) =>
              payroll.status === 'Processing'
          )
          .length
    );


  readonly totalNetSalary =
    computed(
      () =>
        this.filteredPayrollRecords()
          .reduce(
            (total, payroll) =>
              total + payroll.netSalary,
            0
          )
    );


  // =====================================================
  // SEARCH
  // =====================================================

  onSearch(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    this.searchTerm.set(
      input.value
    );
  }


  // =====================================================
  // STATUS FILTER
  // =====================================================

  onStatusChange(event: Event): void {

    const select =
      event.target as HTMLSelectElement;

    this.selectedStatus.set(
      select.value as
        | 'All'
        | PayrollProcessingRecord['status']
    );
  }


  // =====================================================
  // PROCESS PAYROLL
  // =====================================================

  onProcessPayroll(): void {

    // Open Payroll Adjustment Form
    this.isAdjustmentFormOpen.set(true);

    // Existing parent event
    this.processPayroll.emit();
  }


  // =====================================================
  // CLOSE PAYROLL ADJUSTMENT FORM
  // =====================================================

  closePayrollAdjustmentForm(): void {

    this.isAdjustmentFormOpen.set(false);
  }


  // =====================================================
  // PAYROLL ADJUSTMENT SAVED
  // =====================================================

  onPayrollAdjustmentSaved(
    adjustment: unknown
  ): void {

    console.log(
      'Payroll adjustment saved:',
      adjustment
    );

    // Modal close
    this.closePayrollAdjustmentForm();

    // Future API call yaha kar sakte ho
    //
    // this.payrollService.processPayroll(adjustment)
  }


  // =====================================================
  // VIEW PAYROLL
  // =====================================================

  onViewPayroll(
    payroll: PayrollProcessingRecord
  ): void {

    this.viewPayroll.emit(
      payroll
    );
  }


  // =====================================================
  // CURRENCY
  // =====================================================

  formatCurrency(
    value: number
  ): string {

    return new Intl.NumberFormat(
      'en-IN',
      {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }
    ).format(value);
  }
}