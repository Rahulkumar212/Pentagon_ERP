import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DELIVERY_PERFORMANCE,
  DeliveryPerformance,
} from '../../utils/delivery-performance.util';

@Component({
  selector: 'app-delivery-performance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-performance.component.html',
})
export class DeliveryPerformanceComponent {
  readonly performance: DeliveryPerformance = DELIVERY_PERFORMANCE;

  getProgress(value: number): string {
    return `${Math.min(Math.max(value, 0), 100)}%`;
  }
}