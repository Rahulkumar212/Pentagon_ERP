import { Component, Input } from '@angular/core';

export type OrderStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'PROCESSING'
  | 'DISPATCHED'
  | 'DELIVERED'
  | 'DELAYED'
  | 'CANCELLED';

@Component({
  selector: 'app-order-status-badge',
  standalone: true,
  templateUrl: './order-status-badge.component.html'
})
export class OrderStatusBadgeComponent {
  @Input({ required: true })
  status!: OrderStatus;

  get label(): string {
    const labels: Record<OrderStatus, string> = {
      PENDING: 'Pending',
      APPROVED: 'Approved',
      PROCESSING: 'Processing',
      DISPATCHED: 'Dispatched',
      DELIVERED: 'Delivered',
      DELAYED: 'Delayed',
      CANCELLED: 'Cancelled'
    };

    return labels[this.status];
  }

  get badgeClass(): string {
    const classes: Record<OrderStatus, string> = {
      PENDING:
        'bg-yellow-50 text-yellow-700 border-yellow-200',

      APPROVED:
        'bg-blue-50 text-blue-700 border-blue-200',

      PROCESSING:
        'bg-purple-50 text-purple-700 border-purple-200',

      DISPATCHED:
        'bg-indigo-50 text-indigo-700 border-indigo-200',

      DELIVERED:
        'bg-green-50 text-green-700 border-green-200',

      DELAYED:
        'bg-red-50 text-red-700 border-red-200',

      CANCELLED:
        'bg-gray-100 text-gray-600 border-gray-200'
    };

    return classes[this.status];
  }
}