
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  ORDER_REPORT_DATA,
  ORDER_REPORT_SUMMARY,
  OrderReportItem,
  OrderReportSource,
  OrderReportStatus,
} from '../../utils/order-report.util';

@Component({
  selector: 'app-order-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-report.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderReportComponent {

  orders: OrderReportItem[] = ORDER_REPORT_DATA;

  summary = ORDER_REPORT_SUMMARY;

  // Selected order for detail modal
  selectedOrder: OrderReportItem | null = null;

  // Modal state
  isOrderDetailOpen = false;

  getSourceClass(source: OrderReportSource): string {
    switch (source) {
      case 'GEM':
        return 'bg-purple-50 text-purple-700';

      case 'SALES':
        return 'bg-blue-50 text-blue-700';

      case 'DIRECTOR':
        return 'bg-orange-50 text-orange-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getSourceLabel(source: OrderReportSource): string {
    switch (source) {
      case 'GEM':
        return 'GEM';

      case 'SALES':
        return 'Sales';

      case 'DIRECTOR':
        return 'Director';

      default:
        return source;
    }
  }

  getStatusClass(status: OrderReportStatus): string {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-50 text-yellow-700';

      case 'PROCESSING':
        return 'bg-blue-50 text-blue-700';

      case 'DISPATCHED':
        return 'bg-purple-50 text-purple-700';

      case 'DELIVERED':
        return 'bg-green-50 text-green-700';

      case 'CANCELLED':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getStatusLabel(status: OrderReportStatus): string {
    switch (status) {
      case 'PENDING':
        return 'Pending';

      case 'PROCESSING':
        return 'Processing';

      case 'DISPATCHED':
        return 'Dispatched';

      case 'DELIVERED':
        return 'Delivered';

      case 'CANCELLED':
        return 'Cancelled';

      default:
        return status;
    }
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  }

  getSourceCount(source: OrderReportSource): number {
    return this.orders.filter(
      (order) => order.source === source
    ).length;
  }

  getStatusCount(status: OrderReportStatus): number {
    return this.orders.filter(
      (order) => order.status === status
    ).length;
  }

  /**
   * Open order detail modal
   */
  onViewOrder(order: OrderReportItem): void {
    this.selectedOrder = order;
    this.isOrderDetailOpen = true;
  }

  /**
   * Close order detail modal
   */
  closeOrderDetail(): void {
    this.isOrderDetailOpen = false;
    this.selectedOrder = null;
  }
}

