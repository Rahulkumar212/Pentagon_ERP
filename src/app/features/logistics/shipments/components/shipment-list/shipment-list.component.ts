import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  SHIPMENT_LIST_DATA,
  ShipmentListItem,
  ShipmentListStatus,
} from '../../utils/shipment-list.util';

@Component({
  selector: 'app-shipment-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipment-list.component.html',
})
export class ShipmentListComponent {
  @Input()
  shipments: ShipmentListItem[] = SHIPMENT_LIST_DATA;

  @Output()
  viewShipment = new EventEmitter<ShipmentListItem>();

  getStatusLabel(status: ShipmentListStatus): string {
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

  getStatusClass(status: ShipmentListStatus): string {
    switch (status) {
      case 'DISPATCHED':
        return 'bg-indigo-50 text-indigo-700 border-indigo-100';

      case 'IN_TRANSIT':
        return 'bg-cyan-50 text-cyan-700 border-cyan-100';

      case 'OUT_FOR_DELIVERY':
        return 'bg-purple-50 text-purple-700 border-purple-100';

      case 'DELIVERED':
        return 'bg-green-50 text-green-700 border-green-100';

      case 'DELAYED':
        return 'bg-red-50 text-red-700 border-red-100';

      case 'RETURNED':
        return 'bg-orange-50 text-orange-700 border-orange-100';

      default:
        return 'bg-gray-50 text-gray-700 border-gray-100';
    }
  }

  getStatusDotClass(status: ShipmentListStatus): string {
    switch (status) {
      case 'DISPATCHED':
        return 'bg-indigo-500';

      case 'IN_TRANSIT':
        return 'bg-cyan-500';

      case 'OUT_FOR_DELIVERY':
        return 'bg-purple-500';

      case 'DELIVERED':
        return 'bg-green-500';

      case 'DELAYED':
        return 'bg-red-500';

      case 'RETURNED':
        return 'bg-orange-500';

      default:
        return 'bg-gray-400';
    }
  }

  onViewShipment(shipment: ShipmentListItem): void {
    this.viewShipment.emit(shipment);
  }
}