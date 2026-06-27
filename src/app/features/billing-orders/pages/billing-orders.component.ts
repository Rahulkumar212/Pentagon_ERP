import {
  Component,
  ViewChild
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  BillingOrderFormComponent
} from '../forms/billing-order-form.component';

import {
  BillingOrderTableComponent
} from '../tables/billing-order-table.component';

import {
  BillingOrder
} from '../../../core/models/billing-order.type';

@Component({
  selector: 'app-billing-orders',
  standalone: true,
  imports: [
    CommonModule,
    BillingOrderFormComponent,
    BillingOrderTableComponent
  ],
  templateUrl: './billing-orders.component.html'
})
export class BillingOrdersComponent {

  @ViewChild(BillingOrderTableComponent)
  billingTable!: BillingOrderTableComponent;

  showModal = false;

  selectedBilling: BillingOrder | null = null;

  // ==========================
  // Create
  // ==========================

  openModal(): void {

    this.selectedBilling = null;

    this.showModal = true;

  }

  // ==========================
  // Edit
  // ==========================
  editBilling(order: BillingOrder): void {

  console.log("Parent Called");

  this.selectedBilling = { ...order };

  this.showModal = true;

  console.log(this.showModal);

}

  // ==========================
  // Close
  // ==========================

  closeModal(): void {

    this.showModal = false;

    this.selectedBilling = null;

  }

  // ==========================
  // Save / Update Success
  // ==========================

  saveBillingOrder(): void {

    this.closeModal();

    this.billingTable.loadBillingOrders();

  }

}