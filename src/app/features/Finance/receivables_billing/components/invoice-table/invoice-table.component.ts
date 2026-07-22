import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecordSettlementModalComponent } from '../../forms/record-settlement-modal/record-settlement-modal.component';

interface Invoice {

  id: string;

  customer: string;

  issueDate: string;

  dueDate: string;

  status: 'Paid' | 'Outstanding' | 'Overdue' | 'Draft';

  amount: number;

}

type InvoiceTab =
  | 'All'
  | 'Paid'
  | 'Outstanding'
  | 'Overdue'
  | 'Draft';

@Component({
  selector: 'app-invoice-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RecordSettlementModalComponent
  ],
  templateUrl: './invoice-table.component.html'
})
export class InvoiceTableComponent {

  searchText = '';

  activeTab: InvoiceTab = 'All';

  tabs: InvoiceTab[] = [
    'All',
    'Paid',
    'Outstanding',
    'Overdue',
    'Draft'
  ];

  invoices: Invoice[] = [

    {
      id: 'INV-2026-001',
      customer: 'Acme Corporation',
      issueDate: '2026-07-01',
      dueDate: '2026-07-31',
      status: 'Paid',
      amount: 14500
    },

    {
      id: 'INV-2026-002',
      customer: 'Globex Holdings',
      issueDate: '2026-07-05',
      dueDate: '2026-08-05',
      status: 'Paid',
      amount: 22000
    },

    {
      id: 'INV-2026-003',
      customer: 'Initech Systems',
      issueDate: '2026-06-15',
      dueDate: '2026-07-15',
      status: 'Overdue',
      amount: 9800
    },

    {
      id: 'INV-2026-004',
      customer: 'Umbrella Corp',
      issueDate: '2026-07-10',
      dueDate: '2026-08-10',
      status: 'Outstanding',
      amount: 34000
    },

    {
      id: 'INV-2026-005',
      customer: 'Stark Industries',
      issueDate: '2026-07-14',
      dueDate: '2026-08-14',
      status: 'Draft',
      amount: 45000
    }

  ];

  get filteredInvoices(): Invoice[] {

    return this.invoices.filter(invoice => {

      const matchesTab =
        this.activeTab === 'All' ||
        invoice.status === this.activeTab;

      const search = this.searchText.trim().toLowerCase();

      const matchesSearch =
        invoice.id.toLowerCase().includes(search) ||
        invoice.customer.toLowerCase().includes(search);

      return matchesTab && matchesSearch;

    });

  }

  setTab(tab: InvoiceTab): void {

    this.activeTab = tab;

  }


  showSettlementModal = false;

selectedInvoice!: Invoice;

openSettlement(invoice: Invoice): void {

  this.selectedInvoice = invoice;

  this.showSettlementModal = true;

}

closeSettlement(): void {

  this.showSettlementModal = false;

}

}