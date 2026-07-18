import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface TrialBalance {

  accountCode: string;

  accountName: string;

  debit: number;

  credit: number;

}

@Component({
  selector: 'app-trial-balance-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './trial-balance-table.component.html'
})
export class TrialBalanceTableComponent {

  trialBalance: TrialBalance[] = [

    {
      accountCode: '1110',
      accountName: 'HDFC Corporate Checking',
      debit: 345200,
      credit: 0
    },

    {
      accountCode: '1120',
      accountName: 'Silicon Valley Operating',
      debit: 185600,
      credit: 0
    },

    {
      accountCode: '1200',
      accountName: 'Accounts Receivable',
      debit: 65800,
      credit: 0
    },

    {
      accountCode: '1600',
      accountName: 'Fixed Assets',
      debit: 2600000,
      credit: 0
    },

    {
      accountCode: '2100',
      accountName: 'Accounts Payable',
      debit: 0,
      credit: 17050
    },

    {
      accountCode: '2210',
      accountName: 'TDS Payable',
      debit: 0,
      credit: 25000
    },

    {
      accountCode: '2220',
      accountName: 'PF Payable',
      debit: 0,
      credit: 11000
    },

    {
      accountCode: '3100',
      accountName: 'Owner Equity',
      debit: 0,
      credit: 3100000
    },

    {
      accountCode: '4100',
      accountName: 'Software License Sales',
      debit: 0,
      credit: 125000
    },

    {
      accountCode: '5100',
      accountName: 'Rent Expense',
      debit: 12000,
      credit: 0
    },

    {
      accountCode: '5200',
      accountName: 'Software Subscription',
      debit: 2450,
      credit: 0
    }

  ];

  get totalDebit(): number {

    return this.trialBalance.reduce(
      (sum, item) => sum + item.debit,
      0
    );

  }

  get totalCredit(): number {

    return this.trialBalance.reduce(
      (sum, item) => sum + item.credit,
      0
    );

  }

}