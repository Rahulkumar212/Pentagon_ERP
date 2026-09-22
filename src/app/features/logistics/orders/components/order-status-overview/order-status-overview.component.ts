import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  ORDER_STATUS_OVERVIEW,
  OrderStatusOverview,
} from '../../utils/order-status-overview.util';

@Component({
  selector: 'app-order-status-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-status-overview.component.html',
})
export class OrderStatusOverviewComponent {
  readonly statusOverview: OrderStatusOverview[] =
    ORDER_STATUS_OVERVIEW;

  getTotalOrders(): number {
    return this.statusOverview.reduce(
      (total, status) => total + status.count,
      0
    );
  }

  getPercentage(count: number): number {
    const total = this.getTotalOrders();

    if (!total) {
      return 0;
    }

    return Math.round((count / total) * 100);
  }

  getStatusClass(
    status: OrderStatusOverview['status']
  ): string {
    switch (status) {
      case 'PENDING':
        return 'bg-gray-50 text-gray-600';

      case 'PROCESSING':
        return 'bg-orange-50 text-orange-600';

      case 'READY_FOR_DISPATCH':
        return 'bg-yellow-50 text-yellow-600';

      case 'DISPATCHED':
        return 'bg-indigo-50 text-indigo-600';

      case 'IN_TRANSIT':
        return 'bg-cyan-50 text-cyan-600';

      case 'DELIVERED':
        return 'bg-green-50 text-green-600';

      case 'DELAYED':
        return 'bg-red-50 text-red-600';

      default:
        return 'bg-gray-50 text-gray-600';
    }
  }

  getProgressClass(
    status: OrderStatusOverview['status']
  ): string {
    switch (status) {
      case 'PENDING':
        return 'bg-gray-400';

      case 'PROCESSING':
        return 'bg-orange-500';

      case 'READY_FOR_DISPATCH':
        return 'bg-yellow-500';

      case 'DISPATCHED':
        return 'bg-indigo-500';

      case 'IN_TRANSIT':
        return 'bg-cyan-500';

      case 'DELIVERED':
        return 'bg-green-500';

      case 'DELAYED':
        return 'bg-red-500';

      default:
        return 'bg-gray-400';
    }
  }
}