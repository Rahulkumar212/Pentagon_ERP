import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  STOCK_OVERVIEW_DATA,
  StockOverviewItem,
} from '../../utils/stock-overview.util';

@Component({
  selector: 'app-stock-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-overview.component.html',
})
export class StockOverviewComponent {
  overviewItems: StockOverviewItem[] = STOCK_OVERVIEW_DATA;

  get totalStock(): number {
    return this.overviewItems.reduce(
      (total, item) => total + item.totalUnits,
      0
    );
  }

  get totalAvailable(): number {
    return this.overviewItems.reduce(
      (total, item) => total + item.availableUnits,
      0
    );
  }

  get totalReserved(): number {
    return this.overviewItems.reduce(
      (total, item) => total + item.reservedUnits,
      0
    );
  }

  get totalLowStock(): number {
    return this.overviewItems.filter(
      (item) => item.status === 'LOW_STOCK'
    ).length;
  }

  getStatusLabel(status: StockOverviewItem['status']): string {
    switch (status) {
      case 'HEALTHY':
        return 'Healthy';

      case 'LOW_STOCK':
        return 'Low Stock';

      case 'OUT_OF_STOCK':
        return 'Out of Stock';

      default:
        return status;
    }
  }

  getStatusClass(status: StockOverviewItem['status']): string {
    switch (status) {
      case 'HEALTHY':
        return 'bg-green-50 text-green-700';

      case 'LOW_STOCK':
        return 'bg-orange-50 text-orange-700';

      case 'OUT_OF_STOCK':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getAvailabilityPercentage(item: StockOverviewItem): number {
    if (item.totalUnits === 0) {
      return 0;
    }

    return Math.round(
      (item.availableUnits / item.totalUnits) * 100
    );
  }
}