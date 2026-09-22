import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  SHIPMENT_STATUS_DATA,
  ShipmentStatusItem,
} from '../../utils/shipment-status.util';

@Component({
  selector: 'app-shipment-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipment-status.component.html',
})
export class ShipmentStatusComponent {
  readonly shipmentStatuses: ShipmentStatusItem[] =
    SHIPMENT_STATUS_DATA;

  readonly totalShipments = this.shipmentStatuses.reduce(
    (total, item) => total + item.count,
    0
  );

  getPercentage(count: number): number {
    if (!this.totalShipments) {
      return 0;
    }

    return Number(
      ((count / this.totalShipments) * 100).toFixed(1)
    );
  }

  getProgressWidth(count: number): string {
    return `${this.getPercentage(count)}%`;
  }
}