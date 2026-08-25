import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  signal
} from '@angular/core';

// =====================================================
// PAYROLL STATUS MODEL
// =====================================================

interface PayrollStatusRecord {
  employeeId: string;
  employeeName: string;
  department: string;
  payrollMonth: string;

  grossSalary: number;
  netSalary: number;

  status:
    | 'Not Started'
    | 'Processing'
    | 'Processed'
    | 'On Hold'
    | 'Failed';

  processedDate?: string;
}

// =====================================================
// COMPONENT
// =====================================================

@Component({
  selector: 'app-payroll-status',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './payroll-status.component.html'
})
export class PayrollStatusComponent {

  // =====================================================
  // PAYROLL STATUS DATA
  // =====================================================

  readonly payrollRecords =
    signal<PayrollStatusRecord[]>([
      {
        employeeId: 'EMP-1001',
        employeeName: 'Aarav Sharma',
        department: 'Engineering',
        payrollMonth: 'July 2026',
        grossSalary: 125000,
        netSalary: 106500,
        status: 'Processed',
        processedDate: '31 Jul 2026'
      },
      {
        employeeId: 'EMP-1002',
        employeeName: 'Priya Mehta',
        department: 'Product',
        payrollMonth: 'July 2026',
        grossSalary: 145000,
        netSalary: 122500,
        status: 'Processed',
        processedDate: '31 Jul 2026'
      },
      {
        employeeId: 'EMP-1003',
        employeeName: 'Rohan Verma',
        department: 'Engineering',
        payrollMonth: 'July 2026',
        grossSalary: 95000,
        netSalary: 80800,
        status: 'Processing'
      },
      {
        employeeId: 'EMP-1004',
        employeeName: 'Neha Kapoor',
        department: 'Human Resources',
        payrollMonth: 'July 2026',
        grossSalary: 78000,
        netSalary: 66400,
        status: 'On Hold'
      },
      {
        employeeId: 'EMP-1005',
        employeeName: 'Vikram Singh',
        department: 'Engineering',
        payrollMonth: 'July 2026',
        grossSalary: 110000,
        netSalary: 93500,
        status: 'Failed'
      },
      {
        employeeId: 'EMP-1006',
        employeeName: 'Ananya Gupta',
        department: 'Design',
        payrollMonth: 'July 2026',
        grossSalary: 88000,
        netSalary: 74800,
        status: 'Not Started'
      }
    ]);

  // =====================================================
  // FILTERS
  // =====================================================

  readonly searchTerm = signal('');

  readonly selectedStatus =
    signal<
      'All' | PayrollStatusRecord['status']
    >('All');

  // =====================================================
  // STATUS OPTIONS
  // =====================================================

  readonly statuses = [
    'All',
    'Not Started',
    'Processing',
    'Processed',
    'On Hold',
    'Failed'
  ] as const;

  // =====================================================
  // FILTERED RECORDS
  // =====================================================

  readonly filteredPayrolls = computed(() => {

    const search =
      this.searchTerm()
        .trim()
        .toLowerCase();

    const status =
      this.selectedStatus();

    return this.payrollRecords().filter(
      payroll => {

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
      }
    );
  });

  // =====================================================
  // SUMMARY COUNTS
  // =====================================================

  readonly totalEmployees = computed(
    () =>
      this.payrollRecords().length
  );

  readonly processedCount = computed(
    () =>
      this.payrollRecords()
        .filter(
          payroll =>
            payroll.status === 'Processed'
        )
        .length
  );

  readonly processingCount = computed(
    () =>
      this.payrollRecords()
        .filter(
          payroll =>
            payroll.status === 'Processing'
        )
        .length
  );

  readonly pendingCount = computed(
    () =>
      this.payrollRecords()
        .filter(
          payroll =>
            payroll.status === 'Not Started' ||
            payroll.status === 'On Hold'
        )
        .length
  );

  readonly failedCount = computed(
    () =>
      this.payrollRecords()
        .filter(
          payroll =>
            payroll.status === 'Failed'
        )
        .length
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
        | PayrollStatusRecord['status']
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