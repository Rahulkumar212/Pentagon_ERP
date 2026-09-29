
import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  OrderSummaryComponent
} from '../components/order-summary/order-summary.component';

import {
  OrderFiltersComponent,
  OrderFilters
} from '../components/order-filters/order-filters.component';

import {
  OrderListComponent
} from '../components/order-list/order-list.component';

import {
  OrderDetailComponent
} from '../components/order-detail/order-detail.component';

import {
  OrderFormComponent,
  CreateSalesOrder
} from '../forms/order-form/order-form.component';

import {
  SalesOrder,
  SALES_ORDER_DATA
} from '../utils/order-list.util';

import {
  ORDER_SUMMARY_DATA
} from '../utils/order-summary.util';

@Component({
  selector: 'app-sales-orders',
  standalone: true,

  imports: [
    CommonModule,
    OrderSummaryComponent,
    OrderFiltersComponent,
    OrderListComponent,
    OrderDetailComponent,
    OrderFormComponent
  ],

  templateUrl: './sales-orders.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesOrdersComponent {

  summary = ORDER_SUMMARY_DATA;

  allOrders: SalesOrder[] = [...SALES_ORDER_DATA];

  filteredOrders: SalesOrder[] = [...this.allOrders];

  selectedOrder: SalesOrder | null = null;

  isOrderDetailOpen = false;

  // Create Order Form
  isOrderFormOpen = false;


  // --------------------------------
  // Open Create Order Form
  // --------------------------------

  onCreateOrder(): void {
    this.isOrderFormOpen = true;
  }


  // --------------------------------
  // Close Create Order Form
  // --------------------------------

  onCloseOrderForm(): void {
    this.isOrderFormOpen = false;
  }


  // --------------------------------
  // Submit New Order
  // --------------------------------

  onSubmitOrder(order: CreateSalesOrder): void {

    console.log('New Sales Order:', order);


    this.isOrderFormOpen = false;
  }


  // --------------------------------
  // Order Filters
  // --------------------------------

  onFilterChange(filters: OrderFilters): void {

    const search = filters.search
      .trim()
      .toLowerCase();

    this.filteredOrders = this.allOrders.filter((order) => {

      const matchesSearch =
        !search ||
        order.orderNumber.toLowerCase().includes(search) ||
        order.customerName.toLowerCase().includes(search) ||
        order.customerCode.toLowerCase().includes(search) ||
        order.reference.toLowerCase().includes(search);

      const matchesStatus =
        filters.status === 'ALL' ||
        order.status === filters.status;

      const matchesPayment =
        filters.paymentStatus === 'ALL' ||
        order.paymentStatus === filters.paymentStatus;

      const matchesPriority =
        filters.priority === 'ALL' ||
        order.priority === filters.priority;

      const matchesDate =
        !filters.date ||
        order.orderDate === filters.date;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPayment &&
        matchesPriority &&
        matchesDate
      );
    });
  }


  // --------------------------------
  // View Order
  // --------------------------------

  onViewOrder(order: SalesOrder): void {

    this.selectedOrder = order;

    this.isOrderDetailOpen = true;
  }


  // --------------------------------
  // Close Order Detail
  // --------------------------------

  onCloseOrderDetail(): void {

    this.isOrderDetailOpen = false;

    this.selectedOrder = null;
  }

}

