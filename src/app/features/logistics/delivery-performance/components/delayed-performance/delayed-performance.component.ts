
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  DELAYED_PERFORMANCE_DATA,
  DelayedPerformanceItem,
  DelayReason,
  DelayedShipmentStatus,
} from '../../utils/delayed-performance.util';

@Component({
  selector: 'app-delayed-performance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delayed-performance.component.html',
})
export class DelayedPerformanceComponent {
  delayedShipments: DelayedPerformanceItem[] =
    DELAYED_PERFORMANCE_DATA;

  get totalDelayed(): number {
    return this.delayedShipments.length;
  }

  get criticalCount(): number {
    return this.delayedShipments.filter(
      (item) => item.status === 'CRITICAL'
    ).length;
  }

  get resolvingCount(): number {
    return this.delayedShipments.filter(
      (item) => item.status === 'RESOLVING'
    ).length;
  }

  get averageDelay(): number {
    if (!this.delayedShipments.length) {
      return 0;
    }

    const total = this.delayedShipments.reduce(
      (sum, item) => sum + item.delayDays,
      0
    );

    return Number(
      (total / this.delayedShipments.length).toFixed(1)
    );
  }

  getReasonLabel(reason: DelayReason): string {
    const labels: Record<DelayReason, string> = {
      CARRIER_DELAY: 'Carrier Delay',
      ADDRESS_ISSUE: 'Address Issue',
      CUSTOMS: 'Customs',
      STOCK_ISSUE: 'Stock Issue',
      WEATHER: 'Weather',
      CUSTOMER_UNAVAILABLE: 'Customer Unavailable',
      OTHER: 'Other',
    };

    return labels[reason];
  }

  getStatusLabel(status: DelayedShipmentStatus): string {
    const labels: Record<DelayedShipmentStatus, string> = {
      DELAYED: 'Delayed',
      CRITICAL: 'Critical',
      RESOLVING: 'Resolving',
    };

    return labels[status];
  }

  getStatusClass(status: DelayedShipmentStatus): string {
    const classes: Record<DelayedShipmentStatus, string> = {
      DELAYED: 'bg-orange-50 text-orange-700',
      CRITICAL: 'bg-red-50 text-red-700',
      RESOLVING: 'bg-blue-50 text-blue-700',
    };

    return classes[status];
  }

  getPriorityClass(priority: 'HIGH' | 'MEDIUM' | 'LOW'): string {
    const classes = {
      HIGH: 'bg-red-50 text-red-700',
      MEDIUM: 'bg-orange-50 text-orange-700',
      LOW: 'bg-gray-100 text-gray-600',
    };

    return classes[priority];
  }
}

