
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  PERFORMANCE_BREAKDOWN_DATA,
  PerformanceBreakdownItem,
} from '../../utils/performance-breakdown.util';

@Component({
  selector: 'app-performance-breakdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance-breakdown.component.html',
})
export class PerformanceBreakdownComponent {
  breakdownItems: PerformanceBreakdownItem[] =
    PERFORMANCE_BREAKDOWN_DATA;

  get totalDeliveries(): number {
    return this.breakdownItems.reduce(
      (total, item) => total + item.count,
      0
    );
  }

  get delayedCount(): number {
    return this.breakdownItems
      .filter((item) => item.status === 'DELAYED')
      .reduce((total, item) => total + item.count, 0);
  }

  get deliveredCount(): number {
    return this.breakdownItems
      .filter((item) => item.status === 'DELIVERED')
      .reduce((total, item) => total + item.count, 0);
  }

  get deliveredPercentage(): number {
    if (!this.totalDeliveries) {
      return 0;
    }

    return Number(
      ((this.deliveredCount / this.totalDeliveries) * 100).toFixed(1)
    );
  }
}

