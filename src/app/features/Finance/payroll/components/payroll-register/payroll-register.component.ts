import { CommonModule } from '@angular/common';

import {
  Component,
  computed,
  signal
} from '@angular/core';


// =====================================================
// PAYROLL REGISTER MODEL
// =====================================================

interface PayrollRecord {

  employeeId: string;

  employeeName: string;

  designation: string;

  department: string;

  grossSalary: number;

  deductions: number;

  netSalary: number;

  paymentStatus:
    | 'Paid'
    | 'Pending'
    | 'Processing';

}


// =====================================================
// COMPONENT
// =====================================================

@Component({

  selector:
    'app-payroll-register',

  standalone:
    true,

  imports: [

    CommonModule

  ],

  templateUrl:
    './payroll-register.component.html'

})
export class PayrollRegisterComponent {


  // =====================================================
  // PAYROLL DATA
  // =====================================================

  readonly payrolls =
    signal<PayrollRecord[]>([

      {

        employeeId:
          'EMP-1001',

        employeeName:
          'Aarav Sharma',

        designation:
          'Senior Software Engineer',

        department:
          'Engineering',

        grossSalary:
          125000,

        deductions:
          18500,

        netSalary:
          106500,

        paymentStatus:
          'Paid'

      },

      {

        employeeId:
          'EMP-1002',

        employeeName:
          'Priya Mehta',

        designation:
          'Product Manager',

        department:
          'Product',

        grossSalary:
          145000,

        deductions:
          22500,

        netSalary:
          122500,

        paymentStatus:
          'Paid'

      },

      {

        employeeId:
          'EMP-1003',

        employeeName:
          'Rohan Verma',

        designation:
          'Frontend Developer',

        department:
          'Engineering',

        grossSalary:
          95000,

        deductions:
          14200,

        netSalary:
          80800,

        paymentStatus:
          'Pending'

      },

      {

        employeeId:
          'EMP-1004',

        employeeName:
          'Neha Kapoor',

        designation:
          'HR Executive',

        department:
          'Human Resources',

        grossSalary:
          78000,

        deductions:
          11600,

        netSalary:
          66400,

        paymentStatus:
          'Paid'

      },

      {

        employeeId:
          'EMP-1005',

        employeeName:
          'Vikram Singh',

        designation:
          'Backend Developer',

        department:
          'Engineering',

        grossSalary:
          110000,

        deductions:
          16500,

        netSalary:
          93500,

        paymentStatus:
          'Processing'

      },

      {

        employeeId:
          'EMP-1006',

        employeeName:
          'Ananya Gupta',

        designation:
          'UI/UX Designer',

        department:
          'Design',

        grossSalary:
          88000,

        deductions:
          13200,

        netSalary:
          74800,

        paymentStatus:
          'Paid'

      },

      {

        employeeId:
          'EMP-1007',

        employeeName:
          'Karan Malhotra',

        designation:
          'Finance Executive',

        department:
          'Finance',

        grossSalary:
          92000,

        deductions:
          13800,

        netSalary:
          78200,

        paymentStatus:
          'Pending'

      }

    ]);


  // =====================================================
  // FILTER
  // =====================================================

  readonly searchTerm =
    signal('');


  readonly selectedDepartment =
    signal('All');


  readonly selectedStatus =
    signal('All');


  // =====================================================
  // DEPARTMENTS
  // =====================================================

  readonly departments = [

    'All',

    'Engineering',

    'Product',

    'Human Resources',

    'Design',

    'Finance'

  ];


  // =====================================================
  // STATUSES
  // =====================================================

  readonly statuses = [

    'All',

    'Paid',

    'Pending',

    'Processing'

  ];


  // =====================================================
  // FILTERED PAYROLL
  // =====================================================

  readonly filteredPayrolls =
    computed(() => {

      const search =
        this.searchTerm()
          .trim()
          .toLowerCase();


      const department =
        this.selectedDepartment();


      const status =
        this.selectedStatus();


      return this.payrolls()
        .filter((payroll) => {

          const matchesSearch =

            !search ||

            payroll.employeeId
              .toLowerCase()
              .includes(search) ||

            payroll.employeeName
              .toLowerCase()
              .includes(search) ||

            payroll.designation
              .toLowerCase()
              .includes(search);


          const matchesDepartment =

            department === 'All' ||

            payroll.department ===
              department;


          const matchesStatus =

            status === 'All' ||

            payroll.paymentStatus ===
              status;


          return (

            matchesSearch &&

            matchesDepartment &&

            matchesStatus

          );

        });

    });


  // =====================================================
  // TOTAL GROSS
  // =====================================================

  readonly totalGross =
    computed(() =>

      this.filteredPayrolls()
        .reduce(

          (
            total,
            payroll
          ) =>
            total +
            payroll.grossSalary,

          0

        )

    );


  // =====================================================
  // TOTAL DEDUCTIONS
  // =====================================================

  readonly totalDeductions =
    computed(() =>

      this.filteredPayrolls()
        .reduce(

          (
            total,
            payroll
          ) =>
            total +
            payroll.deductions,

          0

        )

    );


  // =====================================================
  // TOTAL NET
  // =====================================================

  readonly totalNetSalary =
    computed(() =>

      this.filteredPayrolls()
        .reduce(

          (
            total,
            payroll
          ) =>
            total +
            payroll.netSalary,

          0

        )

    );


  // =====================================================
  // SEARCH
  // =====================================================

  onSearch(
    event: Event
  ): void {

    const input =
      event.target as HTMLInputElement;

    this.searchTerm
      .set(input.value);

  }


  // =====================================================
  // DEPARTMENT CHANGE
  // =====================================================

  onDepartmentChange(
    event: Event
  ): void {

    const select =
      event.target as HTMLSelectElement;

    this.selectedDepartment
      .set(select.value);

  }


  // =====================================================
  // STATUS CHANGE
  // =====================================================

  onStatusChange(
    event: Event
  ): void {

    const select =
      event.target as HTMLSelectElement;

    this.selectedStatus
      .set(select.value);

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

        style:
          'currency',

        currency:
          'INR',

        maximumFractionDigits:
          0

      }

    ).format(value);

  }


  // =====================================================
  // EXPORT
  // =====================================================

  exportPayrollRegister(): void {

    console.log(
      'Export Payroll Register',
      this.filteredPayrolls()
    );

  }

}