
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  DELIVERY_METRICS_DATA,
  DeliveryMetric,
} from '../../utils/delivery-metrics.util';

@Component({
  selector: 'app-delivery-metrics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-metrics.component.html',
})
export class DeliveryMetricsComponent {
  metrics: DeliveryMetric[] = DELIVERY_METRICS_DATA;
}

