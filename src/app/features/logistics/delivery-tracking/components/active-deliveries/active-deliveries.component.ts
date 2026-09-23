import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  ActiveDelivery,
} from '../../utils/active-deliveries.util';

@Component({
  selector: 'app-active-deliveries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active-deliveries.component.html',
})
export class ActiveDeliveriesComponent {
  @Input()
  deliveries: ActiveDelivery[] = [];

  @Output()
  viewDelivery = new EventEmitter<ActiveDelivery>();

  @Output()
  trackDelivery = new EventEmitter<ActiveDelivery>();

  getStatusLabel(
    status: ActiveDelivery['status'],
  ): string {
    const labels = {
      IN_TRANSIT: 'In Transit',
      OUT_FOR_DELIVERY: 'Out for Delivery',
      DELAYED: 'Delayed',
    };

    return labels[status];
  }

  getStatusClass(
    status: ActiveDelivery['status'],
  ): string {
    const classes = {
      IN_TRANSIT:
        'bg-blue-50 text-blue-700 border-blue-200',

      OUT_FOR_DELIVERY:
        'bg-orange-50 text-orange-700 border-orange-200',

      DELAYED:
        'bg-red-50 text-red-700 border-red-200',
    };

    return classes[status];
  }

  getPriorityClass(
    priority: ActiveDelivery['priority'],
  ): string {
    const classes = {
      HIGH: 'bg-red-50 text-red-700',
      MEDIUM: 'bg-yellow-50 text-yellow-700',
      LOW: 'bg-gray-100 text-gray-600',
    };

    return classes[priority];
  }

  getPriorityLabel(
    priority: ActiveDelivery['priority'],
  ): string {
    return (
      priority.charAt(0) +
      priority.slice(1).toLowerCase()
    );
  }

  onViewDelivery(
    delivery: ActiveDelivery,
  ): void {
    this.viewDelivery.emit(delivery);
  }

  onTrackDelivery(
    delivery: ActiveDelivery,
  ): void {
    this.trackDelivery.emit(delivery);
  }

  trackByDelivery(
    index: number,
    delivery: ActiveDelivery,
  ): string {
    return delivery.id;
  }
}