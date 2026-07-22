import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

type BillTab =
  | 'All'
  | 'Paid'
  | 'Due Soon'
  | 'Overdue';

interface VendorBill {

  id: string;

  vendor: string;

  category: string;

  dueDate: string;

  status: 'Paid' | 'Due Soon' | 'Overdue';

  balance: number;

}

@Component({
  selector: 'app-vendor-bills-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './vendor-bills-table.component.html'
})
export class VendorBillsTableComponent {

  @Output()
  settleBill = new EventEmitter<VendorBill>();

  searchText = '';

  tabs: BillTab[] = [
    'All',
    'Paid',
    'Due Soon',
    'Overdue'
  ];

  activeTab: BillTab = 'All';

  bills: VendorBill[] = [

    {
      id: 'BILL-501',
      vendor: 'AWS Cloud Services',
      category: 'Software Subscription',
      dueDate: '2026-07-20',
      status: 'Paid',
      balance: 2450
    },

    {
      id: 'BILL-502',
      vendor: 'Vertex Logistix',
      category: 'Logistics & Shipping',
      dueDate: '2026-07-16',
      status: 'Paid',
      balance: 5800
    },

    {
      id: 'BILL-503',
      vendor: 'BlueSky Office Rentals',
      category: 'Rent & Office Space',
      dueDate: '2026-07-25',
      status: 'Due Soon',
      balance: 12000
    },

    {
      id: 'BILL-504',
      vendor: 'Global Telecom Networks',
      category: 'Utilities',
      dueDate: '2026-07-22',
      status: 'Due Soon',
      balance: 1850
    },

    {
      id: 'BILL-505',
      vendor: 'Prime Catering Services',
      category: 'Office Expenses',
      dueDate: '2026-07-10',
      status: 'Overdue',
      balance: 3200
    }

  ];

  get filteredBills(): VendorBill[] {

    return this.bills.filter(bill => {

      const matchesTab =
        this.activeTab === 'All' ||
        bill.status === this.activeTab;

      const search = this.searchText.toLowerCase();

      const matchesSearch =
        bill.vendor.toLowerCase().includes(search) ||
        bill.category.toLowerCase().includes(search);

      return matchesTab && matchesSearch;

    });

  }

  setTab(tab: BillTab): void {

    this.activeTab = tab;

  }

  onSettleBill(bill: VendorBill): void {

    this.settleBill.emit(bill);

  }

}