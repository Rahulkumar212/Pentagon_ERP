
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ShipmentKpiStripComponent } from '../components/shipment-kpi-strip/shipment-kpi-strip.component';
import { ShipmentTrackingBoardComponent } from '../components/shipment-tracking-board/shipment-tracking-board.component';

import { ShipmentTrackingItem } from '../utils/shipment-tracking-board.util';

@Component({
  selector: 'app-shipments',
  standalone: true,
  imports: [
    CommonModule,
    ShipmentKpiStripComponent,
    ShipmentTrackingBoardComponent,
  ],
  templateUrl: './shipments.component.html',
})
export class ShipmentsComponent {

  selectedShipment: ShipmentTrackingItem | null = null;

  isTrackingOpen = false;

  /**
   * Open shipment tracking.
   */
  onViewShipment(
    shipment: ShipmentTrackingItem
  ): void {

    this.selectedShipment = shipment;

    this.isTrackingOpen = true;
  }

  /**
   * Close shipment tracking.
   */
  onCloseTracking(): void {

    this.selectedShipment = null;

    this.isTrackingOpen = false;
  }
}

