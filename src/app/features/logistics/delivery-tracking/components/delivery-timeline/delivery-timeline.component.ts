import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import {
  DELIVERY_TIMELINE_DATA,
  DeliveryTimelineItem,
  DeliveryTimelineStatus,
} from '../../utils/delivery-timeline.util';

@Component({
  selector: 'app-delivery-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-timeline.component.html',
})
export class DeliveryTimelineComponent {
  @Input() timeline: DeliveryTimelineItem[] = DELIVERY_TIMELINE_DATA;

  getStatusLabel(status: DeliveryTimelineStatus): string {
    const labels: Record<DeliveryTimelineStatus, string> = {
      COMPLETED: 'Completed',
      CURRENT: 'Current',
      PENDING: 'Pending',
      DELAYED: 'Delayed',
    };

    return labels[status];
  }

  getStatusClass(status: DeliveryTimelineStatus): string {
    const classes: Record<DeliveryTimelineStatus, string> = {
      COMPLETED: 'bg-green-50 text-green-700 border-green-200',
      CURRENT: 'bg-blue-50 text-blue-700 border-blue-200',
      PENDING: 'bg-gray-50 text-gray-500 border-gray-200',
      DELAYED: 'bg-red-50 text-red-700 border-red-200',
    };

    return classes[status];
  }

  getIconClass(status: DeliveryTimelineStatus): string {
    const classes: Record<DeliveryTimelineStatus, string> = {
      COMPLETED: 'bg-green-100 text-green-600',
      CURRENT: 'bg-blue-100 text-blue-600',
      PENDING: 'bg-gray-100 text-gray-400',
      DELAYED: 'bg-red-100 text-red-600',
    };

    return classes[status];
  }

  getLineClass(status: DeliveryTimelineStatus): string {
    if (status === 'COMPLETED') {
      return 'bg-green-200';
    }

    if (status === 'CURRENT') {
      return 'bg-blue-200';
    }

    return 'bg-gray-200';
  }

  trackByTimeline(
    index: number,
    item: DeliveryTimelineItem,
  ): string {
    return item.id;
  }
}