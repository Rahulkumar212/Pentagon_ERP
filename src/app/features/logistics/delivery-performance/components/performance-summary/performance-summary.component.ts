
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  PERFORMANCE_SUMMARY_DATA,
  PerformanceSummaryCard,
} from '../../utils/performance-summary.util';

@Component({
  selector: 'app-performance-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance-summary.component.html',
})
export class PerformanceSummaryComponent {
  summaryCards: PerformanceSummaryCard[] = PERFORMANCE_SUMMARY_DATA;
}

