
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SalesOrder
} from '../../utils/order-list.util';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderDetailComponent {

  @Input() order: SalesOrder | null = null;

  @Input() isOpen = false;

  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
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

  getPriorityClass(
    priority: SalesOrder['priority']
  ): string {
    const classes: Record<SalesOrder['priority'], string> = {
      HIGH:
        'bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400',

      MEDIUM:
        'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',

      LOW:
        'bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400'
    };

    return classes[priority];
  }

}

