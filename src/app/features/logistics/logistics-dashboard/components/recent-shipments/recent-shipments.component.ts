import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  RECENT_SHIPMENTS,
  RecentShipment,
} from '../../utils/recent-shipments.util';

@Component({
  selector: 'app-recent-shipments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-shipments.component.html',
})
export class RecentShipmentsComponent {
  readonly shipments: RecentShipment[] = RECENT_SHIPMENTS;

  getStatusClass(status: RecentShipment['status']): string {
    switch (status) {
      case 'DELIVERED':
        return 'bg-green-50 text-green-700';

      case 'IN_TRANSIT':
        return 'bg-blue-50 text-blue-700';

      case 'PENDING':
        return 'bg-orange-50 text-orange-700';

      case 'DELAYED':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }
}