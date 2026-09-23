
import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

import {
  DELAYED_SHIPMENTS,
  DelayedShipment,
} from '../../utils/delayed-shipments.util';

@Component({
  selector: 'app-delayed-shipments',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './delayed-shipments.component.html',
})
export class DelayedShipmentsComponent {

  readonly delayedShipments: DelayedShipment[] =
    DELAYED_SHIPMENTS;

  @Output()
  viewShipment =
    new EventEmitter<DelayedShipment>();

  getSeverityClass(
    severity: DelayedShipment['severity']
  ): string {

    switch (severity) {

      case 'CRITICAL':
        return 'bg-red-50 text-red-700 border-red-100';

      case 'HIGH':
        return 'bg-orange-50 text-orange-700 border-orange-100';

      case 'MEDIUM':
        return 'bg-yellow-50 text-yellow-700 border-yellow-100';

      default:
        return 'bg-gray-50 text-gray-700 border-gray-100';
    }
  }

  getSeverityDotClass(
    severity: DelayedShipment['severity']
  ): string {

    switch (severity) {

      case 'CRITICAL':
        return 'bg-red-500';

      case 'HIGH':
        return 'bg-orange-500';

      case 'MEDIUM':
        return 'bg-yellow-500';

      default:
        return 'bg-gray-400';
    }
  }

  getDelayText(
    daysLate: number
  ): string {

    if (daysLate === 1) {
      return '1 day late';
    }

    return `${daysLate} days late`;
  }

  onViewShipment(
    shipment: DelayedShipment
  ): void {

    this.viewShipment.emit(shipment);
  }
}

