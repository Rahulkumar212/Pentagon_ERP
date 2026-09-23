import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
} from '@angular/core';

import {
  SHIPMENT_TIMELINE_DATA,
  ShipmentTimelineEvent,
  ShipmentTimelineStatus,
} from '../../utils/shipment-timeline.util';

@Component({
  selector: 'app-shipment-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipment-timeline.component.html',
})
export class ShipmentTimelineComponent {
  @Input()
  shipmentNumber = 'SHP-00572';

  @Input()
  events: ShipmentTimelineEvent[] = SHIPMENT_TIMELINE_DATA;

  getStatusLabel(status: ShipmentTimelineStatus): string {
    switch (status) {
      case 'COMPLETED':
        return 'Completed';

      case 'CURRENT':
        return 'Current';

      case 'PENDING':
        return 'Pending';

      case 'DELAYED':
        return 'Delayed';

      default:
        return status;
    }
  }

  getStatusClass(status: ShipmentTimelineStatus): string {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-50 text-green-700 border-green-100';

      case 'CURRENT':
        return 'bg-cyan-50 text-cyan-700 border-cyan-100';

      case 'PENDING':
        return 'bg-gray-50 text-gray-500 border-gray-100';

      case 'DELAYED':
        return 'bg-red-50 text-red-700 border-red-100';

      default:
        return 'bg-gray-50 text-gray-500 border-gray-100';
    }
  }

  getDotClass(status: ShipmentTimelineStatus): string {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-500';

      case 'CURRENT':
        return 'bg-cyan-500';

      case 'PENDING':
        return 'bg-gray-300';

      case 'DELAYED':
        return 'bg-red-500';

      default:
        return 'bg-gray-300';
    }
  }

  getIconContainerClass(status: ShipmentTimelineStatus): string {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-50 text-green-600 border-green-200';

      case 'CURRENT':
        return 'bg-cyan-50 text-cyan-600 border-cyan-200';

      case 'PENDING':
        return 'bg-gray-50 text-gray-400 border-gray-200';

      case 'DELAYED':
        return 'bg-red-50 text-red-600 border-red-200';

      default:
        return 'bg-gray-50 text-gray-400 border-gray-200';
    }
  }

  isLastEvent(index: number): boolean {
    return index === this.events.length - 1;
  }
}