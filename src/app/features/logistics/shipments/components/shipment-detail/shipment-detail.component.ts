
import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  ShipmentTrackingItem,
  ShipmentTrackingStatus,
} from '../../utils/shipment-tracking-board.util';

@Component({
  selector: 'app-shipment-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './shipment-detail.component.html',
})
export class ShipmentDetailComponent {

  @Input()
  shipment: ShipmentTrackingItem | null = null;

  @Input()
  isOpen = false;

  @Output()
  close = new EventEmitter<void>();

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

  getStatusIcon(
    status: ShipmentTrackingStatus
  ): string {

    switch (status) {

      case 'DISPATCHED':
        return '📤';

      case 'IN_TRANSIT':
        return '🚚';

      case 'OUT_FOR_DELIVERY':
        return '📍';

      case 'DELIVERED':
        return '✓';

      case 'DELAYED':
        return '⚠';

      case 'RETURNED':
        return '↩';

      default:
        return '•';
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
    step: ShipmentTrackingStatus
  ): boolean {

    if (!this.shipment) {
      return false;
    }

    const currentIndex =
      this.getStepIndex(this.shipment.status);

    const stepIndex =
      this.getStepIndex(step);

    if (currentIndex === -1) {
      return false;
    }

    return stepIndex <= currentIndex;
  }

  isCurrentStep(
    step: ShipmentTrackingStatus
  ): boolean {

    return this.shipment?.status === step;
  }

  getProgressWidth(): number {

    if (!this.shipment) {
      return 0;
    }

    switch (this.shipment.status) {

      case 'DISPATCHED':
        return 15;

      case 'IN_TRANSIT':
        return 55;

      case 'OUT_FOR_DELIVERY':
        return 82;

      case 'DELIVERED':
        return 100;

      default:
        return this.shipment.progress;
    }
  }

  getProgressClass(): string {

    if (!this.shipment) {
      return 'bg-gray-400';
    }

    switch (this.shipment.status) {

      case 'DELAYED':
        return 'bg-red-500';

      case 'RETURNED':
        return 'bg-orange-500';

      case 'DELIVERED':
        return 'bg-green-500';

      default:
        return 'bg-cyan-500';
    }
  }

  onClose(): void {
    this.close.emit();
  }

  onOverlayClick(
    event: MouseEvent
  ): void {

    if (
      event.target === event.currentTarget
    ) {
      this.onClose();
    }
  }
}

