import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { OrderSummaryComponent } from '../components/order-summary/order-summary.component';

import { OrderSourceOverviewComponent } from '../components/order-source-overview/order-source-overview.component';

import { OrderStatusOverviewComponent } from '../components/order-status-overview/order-status-overview.component';

import { OrderFiltersComponent } from '../components/order-filters/order-filters.component';

import { OrderListComponent } from '../components/order-list/order-list.component';

import { OrderDetailComponent } from '../components/order-detail/order-detail.component';

import {
  Order,
  ORDERS,
} from '../utils/order-list.util';

import {
  OrderFilter,
} from '../utils/order-filters.util';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CommonModule,

    OrderSummaryComponent,
    OrderSourceOverviewComponent,
    OrderStatusOverviewComponent,
    OrderFiltersComponent,
    OrderListComponent,
    OrderDetailComponent,
  ],
  templateUrl: './orders.component.html',
})
export class OrdersComponent {
  readonly allOrders: Order[] = [
    ...ORDERS,
  ];

  filteredOrders: Order[] = [
    ...this.allOrders,
  ];

  selectedOrder: Order | null = null;

  isOrderDetailOpen = false;

  /**
   * Apply filters received from
   * order-filters component.
   */
  onFilterChange(
    filters: OrderFilter
  ): void {
    const search =
      filters.search
        .trim()
        .toLowerCase();

    this.filteredOrders =
      this.allOrders.filter(
        (order) => {

          // SEARCH
          const matchesSearch =
            !search ||
            order.orderNumber
              .toLowerCase()
              .includes(search) ||
            order.customerName
              .toLowerCase()
              .includes(search) ||
            order.customerCode
              .toLowerCase()
              .includes(search) ||
            order.reference
              .toLowerCase()
              .includes(search);

          // SOURCE
          const matchesSource =
            filters.source === 'ALL' ||
            order.source === filters.source;

          // ORDER STATUS
          const matchesStatus =
            filters.status === 'ALL' ||
            order.status === filters.status;

          // PAYMENT STATUS
          const matchesPayment =
            filters.paymentStatus === 'ALL' ||
            order.paymentStatus ===
              filters.paymentStatus;

          // FROM DATE
          const matchesFromDate =
            !filters.fromDate ||
            order.orderDate >=
              filters.fromDate;

          // TO DATE
          const matchesToDate =
            !filters.toDate ||
            order.orderDate <=
              filters.toDate;

          return (
            matchesSearch &&
            matchesSource &&
            matchesStatus &&
            matchesPayment &&
            matchesFromDate &&
            matchesToDate
          );
        }
      );
  }

  /**
   * Open order detail modal.
   */
  onViewOrder(
    order: Order
  ): void {
    this.selectedOrder = order;

    this.isOrderDetailOpen = true;
  }

  /**
   * Close order detail modal.
   */
  onCloseOrderDetail(): void {
    this.selectedOrder = null;

    this.isOrderDetailOpen = false;
  }
}