import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  ORDER_SOURCE_OVERVIEW,
  OrderSourceOverview,
} from '../../utils/order-source-overview.util';

@Component({
  selector: 'app-order-source-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-source-overview.component.html',
})
export class OrderSourceOverviewComponent {
  readonly sourceOverview: OrderSourceOverview[] =
    ORDER_SOURCE_OVERVIEW;

  getTotalOrders(): number {
    return this.sourceOverview.reduce(
      (total, source) => total + source.totalOrders,
      0
    );
  }

  getPercentage(totalOrders: number): number {
    const total = this.getTotalOrders();

    if (!total) {
      return 0;
    }

    return Math.round((totalOrders / total) * 100);
  }

  getSourceColor(source: OrderSourceOverview['source']): string {
    switch (source) {
      case 'SALES':
        return 'bg-blue-50 text-blue-600';

      case 'GEM':
        return 'bg-purple-50 text-purple-600';

      case 'SALES_DIRECTOR':
        return 'bg-orange-50 text-orange-600';

      default:
        return 'bg-gray-50 text-gray-600';
    }
  }

  getProgressColor(source: OrderSourceOverview['source']): string {
    switch (source) {
      case 'SALES':
        return 'bg-blue-500';

      case 'GEM':
        return 'bg-purple-500';

      case 'SALES_DIRECTOR':
        return 'bg-orange-500';

      default:
        return 'bg-gray-400';
    }
  }
}