import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ReceivablesHeaderComponent } from '../components/receivables-header/receivables-header.component';
import { ReceivableSummaryCardsComponent } from '../components/receivable-summary-cards/receivable-summary-cards.component';
import { InvoiceTableComponent } from '../components/invoice-table/invoice-table.component';
import { CustomerInvoiceModalComponent } from '../forms/customer-invoice-modal/customer-invoice-modal.component';

@Component({
  selector: 'app-receivables-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ReceivablesHeaderComponent,
    ReceivableSummaryCardsComponent,
    InvoiceTableComponent,
    CustomerInvoiceModalComponent
  ],
  templateUrl: './receivables-dashboard.component.html'
})
export class ReceivablesDashboardComponent {

  showInvoiceModal = false;

  openInvoiceModal(): void {

    this.showInvoiceModal = true;

  }

  closeInvoiceModal(): void {

    this.showInvoiceModal = false;

  }

}