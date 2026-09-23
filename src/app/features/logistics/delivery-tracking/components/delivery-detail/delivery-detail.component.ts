import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  DEFAULT_DELIVERY_DETAIL,
  DeliveryDetail,
} from '../../utils/delivery-detail.util';

@Component({
  selector: 'app-delivery-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-detail.component.html',
})
export class DeliveryDetailComponent {
  @Input()
  detail: DeliveryDetail = {
    ...DEFAULT_DELIVERY_DETAIL,
    items: DEFAULT_DELIVERY_DETAIL.items.map(
      (item) => ({ ...item }),
    ),
  };

  @Input()
  isOpen = false;

  @Output()
  close = new EventEmitter<void>();

  @Output()
  track = new EventEmitter<DeliveryDetail>();

  @Output()
  contactDriver = new EventEmitter<DeliveryDetail>();


  getStatusLabel(
    status: DeliveryDetail['status'],
  ): string {
    const labels = {
      IN_TRANSIT: 'In Transit',
      OUT_FOR_DELIVERY: 'Out for Delivery',
      DELIVERED: 'Delivered',
      DELAYED: 'Delayed',
      RETURNED: 'Returned',
    };

    return labels[status];
  }


  getStatusClass(
    status: DeliveryDetail['status'],
  ): string {
    const classes = {
      IN_TRANSIT:
        'bg-blue-50 text-blue-700 border-blue-200',

      OUT_FOR_DELIVERY:
        'bg-orange-50 text-orange-700 border-orange-200',

      DELIVERED:
        'bg-green-50 text-green-700 border-green-200',

      DELAYED:
        'bg-red-50 text-red-700 border-red-200',

      RETURNED:
        'bg-purple-50 text-purple-700 border-purple-200',
    };

    return classes[status];
  }


  getPriorityClass(
    priority: DeliveryDetail['priority'],
  ): string {
    const classes = {
      HIGH: 'bg-red-50 text-red-700',

      MEDIUM:
        'bg-yellow-50 text-yellow-700',

      LOW:
        'bg-gray-100 text-gray-600',
    };

    return classes[priority];
  }


  getPriorityLabel(
    priority: DeliveryDetail['priority'],
  ): string {
    return (
      priority.charAt(0) +
      priority.slice(1).toLowerCase()
    );
  }


  getSourceLabel(
    source: DeliveryDetail['source'],
  ): string {
    const labels = {
      SALES: 'Sales',

      GEM: 'GEM',

      SALES_DIRECTOR: 'Sales Director',
    };

    return labels[source];
  }


  getPaymentClass(
    status: DeliveryDetail['paymentStatus'],
  ): string {
    const classes = {
      PAID:
        'bg-green-50 text-green-700 border-green-200',

      PENDING:
        'bg-red-50 text-red-700 border-red-200',

      PARTIAL:
        'bg-yellow-50 text-yellow-700 border-yellow-200',
    };

    return classes[status];
  }


  getPaymentLabel(
    status: DeliveryDetail['paymentStatus'],
  ): string {
    const labels = {
      PAID: 'Paid',

      PENDING: 'Pending',

      PARTIAL: 'Partial',
    };

    return labels[status];
  }


  getTotalQuantity(): number {
    return this.detail.items.reduce(
      (total, item) =>
        total + item.quantity,
      0,
    );
  }


  onTrack(): void {
    this.track.emit(this.detail);
  }


  onContactDriver(): void {
    this.contactDriver.emit(this.detail);
  }


  onClose(): void {
    this.close.emit();
  }


  onOverlayClick(
    event: MouseEvent,
  ): void {
    if (
      event.target ===
      event.currentTarget
    ) {
      this.onClose();
    }
  }
}