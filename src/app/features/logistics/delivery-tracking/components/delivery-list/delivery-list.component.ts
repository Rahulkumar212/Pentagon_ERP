import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  DeliveryListItem,
  DeliveryStatus,
} from '../../utils/delivery-list.util';

@Component({
  selector: 'app-delivery-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-list.component.html',
})
export class DeliveryListComponent {
  @Input() deliveries: DeliveryListItem[] = [];

  @Output()
  viewDetails = new EventEmitter<DeliveryListItem>();

  @Output()
  trackDelivery = new EventEmitter<DeliveryListItem>();

  getStatusLabel(status: DeliveryStatus): string {
    const labels: Record<DeliveryStatus, string> = {
      IN_TRANSIT: 'In Transit',
      OUT_FOR_DELIVERY: 'Out for Delivery',
      DELIVERED: 'Delivered',
      DELAYED: 'Delayed',
      RETURNED: 'Returned',
    };

    return labels[status];
  }

  getStatusClass(status: DeliveryStatus): string {
    const classes: Record<DeliveryStatus, string> = {
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

  getPriorityClass(priority: DeliveryListItem['priority']): string {
    const classes = {
      HIGH: 'bg-red-50 text-red-700',
      MEDIUM: 'bg-yellow-50 text-yellow-700',
      LOW: 'bg-gray-100 text-gray-600',
    };

    return classes[priority];
  }

  getPriorityLabel(
    priority: DeliveryListItem['priority'],
  ): string {
    return priority.charAt(0) + priority.slice(1).toLowerCase();
  }

  getSourceLabel(source: DeliveryListItem['source']): string {
    const labels = {
      SALES: 'Sales',
      GEM: 'GEM',
      SALES_DIRECTOR: 'Sales Director',
    };

    return labels[source];
  }

  onViewDetails(delivery: DeliveryListItem): void {
    this.viewDetails.emit(delivery);
  }

  onTrackDelivery(delivery: DeliveryListItem): void {
    this.trackDelivery.emit(delivery);
  }

  trackByDelivery(
    index: number,
    delivery: DeliveryListItem,
  ): string {
    return delivery.id;
  }
}