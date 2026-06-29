import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  BillingOrderService
} from '../../../core/services/billing-order.service';

import {
  BillingOrder,
  BillingOrderResponse
} from '../../../core/models/billing-order.type';


@Component({
  selector: 'app-billing-order-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './billing-order-table.component.html'
})
export class BillingOrderTableComponent
implements OnInit {

 @Output()
  edit = new EventEmitter<BillingOrder>();

  private readonly billingService =
    inject(BillingOrderService);

  private readonly cdr =
    inject(ChangeDetectorRef);

    

  billingOrders: BillingOrder[] = [];

  ngOnInit(): void {

    this.loadBillingOrders();

  }

  // ==========================
  // Fetch Billing Orders
  // ==========================

  loadBillingOrders(): void {

    this.billingService
      .getBillings()
      .subscribe({

        next: (response: BillingOrderResponse) => {

          this.billingOrders =
            response.data ?? [];

          // Force UI Refresh
          this.cdr.detectChanges();

        },

        error: (err) => {

          console.error(
            'Failed to fetch billing orders',
            err
          );

        }

      });

  }

  // ==========================
  // Total Monthly Business
  // ==========================

  get totalMonthlyBusiness(): number {

    return this.billingOrders.reduce(

      (total, order) =>

        total + Number(order.monthly_business || 0),

      0

    );

  }

  // ==========================
  // Edit Billing
  // ==========================

  editBilling(order: BillingOrder): void {

  console.log(order);

  this.edit.emit(order);

}

}