import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ORDER_OVERVIEW_DATA,
  OrderOverviewData,
} from '../../utils/order-overview.util';

@Component({
  selector: 'app-order-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-overview.component.html',
})
export class OrderOverviewComponent {
  readonly overviewData: OrderOverviewData[] = ORDER_OVERVIEW_DATA;

  readonly maxValue = Math.max(
    ...this.overviewData.flatMap((item) => [
      item.orders,
      item.shipments,
    ])
  );

  readonly totalOrders = this.overviewData.reduce(
    (total, item) => total + item.orders,
    0
  );

  readonly totalShipments = this.overviewData.reduce(
    (total, item) => total + item.shipments,
    0
  );

  readonly averageOrders = Math.round(
    this.totalOrders / this.overviewData.length
  );

  getBarHeight(value: number): string {
    if (!this.maxValue) {
      return '0%';
    }

    return `${(value / this.maxValue) * 100}%`;
  }
}