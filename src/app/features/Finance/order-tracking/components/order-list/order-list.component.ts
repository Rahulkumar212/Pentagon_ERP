import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';


// =========================================================
// MODELS
// =========================================================

import {
  Order,
  OrderItem,
  DeliveryStage
} from '../../../../../core/models/finance/order-tracking.model';


// =========================================================
// COMPONENT
// =========================================================

@Component({

  selector:
    'app-order-list',

  standalone:
    true,

  imports: [

    CommonModule

  ],

  templateUrl:
    './order-list.component.html'

})
export class OrderListComponent {


  // =======================================================
  // INPUTS
  // =======================================================

  @Input()
  orders: Order[] = [];


  // =======================================================
  // OUTPUTS
  // =======================================================

  @Output()
  orderSelected =
    new EventEmitter<Order>();


  @Output()
  payOrder =
    new EventEmitter<Order>();


  @Output()
  viewDetails =
    new EventEmitter<Order>();


    @Output()
viewPaymentHistory = new EventEmitter<Order>();


onViewPaymentHistory(order: Order): void {

    this.viewPaymentHistory.emit(order);

}


  // =======================================================
  // TOTAL ORDER VALUE
  // =======================================================

  getTotalAmount(
    order: Order
  ): number {

    return order.items.reduce(

      (
        total: number,
        item: OrderItem
      ) => {

        return (
          total +
          (
            Number(item.quantity) *
            Number(item.unitPrice)
          )
        );

      },

      0

    );

  }


  // =======================================================
  // BALANCE DUE
  // =======================================================

  getBalanceDue(
    order: Order
  ): number {

    const total =
      this.getTotalAmount(
        order
      );

    const received =
      Number(
        order.receivedAmount || 0
      );

    return Math.max(

      0,

      total -
      received

    );

  }


  // =======================================================
  // PAYMENT PERCENTAGE
  // =======================================================

  getPaymentPercentage(
    order: Order
  ): number {

    const total =
      this.getTotalAmount(
        order
      );

    const received =
      Number(
        order.receivedAmount || 0
      );

    if (
      total <= 0
    ) {

      return 0;

    }

    return Math.min(

      100,

      Math.round(

        (
          received /
          total
        ) * 100

      )

    );

  }


  // =======================================================
  // PAYMENT STATUS TEXT
  // =======================================================

  getPaymentStatusText(
    order: Order
  ): string {

    const percentage =
      this.getPaymentPercentage(
        order
      );

    if (
      percentage >= 100
    ) {

      return 'Fully Paid';

    }

    if (
      percentage <= 0
    ) {

      return 'Unpaid';

    }

    return `${percentage}% Paid`;

  }


  // =======================================================
  // PAYMENT STATUS ICON
  // =======================================================

  getPaymentStatusIcon(
    order: Order
  ): string {

    const percentage =
      this.getPaymentPercentage(
        order
      );

    if (
      percentage >= 100
    ) {

      return '✓';

    }

    if (
      percentage <= 0
    ) {

      return '!';

    }

    return '◷';

  }


  // =======================================================
  // PAYMENT STATUS CLASS
  // =======================================================

  getPaymentStatusClass(
    order: Order
  ): string {

    const percentage =
      this.getPaymentPercentage(
        order
      );

    if (
      percentage >= 100
    ) {

      return `
        border-emerald-200
        bg-emerald-50
        text-emerald-700
      `;

    }

    if (
      percentage <= 0
    ) {

      return `
        border-rose-200
        bg-rose-50
        text-rose-600
      `;

    }

    return `
      border-amber-200
      bg-amber-50
      text-amber-700
    `;

  }


  // =======================================================
  // FULFILLMENT STATUS TEXT
  // =======================================================

  getFulfillmentStatusText(
    status: DeliveryStage
  ): string {

    switch (
      status
    ) {

      case 'IN_PRODUCTION':

        return 'In Production';


      case 'DISPATCHED':

        return 'Dispatched';


      case 'DELIVERED':

        return 'Delivered';


      case 'CANCELLED':

        return 'Cancelled';


      case 'PENDING':

      default:

        return 'Pending';

    }

  }


  // =======================================================
  // FULFILLMENT STATUS CLASS
  // =======================================================

  getFulfillmentStatusClass(
    status: DeliveryStage
  ): string {

    switch (
      status
    ) {

      case 'PENDING':

        return `
          border-amber-200
          bg-amber-50
          text-amber-700
        `;


      case 'IN_PRODUCTION':

        return `
          border-blue-200
          bg-blue-50
          text-blue-700
        `;


      case 'DISPATCHED':

        return `
          border-purple-200
          bg-purple-50
          text-purple-700
        `;


      case 'DELIVERED':

        return `
          border-emerald-200
          bg-emerald-50
          text-emerald-700
        `;


      case 'CANCELLED':

        return `
          border-red-200
          bg-red-50
          text-red-600
        `;


      default:

        return `
          border-slate-200
          bg-slate-50
          text-slate-600
        `;

    }

  }


  // =======================================================
  // FORMAT ORDER NUMBER
  // =======================================================

  formatOrderNumber(
    orderNumber: string
  ): string {

    return orderNumber.replace(
      '-',
      '-\n'
    );

  }


  // =======================================================
  // FORMAT DATE
  // =======================================================

  formatDate(
    date: string
  ): string {

    const parts =
      date.split('-');

    if (
      parts.length !== 3
    ) {

      return date;

    }

    return `${parts[0]}-${parts[1]}-${parts[2]}`;

  }


  // =======================================================
  // FORMAT AMOUNT
  // =======================================================

  formatAmount(
    amount: number
  ): string {

    return new Intl.NumberFormat(

      'en-IN',

      {

        style:
          'currency',

        currency:
          'INR',

        maximumFractionDigits:
          0

      }

    ).format(
      Number(amount || 0)
    );

  }


  // =======================================================
  // ORDER SELECTED
  // =======================================================

  onSelect(
    order: Order
  ): void {

    this.orderSelected.emit(
      order
    );

  }


  // =======================================================
  // PAY
  // =======================================================

  onPay(
    order: Order
  ): void {

    this.payOrder.emit(
      order
    );

  }


  // =======================================================
  // DETAILS
  // =======================================================

  onDetails(
    order: Order
  ): void {

    this.viewDetails.emit(
      order
    );

  }

}