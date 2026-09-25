
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  DELAYED_SHIPMENT_REPORT_DATA,
  DelayedShipmentReportItem,
  DelayedShipmentReportReason,
} from '../../utils/delayed-shipment-report.util';

@Component({
  selector: 'app-delayed-shipment-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delayed-shipment-report.component.html',
})
export class DelayedShipmentReportComponent {
  delayedShipments: DelayedShipmentReportItem[] =
    DELAYED_SHIPMENT_REPORT_DATA;

  /**
   * Typed reason list.
   * Keeping this in TS avoids strict-template type errors.
   */
  readonly delayReasons: DelayedShipmentReportReason[] = [
    'CARRIER_DELAY',
    'ADDRESS_ISSUE',
    'CUSTOMS',
    'STOCK_ISSUE',
    'WEATHER',
    'CUSTOMER_UNAVAILABLE',
    'OTHER',
  ];

  get totalDelayed(): number {
    return this.delayedShipments.length;
  }

  get totalDelayDays(): number {
    return this.delayedShipments.reduce(
      (total, item) => total + item.delayDays,
      0
    );
  }

  get averageDelayDays(): number {
    if (!this.totalDelayed) {
      return 0;
    }

    return Number(
      (this.totalDelayDays / this.totalDelayed).toFixed(1)
    );
  }

  get criticalCount(): number {
    return this.delayedShipments.filter(
      (item) => item.priority === 'HIGH'
    ).length;
  }

  get resolvingCount(): number {
    return this.delayedShipments.filter(
      (item) => item.status === 'RESOLVING'
    ).length;
  }

  get delayReasonCount(): number {
    return new Set(
      this.delayedShipments.map((item) => item.reason)
    ).size;
  }

  getReasonLabel(
    reason: DelayedShipmentReportReason
  ): string {
    switch (reason) {
      case 'CARRIER_DELAY':
        return 'Carrier Delay';

      case 'ADDRESS_ISSUE':
        return 'Address Issue';

      case 'CUSTOMS':
        return 'Customs';

      case 'STOCK_ISSUE':
        return 'Stock Issue';

      case 'WEATHER':
        return 'Weather';

      case 'CUSTOMER_UNAVAILABLE':
        return 'Customer Unavailable';

      case 'OTHER':
        return 'Other';

      default:
        return reason;
    }
  }

  getReasonCount(
    reason: DelayedShipmentReportReason
  ): number {
    return this.delayedShipments.filter(
      (item) => item.reason === reason
    ).length;
  }

  getReasonPercentage(
    reason: DelayedShipmentReportReason
  ): number {
    if (!this.totalDelayed) {
      return 0;
    }

    return Math.round(
      (this.getReasonCount(reason) / this.totalDelayed) * 100
    );
  }

  getStatusLabel(
    status: DelayedShipmentReportItem['status']
  ): string {
    switch (status) {
      case 'DELAYED':
        return 'Delayed';

      case 'CRITICAL':
        return 'Critical';

      case 'RESOLVING':
        return 'Resolving';

      default:
        return status;
    }
  }

  getStatusClass(
    status: DelayedShipmentReportItem['status']
  ): string {
    switch (status) {
      case 'DELAYED':
        return 'bg-orange-50 text-orange-700';

      case 'CRITICAL':
        return 'bg-red-50 text-red-700';

      case 'RESOLVING':
        return 'bg-blue-50 text-blue-700';

      default:
        return 'bg-gray-100 text-gray-700';
    }
  }

  getPriorityClass(
    priority: DelayedShipmentReportItem['priority']
  ): string {
    switch (priority) {
      case 'HIGH':
        return 'bg-red-50 text-red-700';

      case 'MEDIUM':
        return 'bg-orange-50 text-orange-700';

      case 'LOW':
        return 'bg-green-50 text-green-700';

      default:
        return 'bg-gray-100 text-gray-700';
    }
  }

  getPriorityLabel(
    priority: DelayedShipmentReportItem['priority']
  ): string {
    switch (priority) {
      case 'HIGH':
        return 'High';

      case 'MEDIUM':
        return 'Medium';

      case 'LOW':
        return 'Low';

      default:
        return priority;
    }
  }

  getDelayClass(delayDays: number): string {
    if (delayDays >= 4) {
      return 'text-red-600';
    }

    if (delayDays >= 2) {
      return 'text-orange-600';
    }

    return 'text-yellow-600';
  }
}

