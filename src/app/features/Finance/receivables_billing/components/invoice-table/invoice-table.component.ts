import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RecordSettlementModalComponent } from '../../forms/record-settlement-modal/record-settlement-modal.component';
import { InvoiceDetailsModalComponent } from '../invoice-details-modal/invoice-details-modal.component';

import { InvoiceService } from '../../../../../core/services/finance/invoice.service';

interface Invoice {

  id: string;

  customer: string;

  issueDate: string;

  dueDate: string;

  status: 'Paid' | 'Outstanding' | 'Overdue' | 'Draft';

  amount: number;

  items?: any[];

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
    RecordSettlementModalComponent,
    InvoiceDetailsModalComponent
  ],
  templateUrl: './invoice-table.component.html'
})
export class InvoiceTableComponent implements OnInit {

  searchText = '';

  activeTab: InvoiceTab = 'All';

  tabs: InvoiceTab[] = [
    'All',
    'Paid',
    'Outstanding',
    'Overdue',
    'Draft'
  ];

  invoices: Invoice[] = [];

  constructor(
    private readonly invoiceService: InvoiceService
  ) {}

  ngOnInit(): void {

    this.getInvoices();

  }

  getInvoices(): void {

    this.invoiceService
      .getAllInvoices()
      .subscribe({

        next: (response: any) => {

          console.log(
            'Invoices',
            response
          );

          this.invoices =
            (response.data ?? []).map((item: any) => ({

              id:
                item.invoiceId,

              customer:
                item.customer,

              issueDate:
                item.issueDate ??
                item.createdAt,

              dueDate:
                item.dueDate,

              status:
                item.status,

              amount:
                item.totalAmount ??
                item.amount,

              items:
                item.items ?? []

            }));

        },

        error: (error) => {

          console.error(
            'Failed to load invoices',
            error
          );

        }

      });

  }

  get filteredInvoices(): Invoice[] {

    return this.invoices.filter(invoice => {

      const matchesTab =

        this.activeTab === 'All' ||

        invoice.status === this.activeTab;

      const search =

        this.searchText
          .trim()
          .toLowerCase();

      const matchesSearch =

        invoice.id
          .toLowerCase()
          .includes(search) ||

        invoice.customer
          .toLowerCase()
          .includes(search);

      return (

        matchesTab &&
        matchesSearch

      );

    });

  }

  setTab(tab: InvoiceTab): void {

    this.activeTab = tab;

  }

  // ==========================================
  // Shared Selected Invoice
  // ==========================================

  selectedInvoice: Invoice | null = null;

  // ==========================================
  // Record Payment
  // ==========================================

  showSettlementModal = false;

  openSettlement(
    invoice: Invoice
  ): void {

    this.selectedInvoice =
      invoice;

    this.showSettlementModal =
      true;

  }

  closeSettlement(): void {

    this.showSettlementModal =
      false;

    this.selectedInvoice =
      null;

    this.getInvoices();

  }

  // ==========================================
  // Invoice Details
  // ==========================================

  showInvoiceModal = false;

  viewInvoice(
    invoice: Invoice
  ): void {

    this.selectedInvoice =
      invoice;

    this.showInvoiceModal =
      true;

  }

  closeInvoiceModal(): void {

    this.showInvoiceModal =
      false;

    this.selectedInvoice =
      null;

  }

}