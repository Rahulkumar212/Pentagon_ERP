import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { PendingAction } from '../../utils/pending-action-list.util';

@Component({
  selector: 'app-pending-action-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pending-action-detail.component.html',
})
export class PendingActionDetailComponent {
  @Input()
  action: PendingAction | null = null;

  @Input()
  isOpen = false;

  @Output()
  close = new EventEmitter<void>();

  @Output()
  takeAction = new EventEmitter<PendingAction>();

  getPriorityClass(
    priority: PendingAction['priority']
  ): string {
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

  getStatusClass(
    status: PendingAction['status']
  ): string {
    switch (status) {
      case 'PENDING':
        return 'bg-orange-50 text-orange-700';

      case 'IN_PROGRESS':
        return 'bg-blue-50 text-blue-700';

      case 'OVERDUE':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getTypeClass(
    type: PendingAction['type']
  ): string {
    switch (type) {
      case 'DISPATCH':
        return 'bg-purple-50 text-purple-700';

      case 'PAYMENT':
        return 'bg-yellow-50 text-yellow-700';

      case 'SHIPMENT':
        return 'bg-blue-50 text-blue-700';

      case 'DELIVERY':
        return 'bg-red-50 text-red-700';

      case 'APPROVAL':
        return 'bg-green-50 text-green-700';

      case 'STOCK':
        return 'bg-indigo-50 text-indigo-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  onClose(): void {
    this.close.emit();
  }

  onTakeAction(): void {
    if (!this.action) {
      return;
    }

    this.takeAction.emit(this.action);
  }
}