import { Component } from '@angular/core';
import {
  ORDER_STATS,
  OrderStat
} from '../../utils/order-tracking.utils';

@Component({
  selector: 'app-order-stats',
  standalone: true,
  imports: [],
  templateUrl: './order-stats.component.html'
})
export class OrderStatsComponent {
  readonly stats: OrderStat[] = ORDER_STATS;
}