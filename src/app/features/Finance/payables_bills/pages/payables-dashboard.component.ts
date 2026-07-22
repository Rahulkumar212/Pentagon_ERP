import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PayablesHeaderComponent } from '../components/payables-header/payables-header.component';
import { PayableSummaryCardsComponent } from '../components/payable-summary-cards/payable-summary-cards.component';
import { VendorBillsTableComponent } from '../components/vendor-bills-table/vendor-bills-table.component';

import { VendorBillModalComponent } from '../forms/vendor-bill-modal/vendor-bill-modal.component';
import { SettlementModalComponent } from '../forms/settlement-modal/settlement-modal.component';

@Component({
  selector: 'app-payables-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    PayablesHeaderComponent,
    PayableSummaryCardsComponent,
    VendorBillsTableComponent,
    VendorBillModalComponent,
    SettlementModalComponent
  ],
  templateUrl: './payables-dashboard.component.html'
})
export class PayablesDashboardComponent {

  showVendorBillModal = false;

  showSettlementModal = false;

  // ----------------------------
  // Vendor Bill Modal
  // ----------------------------

  openVendorBillModal(): void {

    this.showVendorBillModal = true;

  }

  closeVendorBillModal(): void {

    this.showVendorBillModal = false;

  }

  // ----------------------------
  // Settlement Modal
  // ----------------------------

  openSettlementModal(): void {

    this.showSettlementModal = true;

  }

  closeSettlementModal(): void {

    this.showSettlementModal = false;

  }

}