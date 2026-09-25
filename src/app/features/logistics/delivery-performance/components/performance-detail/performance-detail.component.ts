
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  PERFORMANCE_DETAIL_DATA,
  PERFORMANCE_DETAIL_SUMMARY,
  PerformanceDetailItem,
  PerformanceDetailSummary,
} from '../../utils/performance-detail.util';

@Component({
  selector: 'app-performance-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance-detail.component.html',
})
export class PerformanceDetailComponent {
  performanceDetails: PerformanceDetailItem[] =
    PERFORMANCE_DETAIL_DATA;

  summary: PerformanceDetailSummary =
    PERFORMANCE_DETAIL_SUMMARY;

  getCarrierPerformanceClass(rate: number): string {
    if (rate >= 90) {
      return 'text-green-600';
    }

    if (rate >= 80) {
      return 'text-orange-600';
    }

    return 'text-red-600';
  }

  getCarrierProgressClass(rate: number): string {
    if (rate >= 90) {
      return 'bg-green-500';
    }

    if (rate >= 80) {
      return 'bg-orange-500';
    }

    return 'bg-red-500';
  }
}

