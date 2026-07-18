import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface JournalEntry {

  date: string;

  voucherNo: string;

  description: string;

  debit: number;

  credit: number;

  status: 'Posted' | 'Pending';

}

@Component({
  selector: 'app-journal-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './journal-table.component.html'
})
export class JournalTableComponent {

  journals: JournalEntry[] = [

    {
      date: '2026-07-15',
      voucherNo: 'JV-1001',
      description: 'AWS Infrastructure Billing',
      debit: 2450,
      credit: 2450,
      status: 'Posted'
    },

    {
      date: '2026-07-14',
      voucherNo: 'JV-1002',
      description: 'Software License Sales',
      debit: 125000,
      credit: 125000,
      status: 'Posted'
    },

    {
      date: '2026-07-13',
      voucherNo: 'JV-1003',
      description: 'Office Rent Payment',
      debit: 12000,
      credit: 12000,
      status: 'Posted'
    },

    {
      date: '2026-07-12',
      voucherNo: 'JV-1004',
      description: 'Customer Invoice Collection',
      debit: 85000,
      credit: 85000,
      status: 'Pending'
    },

    {
      date: '2026-07-10',
      voucherNo: 'JV-1005',
      description: 'Consulting Revenue',
      debit: 56000,
      credit: 56000,
      status: 'Posted'
    },

    {
      date: '2026-07-08',
      voucherNo: 'JV-1006',
      description: 'Electricity Expense',
      debit: 4800,
      credit: 4800,
      status: 'Posted'
    }

  ];

}