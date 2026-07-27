import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface JournalEntry {

  voucherNo: string;

  journalDate: string;

  reference: string;

  description: string;

  debitAccount: string;

  creditAccount: string;

  amount: number;

  narration: string;

  attachment?: string;

  status: 'Posted' | 'Pending';

  postImmediately: boolean;

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
      voucherNo: 'JV-1001',
      journalDate: '2026-07-15',
      reference: 'INV-1001',
      description: 'AWS Infrastructure Billing',
      debitAccount: 'Software Subscription',
      creditAccount: 'HDFC Corporate Checking',
      amount: 2450,
      narration: 'Monthly AWS cloud infrastructure charges.',
      attachment: 'aws-july.pdf',
      status: 'Posted',
      postImmediately: true
    },

    {
      voucherNo: 'JV-1002',
      journalDate: '2026-07-14',
      reference: 'INV-1002',
      description: 'Software License Sales',
      debitAccount: 'HDFC Corporate Checking',
      creditAccount: 'Software License Sales',
      amount: 125000,
      narration: 'Customer payment received for enterprise licenses.',
      attachment: 'license-sale.pdf',
      status: 'Posted',
      postImmediately: true
    },

    {
      voucherNo: 'JV-1003',
      journalDate: '2026-07-13',
      reference: 'RENT-JUL',
      description: 'Office Rent Payment',
      debitAccount: 'Rent Expense',
      creditAccount: 'HDFC Corporate Checking',
      amount: 12000,
      narration: 'Monthly office rent payment.',
      attachment: 'rent-receipt.pdf',
      status: 'Posted',
      postImmediately: true
    },

    {
      voucherNo: 'JV-1004',
      journalDate: '2026-07-12',
      reference: 'INV-1045',
      description: 'Customer Invoice Collection',
      debitAccount: 'HDFC Corporate Checking',
      creditAccount: 'Accounts Receivable',
      amount: 85000,
      narration: 'Invoice payment received from customer.',
      attachment: 'invoice1045.pdf',
      status: 'Pending',
      postImmediately: false
    },

    {
      voucherNo: 'JV-1005',
      journalDate: '2026-07-10',
      reference: 'CONS-1005',
      description: 'Consulting Revenue',
      debitAccount: 'HDFC Corporate Checking',
      creditAccount: 'Consulting Revenue',
      amount: 56000,
      narration: 'Consulting project milestone payment.',
      attachment: 'consulting.pdf',
      status: 'Posted',
      postImmediately: true
    },

    {
      voucherNo: 'JV-1006',
      journalDate: '2026-07-08',
      reference: 'ELEC-JUL',
      description: 'Electricity Expense',
      debitAccount: 'Electricity Expense',
      creditAccount: 'HDFC Corporate Checking',
      amount: 4800,
      narration: 'Electricity bill payment.',
      attachment: 'electricity-bill.pdf',
      status: 'Posted',
      postImmediately: true
    }

  ];

}