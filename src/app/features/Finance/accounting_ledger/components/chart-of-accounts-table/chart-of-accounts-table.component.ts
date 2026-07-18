import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ChartAccount {

  code: string;

  accountName: string;

  classification: string;

  balanceType: 'Debit' | 'Credit';

  balance: number;

}

@Component({
  selector: 'app-chart-of-accounts-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './chart-of-accounts-table.component.html'
})
export class ChartOfAccountsComponent {

  accounts: ChartAccount[] = [

    {
      code: '1110',
      accountName: 'HDFC Corporate Checking',
      classification: 'Assets (Current)',
      balanceType: 'Debit',
      balance: 345200
    },

    {
      code: '1120',
      accountName: 'Silicon Valley Operating',
      classification: 'Assets (Current)',
      balanceType: 'Debit',
      balance: 185600
    },

    {
      code: '1200',
      accountName: 'Accounts Receivable',
      classification: 'Assets (Current)',
      balanceType: 'Debit',
      balance: 65800
    },

    {
      code: '1600',
      accountName: 'Fixed Assets (MacBook / Servers)',
      classification: 'Assets (Non-Current)',
      balanceType: 'Debit',
      balance: 2600000
    },

    {
      code: '2100',
      accountName: 'Accounts Payable',
      classification: 'Liabilities (Current)',
      balanceType: 'Credit',
      balance: 17050
    },

    {
      code: '2210',
      accountName: 'TDS Payable',
      classification: 'Liabilities (Current)',
      balanceType: 'Credit',
      balance: 25000
    },

    {
      code: '2220',
      accountName: 'PF Payable',
      classification: 'Liabilities (Current)',
      balanceType: 'Credit',
      balance: 11000
    },

    {
      code: '3100',
      accountName: 'Owner Equity & Retained Earnings',
      classification: 'Equity',
      balanceType: 'Credit',
      balance: 3100000
    },

    {
      code: '4100',
      accountName: 'Software License Sales',
      classification: 'Revenue',
      balanceType: 'Credit',
      balance: 125000
    },

    {
      code: '5100',
      accountName: 'Rent Expense',
      classification: 'Expenses',
      balanceType: 'Debit',
      balance: 12000
    },

    {
      code: '5200',
      accountName: 'Software Subscriptions',
      classification: 'Expenses',
      balanceType: 'Debit',
      balance: 2450
    }

  ];

}