import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  Order,
} from '../../utils/order-list.util';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './order-list.component.html',
})
export class OrderListComponent {
  @Input()
  orders: Order[] = [];

  @Output()
  viewOrder = new EventEmitter<Order>();

  getSourceClass(
    source: Order['source']
  ): string {
    switch (source) {
      case 'SALES':
        return 'bg-blue-50 text-blue-700';

      case 'GEM':
        return 'bg-purple-50 text-purple-700';

      case 'SALES_DIRECTOR':
        return 'bg-orange-50 text-orange-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getStatusClass(
    status: Order['status']
  ): string {
    switch (status) {
      case 'PENDING':
        return 'bg-gray-50 text-gray-700';

      case 'PROCESSING':
        return 'bg-orange-50 text-orange-700';

      case 'READY_FOR_DISPATCH':
        return 'bg-yellow-50 text-yellow-700';

      case 'DISPATCHED':
        return 'bg-indigo-50 text-indigo-700';

      case 'IN_TRANSIT':
        return 'bg-cyan-50 text-cyan-700';

      case 'DELIVERED':
        return 'bg-green-50 text-green-700';

      case 'DELAYED':
        return 'bg-red-50 text-red-700';

      case 'CANCELLED':
        return 'bg-gray-100 text-gray-500';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getPaymentClass(
    paymentStatus: Order['paymentStatus']
  ): string {
    switch (paymentStatus) {
      case 'PAID':
        return 'bg-green-50 text-green-700';

      case 'PARTIAL':
        return 'bg-yellow-50 text-yellow-700';

      case 'PENDING':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getStatusLabel(
    status: Order['status']
  ): string {
    switch (status) {
      case 'READY_FOR_DISPATCH':
        return 'Ready for Dispatch';

      case 'IN_TRANSIT':
        return 'In Transit';

      default:
        return this.toTitleCase(status);
    }
  }

  getSourceLabel(
    source: Order['source']
  ): string {
    switch (source) {
      case 'SALES_DIRECTOR':
        return 'Sales Director';

      default:
        return this.toTitleCase(source);
    }
  }

  getPaymentLabel(
    paymentStatus: Order['paymentStatus']
  ): string {
    switch (paymentStatus) {
      case 'PAID':
        return 'Paid';

      case 'PARTIAL':
        return 'Partial';

      case 'PENDING':
        return 'Pending';

      default:
        return paymentStatus;
    }
  }

  onViewOrder(order: Order): void {
    this.viewOrder.emit(order);
  }

  private toTitleCase(value: string): string {
    return value
      .toLowerCase()
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
}