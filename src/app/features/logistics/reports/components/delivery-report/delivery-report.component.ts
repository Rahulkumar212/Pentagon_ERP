
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  DELIVERY_REPORT_DATA,
  DeliveryReportItem,
} from '../../utils/delivery-report.util';

@Component({
  selector: 'app-delivery-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-report.component.html',
})
export class DeliveryReportComponent {
  deliveryItems: DeliveryReportItem[] = DELIVERY_REPORT_DATA;

  get totalDeliveries(): number {
    return this.deliveryItems.reduce(
      (total, item) => total + item.totalDeliveries,
      0
    );
  }

  get deliveredCount(): number {
    return this.deliveryItems.reduce(
      (total, item) => total + item.delivered,
      0
    );
  }

  get inTransitCount(): number {
    return this.deliveryItems.reduce(
      (total, item) => total + item.inTransit,
      0
    );
  }

  get outForDeliveryCount(): number {
    return this.deliveryItems.reduce(
      (total, item) => total + item.outForDelivery,
      0
    );
  }

  get delayedCount(): number {
    return this.deliveryItems.reduce(
      (total, item) => total + item.delayed,
      0
    );
  }

  get returnedCount(): number {
    return this.deliveryItems.reduce(
      (total, item) => total + item.returned,
      0
    );
  }

  get deliveredRate(): number {
    if (!this.totalDeliveries) {
      return 0;
    }

    return Number(
      ((this.deliveredCount / this.totalDeliveries) * 100).toFixed(1)
    );
  }

  get onTimeRate(): number {
    if (!this.totalDeliveries) {
      return 0;
    }

    const onTime = this.deliveryItems.reduce(
      (total, item) => total + item.onTimeDeliveries,
      0
    );

    return Number(
      ((onTime / this.totalDeliveries) * 100).toFixed(1)
    );
  }

  getStatusLabel(status: DeliveryReportItem['status']): string {
    switch (status) {
      case 'GOOD':
        return 'Good';

      case 'ATTENTION':
        return 'Attention';

      case 'CRITICAL':
        return 'Critical';

      default:
        return status;
    }
  }

  getStatusClass(status: DeliveryReportItem['status']): string {
    switch (status) {
      case 'GOOD':
        return 'bg-green-50 text-green-700';

      case 'ATTENTION':
        return 'bg-orange-50 text-orange-700';

      case 'CRITICAL':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-100 text-gray-700';
    }
  }

  getProgressClass(status: DeliveryReportItem['status']): string {
    switch (status) {
      case 'GOOD':
        return 'bg-green-500';

      case 'ATTENTION':
        return 'bg-orange-500';

      case 'CRITICAL':
        return 'bg-red-500';

      default:
        return 'bg-gray-500';
    }
  }

  getDeliveryProgress(item: DeliveryReportItem): number {
    if (!item.totalDeliveries) {
      return 0;
    }

    return Math.min(
      100,
      Math.round((item.delivered / item.totalDeliveries) * 100)
    );
  }
}

