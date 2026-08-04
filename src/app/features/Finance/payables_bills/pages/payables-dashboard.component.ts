import { CommonModule } from '@angular/common';
import {
  Component,
  ViewChild
} from '@angular/core';

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

  @ViewChild(VendorBillsTableComponent)
  vendorBillsTable!: VendorBillsTableComponent;

  showVendorBillModal = false;

  showSettlementModal = false;

  selectedBill: any = null;

  // ----------------------------
  // Vendor Bill Modal
  // ----------------------------

  openVendorBillModal(): void {

    this.showVendorBillModal = true;

  }

  closeVendorBillModal(refresh = false): void {

    this.showVendorBillModal = false;

    if (refresh) {

      this.vendorBillsTable.getIncomingBills();

    }

  }

  // ----------------------------
  // Settlement Modal
  // ----------------------------

  openSettlementModal(bill: any): void {

    this.selectedBill = bill;

    this.showSettlementModal = true;

  }

  closeSettlementModal(refresh = false): void {

    this.showSettlementModal = false;

    this.selectedBill = null;

    if (refresh) {

      this.vendorBillsTable.getIncomingBills();

    }

  }

}