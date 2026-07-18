import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManualLedgerEntryComponent } from '../../forms/manual-ledger-entry/manual-ledger-entry.component';

export interface LedgerTransaction {
  id: string;
  date: string;
  description: string;
  category: string;
  account: string;
  amount: number;
  type: 'credit' | 'debit';
}

@Component({
  selector: 'app-general-ledger-table',
  standalone: true,
  imports: [CommonModule,FormsModule,ManualLedgerEntryComponent],
  templateUrl: './general-ledger-table.component.html'
})
export class GeneralLedgerTableComponent {

    showManualEntry = false;

openManualEntry(): void {
  this.showManualEntry = true;
}

closeManualEntry(): void {
  this.showManualEntry = false;
}

  activeFilter: 'all' | 'credit' | 'debit' = 'all';

  searchText = '';

  transactions: LedgerTransaction[] = [
    {
      id: 'TXN-101',
      date: '2026-07-15',
      description: 'Acme Corp Invoice Payment',
      category: 'Sales Income',
      account: 'HDFC Corporate Checking',
      amount: 14500,
      type: 'credit'
    },
    {
      id: 'TXN-102',
      date: '2026-07-14',
      description: 'AWS Cloud Infrastructure Service',
      category: 'Software Subscription',
      account: 'Silicon Valley Operating',
      amount: -2450,
      type: 'debit'
    },
    {
      id: 'TXN-103',
      date: '2026-07-12',
      description: 'Vendor Bill Payment: Vertex Logistics',
      category: 'Logistics & Shipping',
      account: 'HDFC Corporate Checking',
      amount: -5800,
      type: 'debit'
    },
    {
      id: 'TXN-104',
      date: '2026-07-10',
      description: 'Zenith Labs Project Retainer',
      category: 'Consulting Revenue',
      account: 'Silicon Valley Operating',
      amount: 28000,
      type: 'credit'
    },
    {
      id: 'TXN-105',
      date: '2026-07-08',
      description: 'Workspace Office Rental - Delhi',
      category: 'Rent & Office Space',
      account: 'HDFC Corporate Checking',
      amount: -12000,
      type: 'debit'
    },
    {
      id: 'TXN-106',
      date: '2026-07-05',
      description: 'Refund to Alpha Designs',
      category: 'Refunds',
      account: 'HDFC Corporate Checking',
      amount: -1500,
      type: 'debit'
    },
    {
      id: 'TXN-107',
      date: '2026-07-02',
      description: 'Annual GST Credit Refund',
      category: 'Tax Reimbursement',
      account: 'HDFC Corporate Checking',
      amount: 8750,
      type: 'credit'
    }
  ];

  setFilter(filter: 'all' | 'credit' | 'debit'): void {
    this.activeFilter = filter;
  }

  get filteredTransactions(): LedgerTransaction[] {

    let data = [...this.transactions];

    if (this.activeFilter !== 'all') {
      data = data.filter(item => item.type === this.activeFilter);
    }

    if (this.searchText.trim()) {

      const keyword = this.searchText.toLowerCase();

      data = data.filter(item =>
        item.id.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword) ||
        item.category.toLowerCase().includes(keyword) ||
        item.account.toLowerCase().includes(keyword)
      );

    }

    return data;
  }

  trackByTransaction(index: number, item: LedgerTransaction): string {
    return item.id;
  }

}