import { CommonModule } from '@angular/common';

import {
  Component,
  computed
} from '@angular/core';


// =====================================================
// JOURNAL ENTRY MODEL
// =====================================================

interface PayrollJournalEntry {

  id: number;

  date: string;

  journalNo: string;

  account: string;

  accountType: string;

  description: string;

  debit: number;

  credit: number;

}


// =====================================================
// COMPONENT
// =====================================================

@Component({

  selector:
    'app-payroll-journal',

  standalone:
    true,

  imports: [

    CommonModule

  ],

  templateUrl:
    './payroll-journal.component.html'

})
export class PayrollJournalComponent {


  // =====================================================
  // PAYROLL JOURNAL ENTRIES
  // =====================================================

  readonly journalEntries: PayrollJournalEntry[] = [

    {

      id: 1,

      date: '31 Aug 2026',

      journalNo: 'PAY-2026-08',

      account: 'Salary Expense',

      accountType: 'Expense',

      description: 'Gross salary expense for August 2026',

      debit: 1585000,

      credit: 0

    },


    {

      id: 2,

      date: '31 Aug 2026',

      journalNo: 'PAY-2026-08',

      account: 'EPF Payable',

      accountType: 'Current Liability',

      description: 'Employee EPF deduction',

      debit: 0,

      credit: 285000

    },


    {

      id: 3,

      date: '31 Aug 2026',

      journalNo: 'PAY-2026-08',

      account: 'ESI Payable',

      accountType: 'Current Liability',

      description: 'Employee ESI deduction',

      debit: 0,

      credit: 98500

    },


    {

      id: 4,

      date: '31 Aug 2026',

      journalNo: 'PAY-2026-08',

      account: 'TDS Payable',

      accountType: 'Current Liability',

      description: 'Income tax deducted from employees',

      debit: 0,

      credit: 425000

    },


    {

      id: 5,

      date: '31 Aug 2026',

      journalNo: 'PAY-2026-08',

      account: 'Professional Tax Payable',

      accountType: 'Current Liability',

      description: 'Professional tax deduction',

      debit: 0,

      credit: 68500

    },


    {

      id: 6,

      date: '31 Aug 2026',

      journalNo: 'PAY-2026-08',

      account: 'Salary Payable',

      accountType: 'Current Liability',

      description: 'Net salary payable to employees',

      debit: 0,

      credit: 708000

    }

  ];


  // =====================================================
  // TOTAL DEBIT
  // =====================================================

  readonly totalDebit = computed(() => {

    return this.journalEntries.reduce(

      (total, entry) =>
        total + entry.debit,

      0

    );

  });


  // =====================================================
  // TOTAL CREDIT
  // =====================================================

  readonly totalCredit = computed(() => {

    return this.journalEntries.reduce(

      (total, entry) =>
        total + entry.credit,

      0

    );

  });


  // =====================================================
  // BALANCE CHECK
  // =====================================================

  readonly isBalanced = computed(() => {

    return (

      this.totalDebit() ===

      this.totalCredit()

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


  // =====================================================
  // EXPORT JOURNAL
  // =====================================================

  exportJournal(): void {

    console.log(
      'Export Payroll Journal'
    );

  }

}