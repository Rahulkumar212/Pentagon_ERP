import { CommonModule } from '@angular/common';

import {
  Component,
  computed
} from '@angular/core';


// =====================================================
// PAYROLL LIABILITY MODEL
// =====================================================

interface PayrollLiability {

  id: number;

  name: string;

  description: string;

  amount: number;

  dueDate: string;

  status:
    | 'Pending'
    | 'Due Soon'
    | 'Paid';

}


// =====================================================
// COMPONENT
// =====================================================

@Component({

  selector:
    'app-payroll-liabilities',

  standalone:
    true,

  imports: [

    CommonModule

  ],

  templateUrl:
    './payroll-liabilities.component.html'

})
export class PayrollLiabilitiesComponent {


  // =====================================================
  // PAYROLL LIABILITIES
  // =====================================================

  readonly liabilities: PayrollLiability[] = [

    {

      id: 1,

      name:
        'Employee EPF Payable',

      description:
        'Employee provident fund deduction',

      amount:
        285000,

      dueDate:
        '15 Sep 2026',

      status:
        'Pending'

    },


    {

      id: 2,

      name:
        'Employer EPF Contribution',

      description:
        'Employer provident fund contribution',

      amount:
        315000,

      dueDate:
        '15 Sep 2026',

      status:
        'Pending'

    },


    {

      id: 3,

      name:
        'ESI Payable',

      description:
        'Employee and employer ESI contribution',

      amount:
        98500,

      dueDate:
        '15 Sep 2026',

      status:
        'Due Soon'

    },


    {

      id: 4,

      name:
        'TDS on Salary',

      description:
        'Income tax deducted from employees',

      amount:
        425000,

      dueDate:
        '07 Sep 2026',

      status:
        'Due Soon'

    },


    {

      id: 5,

      name:
        'Professional Tax',

      description:
        'State professional tax deduction',

      amount:
        68500,

      dueDate:
        '10 Sep 2026',

      status:
        'Pending'

    },


    {

      id: 6,

      name:
        'Labour Welfare Fund',

      description:
        'Employee welfare contribution',

      amount:
        24000,

      dueDate:
        '20 Sep 2026',

      status:
        'Pending'

    },


    {

      id: 7,

      name:
        'Previous Month TDS',

      description:
        'Salary TDS already remitted',

      amount:
        310000,

      dueDate:
        '07 Aug 2026',

      status:
        'Paid'

    }

  ];


  // =====================================================
  // TOTAL OUTSTANDING
  // =====================================================

  readonly totalOutstanding = computed(() => {

    return this.liabilities

      .filter(
        item => item.status !== 'Paid'
      )

      .reduce(

        (total, item) =>
          total + item.amount,

        0

      );

  });


  // =====================================================
  // DUE WITHIN 30 DAYS
  // =====================================================

  readonly dueWithinThirtyDays = computed(() => {

    return this.liabilities

      .filter(

        item =>
          item.status === 'Due Soon'

      )

      .reduce(

        (total, item) =>
          total + item.amount,

        0

      );

  });


  // =====================================================
  // PAID THIS MONTH
  // =====================================================

  readonly paidThisMonth = computed(() => {

    return this.liabilities

      .filter(

        item =>
          item.status === 'Paid'

      )

      .reduce(

        (total, item) =>
          total + item.amount,

        0

      );

  });


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