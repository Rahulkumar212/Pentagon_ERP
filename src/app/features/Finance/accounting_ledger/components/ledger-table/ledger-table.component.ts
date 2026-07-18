import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface LedgerEntry {

  date: string;

  reference: string;

  account: string;

  description: string;

  debit: number;

  credit: number;

  balance: number;

}

@Component({
  selector: 'app-ledger-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './ledger-table.component.html'
})
export class LedgerTableComponent {

  ledgerEntries: LedgerEntry[] = [

    {
      date: '2026-07-15',
      reference: 'JV-1001',
      account: 'HDFC Corporate Checking',
      description: 'AWS Infrastructure Billing',
      debit: 2450,
      credit: 0,
      balance: 342750
    },

    {
      date: '2026-07-14',
      reference: 'JV-1002',
      account: 'Software License Sales',
      description: 'Customer Payment',
      debit: 125000,
      credit: 0,
      balance: 465300
    },

    {
      date: '2026-07-13',
      reference: 'JV-1003',
      account: 'Rent Expense',
      description: 'Office Rent',
      debit: 12000,
      credit: 0,
      balance: 453300
    },

    {
      date: '2026-07-12',
      reference: 'JV-1004',
      account: 'Accounts Payable',
      description: 'Vendor Payment',
      debit: 0,
      credit: 17050,
      balance: 436250
    },

    {
      date: '2026-07-10',
      reference: 'JV-1005',
      account: 'Consulting Revenue',
      description: 'Project Revenue',
      debit: 56000,
      credit: 0,
      balance: 492250
    },

    {
      date: '2026-07-08',
      reference: 'JV-1006',
      account: 'Electricity Expense',
      description: 'Utility Bill',
      debit: 4800,
      credit: 0,
      balance: 487450
    }

  ];

}