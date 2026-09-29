
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SalesOrder,
  SALES_ORDER_DATA
} from '../../utils/order-list.util';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderListComponent {

  @Input() orders: SalesOrder[] = SALES_ORDER_DATA;

  @Output() viewOrder = new EventEmitter<SalesOrder>();

  onViewOrder(order: SalesOrder): void {
    this.viewOrder.emit(order);
  }

  getStatusLabel(status: SalesOrder['status']): string {
    const labels: Record<SalesOrder['status'], string> = {
      PENDING: 'Pending',
      PROCESSING: 'Processing',
      READY_FOR_DISPATCH: 'Ready for Dispatch',
      DISPATCHED: 'Dispatched',
      DELIVERED: 'Delivered',
      CANCELLED: 'Cancelled'
    };

    return labels[status];
  }

  getPaymentLabel(
    status: SalesOrder['paymentStatus']
  ): string {
    const labels: Record<SalesOrder['paymentStatus'], string> = {
      PENDING: 'Pending',
      PARTIAL: 'Partial',
      PAID: 'Paid'
    };

    return labels[status];
  }

  getStatusClass(status: SalesOrder['status']): string {
    const classes: Record<SalesOrder['status'], string> = {
      PENDING:
        'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',

      PROCESSING:
        'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',

      READY_FOR_DISPATCH:
        'bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400',

      DISPATCHED:
        'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400',

      DELIVERED:
        'bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400',

      CANCELLED:
        'bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400'
    };

    return classes[status];
  }

  getPaymentClass(
    status: SalesOrder['paymentStatus']
  ): string {
    const classes: Record<SalesOrder['paymentStatus'], string> = {
      PENDING:
        'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',

      PARTIAL:
        'bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400',

      PAID:
        'bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400'
    };

    return classes[status];
  }

}

