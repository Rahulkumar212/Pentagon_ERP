import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  DISPATCH_SUMMARY_ITEMS,
  DispatchSummaryItem,
} from '../../utils/dispatch-summary.util';

@Component({
  selector: 'app-dispatch-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dispatch-summary.component.html',
})
export class DispatchSummaryComponent {
  readonly summaryItems: DispatchSummaryItem[] =
    DISPATCH_SUMMARY_ITEMS;

  getValueClass(type: DispatchSummaryItem['type']): string {
    switch (type) {
      case 'READY':
        return 'text-orange-600';

      case 'PACKING':
        return 'text-blue-600';

      case 'READY_TO_DISPATCH':
        return 'text-indigo-600';

      case 'DISPATCHED':
        return 'text-green-600';

      case 'ON_HOLD':
        return 'text-red-600';

      case 'HIGH_PRIORITY':
        return 'text-purple-600';

      default:
        return 'text-gray-900';
    }
  }

  getIconClass(type: DispatchSummaryItem['type']): string {
    switch (type) {
      case 'READY':
        return 'bg-orange-50 text-orange-600';

      case 'PACKING':
        return 'bg-blue-50 text-blue-600';

      case 'READY_TO_DISPATCH':
        return 'bg-indigo-50 text-indigo-600';

      case 'DISPATCHED':
        return 'bg-green-50 text-green-600';

      case 'ON_HOLD':
        return 'bg-red-50 text-red-600';

      case 'HIGH_PRIORITY':
        return 'bg-purple-50 text-purple-600';

      default:
        return 'bg-gray-100 text-gray-600';
    }
  }

  getTrendClass(
    trendType: DispatchSummaryItem['trendType'],
  ): string {
    switch (trendType) {
      case 'POSITIVE':
        return 'text-green-600';

      case 'WARNING':
        return 'text-red-600';

      case 'NEUTRAL':
        return 'text-gray-500';

      default:
        return 'text-gray-500';
    }
  }
}