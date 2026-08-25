import { CommonModule } from '@angular/common';

import {
  Component,
  computed
} from '@angular/core';


// =====================================================
// SALARY EXPENSE MODEL
// =====================================================

interface SalaryExpense {

  month: string;

  amount: number;

}


// =====================================================
// EXPENSE BREAKDOWN MODEL
// =====================================================

interface ExpenseBreakdown {

  name: string;

  amount: number;

  percentage: number;

}


// =====================================================
// COMPONENT
// =====================================================

@Component({

  selector:
    'app-salary-expense',

  standalone:
    true,

  imports: [

    CommonModule

  ],

  templateUrl:
    './salary-expense.component.html'

})
export class SalaryExpenseComponent {


  // =====================================================
  // MONTHLY SALARY EXPENSE
  // =====================================================

  readonly salaryExpenses: SalaryExpense[] = [

    {
      month: 'Apr',
      amount: 1285000
    },

    {
      month: 'May',
      amount: 1312000
    },

    {
      month: 'Jun',
      amount: 1348000
    },

    {
      month: 'Jul',
      amount: 1365000
    },

    {
      month: 'Aug',
      amount: 1398000
    },

    {
      month: 'Sep',
      amount: 1425000
    },

    {
      month: 'Oct',
      amount: 1448000
    },

    {
      month: 'Nov',
      amount: 1475000
    },

    {
      month: 'Dec',
      amount: 1492000
    },

    {
      month: 'Jan',
      amount: 1515000
    },

    {
      month: 'Feb',
      amount: 1540000
    },

    {
      month: 'Mar',
      amount: 1585000
    }

  ];


  // =====================================================
  // EXPENSE BREAKDOWN
  // =====================================================

  readonly expenseBreakdown: ExpenseBreakdown[] = [

    {
      name: 'Basic Salary',

      amount: 10500000,

      percentage: 62
    },

    {
      name: 'HRA & Allowances',

      amount: 4200000,

      percentage: 25
    },

    {
      name: 'Employer Contributions',

      amount: 2200000,

      percentage: 13
    }

  ];


  // =====================================================
  // TOTAL EXPENSE
  // =====================================================

  readonly totalExpense = computed(() => {

    return this.salaryExpenses.reduce(

      (total, item) =>
        total + item.amount,

      0

    );

  });


  // =====================================================
  // AVERAGE MONTHLY EXPENSE
  // =====================================================

  readonly averageExpense = computed(() => {

    if (!this.salaryExpenses.length) {

      return 0;

    }

    return (

      this.totalExpense() /

      this.salaryExpenses.length

    );

  });


  // =====================================================
  // HIGHEST MONTH
  // =====================================================

  readonly highestMonth = computed(() => {

    if (!this.salaryExpenses.length) {

      return {

        month: '-',

        amount: 0

      };

    }

    return this.salaryExpenses.reduce(

      (highest, current) =>

        current.amount > highest.amount

          ? current

          : highest

    );

  });


  // =====================================================
  // BAR HEIGHT
  // =====================================================

  getBarHeight(
    amount: number
  ): number {

    const maxAmount = Math.max(

      ...this.salaryExpenses.map(
        item => item.amount
      )

    );

    if (maxAmount <= 0) {

      return 0;

    }

    return (

      amount /

      maxAmount

    ) * 100;

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


  // =====================================================
  // COMPACT FORMAT
  // =====================================================

  formatCompact(
    value: number
  ): string {

    const amount =
      Number(value) || 0;

    const absoluteValue =
      Math.abs(amount);


    if (
      absoluteValue >=
      10000000
    ) {

      return (

        '₹' +

        (
          amount /
          10000000
        ).toFixed(1) +

        'Cr'

      );

    }


    if (
      absoluteValue >=
      100000
    ) {

      return (

        '₹' +

        (
          amount /
          100000
        ).toFixed(1) +

        'L'

      );

    }


    if (
      absoluteValue >=
      1000
    ) {

      return (

        '₹' +

        (
          amount /
          1000
        ).toFixed(1) +

        'K'

      );

    }


    return '₹' + amount.toFixed(0);

  }

}