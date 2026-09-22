import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  PENDING_ACTIONS,
  PendingAction,
} from '../../utils/pending-actions.util';

@Component({
  selector: 'app-pending-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pending-actions.component.html',
})
export class PendingActionsComponent {
  readonly pendingActions: PendingAction[] = PENDING_ACTIONS;

  getPriorityClass(priority: PendingAction['priority']): string {
    switch (priority) {
      case 'HIGH':
        return 'bg-red-50 text-red-700';

      case 'MEDIUM':
        return 'bg-orange-50 text-orange-700';

      case 'LOW':
        return 'bg-blue-50 text-blue-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getIconClass(type: PendingAction['type']): string {
    switch (type) {
      case 'DISPATCH':
        return 'bg-orange-50 text-orange-600';

      case 'PAYMENT':
        return 'bg-yellow-50 text-yellow-600';

      case 'SHIPMENT':
        return 'bg-blue-50 text-blue-600';

      case 'DELIVERY':
        return 'bg-red-50 text-red-600';

      default:
        return 'bg-gray-50 text-gray-600';
    }
  }
}