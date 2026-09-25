
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PerformanceSummaryComponent } from '../components/performance-summary/performance-summary.component';
import { DeliveryMetricsComponent } from '../components/delivery-metrics/delivery-metrics.component';
import { PerformanceBreakdownComponent } from '../components/performance-breakdown/performance-breakdown.component';
import { DelayedPerformanceComponent } from '../components/delayed-performance/delayed-performance.component';
import { PerformanceDetailComponent } from '../components/performance-detail/performance-detail.component';


@Component({
  selector: 'app-delivery-performance',
  standalone: true,
  imports: [
    CommonModule,
    PerformanceSummaryComponent,
    DeliveryMetricsComponent,
    PerformanceBreakdownComponent,
    DelayedPerformanceComponent,
    PerformanceDetailComponent,
  ],
  templateUrl: './delivery-performance.component.html',
})
export class DeliveryPerformanceComponent {}

