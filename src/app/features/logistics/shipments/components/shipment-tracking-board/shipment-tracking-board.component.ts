
import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

import {
  SHIPMENT_TRACKING_DATA,
  ShipmentTrackingItem,
  ShipmentTrackingStatus,
} from '../../utils/shipment-tracking-board.util';

@Component({
  selector: 'app-shipment-tracking-board',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './shipment-tracking-board.component.html',
})
export class ShipmentTrackingBoardComponent {

  readonly shipments: ShipmentTrackingItem[] =
    SHIPMENT_TRACKING_DATA;

  @Output()
  viewShipment =
    new EventEmitter<ShipmentTrackingItem>();

  readonly trackingSteps: ShipmentTrackingStatus[] = [
    'DISPATCHED',
    'IN_TRANSIT',
    'OUT_FOR_DELIVERY',
    'DELIVERED',
  ];

  getStatusLabel(
    status: ShipmentTrackingStatus
  ): string {

    switch (status) {

      case 'DISPATCHED':
        return 'Dispatched';

      case 'IN_TRANSIT':
        return 'In Transit';

      case 'OUT_FOR_DELIVERY':
        return 'Out for Delivery';

      case 'DELIVERED':
        return 'Delivered';

      case 'DELAYED':
        return 'Delayed';

      case 'RETURNED':
        return 'Returned';

      default:
        return status;
    }
  }

  getStatusClass(
    status: ShipmentTrackingStatus
  ): string {

    switch (status) {

      case 'DISPATCHED':
        return 'bg-indigo-50 text-indigo-700';

      case 'IN_TRANSIT':
        return 'bg-cyan-50 text-cyan-700';

      case 'OUT_FOR_DELIVERY':
        return 'bg-purple-50 text-purple-700';

      case 'DELIVERED':
        return 'bg-green-50 text-green-700';

      case 'DELAYED':
        return 'bg-red-50 text-red-700';

      case 'RETURNED':
        return 'bg-orange-50 text-orange-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getStepIndex(
    status: ShipmentTrackingStatus
  ): number {

    switch (status) {

      case 'DISPATCHED':
        return 0;

      case 'IN_TRANSIT':
        return 1;

      case 'OUT_FOR_DELIVERY':
        return 2;

      case 'DELIVERED':
        return 3;

      default:
        return -1;
    }
  }

  isStepCompleted(
    shipment: ShipmentTrackingItem,
    step: ShipmentTrackingStatus
  ): boolean {

    const currentIndex =
      this.getStepIndex(shipment.status);

    const stepIndex =
      this.getStepIndex(step);

    if (currentIndex === -1) {
      return false;
    }

    return stepIndex <= currentIndex;
  }

  isCurrentStep(
    shipment: ShipmentTrackingItem,
    step: ShipmentTrackingStatus
  ): boolean {

    return shipment.status === step;
  }

  getProgressWidth(
    shipment: ShipmentTrackingItem
  ): number {

    switch (shipment.status) {

      case 'DISPATCHED':
        return 15;

      case 'IN_TRANSIT':
        return 45;

      case 'OUT_FOR_DELIVERY':
        return 75;

      case 'DELIVERED':
        return 100;

      case 'DELAYED':
        return shipment.progress;

      case 'RETURNED':
        return shipment.progress;

      default:
        return 0;
    }
  }

  getProgressClass(
    shipment: ShipmentTrackingItem
  ): string {

    if (shipment.status === 'DELAYED') {
      return 'bg-red-500';
    }

    if (shipment.status === 'RETURNED') {
      return 'bg-orange-500';
    }

    if (shipment.status === 'DELIVERED') {
      return 'bg-green-500';
    }

    return 'bg-cyan-500';
  }

  onViewShipment(
    shipment: ShipmentTrackingItem
  ): void {

    this.viewShipment.emit(shipment);
  }
}

