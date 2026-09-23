import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  DISPATCH_QUEUE_DATA,
  DispatchQueueItem,
  DispatchQueuePriority,
  DispatchQueueStatus,
} from '../../utils/dispatch-queue.util';

@Component({
  selector: 'app-dispatch-queue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dispatch-queue.component.html',
})
export class DispatchQueueComponent {
  @Input()
  orders: DispatchQueueItem[] = DISPATCH_QUEUE_DATA;

  @Output()
  viewOrder = new EventEmitter<DispatchQueueItem>();

  @Output()
  processOrder = new EventEmitter<DispatchQueueItem>();

  getStatusLabel(status: DispatchQueueStatus): string {
    switch (status) {
      case 'READY':
        return 'Ready';

      case 'PACKING':
        return 'Packing';

      case 'READY_TO_DISPATCH':
        return 'Ready to Dispatch';

      case 'DISPATCHED':
        return 'Dispatched';

      case 'ON_HOLD':
        return 'On Hold';

      default:
        return status;
    }
  }

  getStatusClass(status: DispatchQueueStatus): string {
    switch (status) {
      case 'READY':
        return 'bg-blue-50 text-blue-700 border-blue-100';

      case 'PACKING':
        return 'bg-yellow-50 text-yellow-700 border-yellow-100';

      case 'READY_TO_DISPATCH':
        return 'bg-indigo-50 text-indigo-700 border-indigo-100';

      case 'DISPATCHED':
        return 'bg-green-50 text-green-700 border-green-100';

      case 'ON_HOLD':
        return 'bg-red-50 text-red-700 border-red-100';

      default:
        return 'bg-gray-50 text-gray-700 border-gray-100';
    }
  }

  getStatusDotClass(status: DispatchQueueStatus): string {
    switch (status) {
      case 'READY':
        return 'bg-blue-500';

      case 'PACKING':
        return 'bg-yellow-500';

      case 'READY_TO_DISPATCH':
        return 'bg-indigo-500';

      case 'DISPATCHED':
        return 'bg-green-500';

      case 'ON_HOLD':
        return 'bg-red-500';

      default:
        return 'bg-gray-400';
    }
  }

  getPriorityClass(priority: DispatchQueuePriority): string {
    switch (priority) {
      case 'HIGH':
        return 'bg-red-50 text-red-700 border-red-100';

      case 'MEDIUM':
        return 'bg-orange-50 text-orange-700 border-orange-100';

      case 'LOW':
        return 'bg-gray-50 text-gray-600 border-gray-100';

      default:
        return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  }

  getSourceClass(source: DispatchQueueItem['source']): string {
    switch (source) {
      case 'SALES':
        return 'bg-blue-50 text-blue-700';

      case 'GEM':
        return 'bg-purple-50 text-purple-700';

      case 'SALES_DIRECTOR':
        return 'bg-orange-50 text-orange-700';

      default:
        return 'bg-gray-50 text-gray-600';
    }
  }

  getSourceLabel(source: DispatchQueueItem['source']): string {
    switch (source) {
      case 'SALES':
        return 'Sales';

      case 'GEM':
        return 'GEM';

      case 'SALES_DIRECTOR':
        return 'Sales Director';

      default:
        return source;
    }
  }

  getPaymentClass(
    status: DispatchQueueItem['paymentStatus'],
  ): string {
    switch (status) {
      case 'PAID':
        return 'text-green-600';

      case 'PENDING':
        return 'text-red-600';

      case 'PARTIAL':
        return 'text-orange-600';

      default:
        return 'text-gray-600';
    }
  }

  getActionLabel(status: DispatchQueueStatus): string {
    switch (status) {
      case 'READY':
        return 'Start Packing';

      case 'PACKING':
        return 'Continue';

      case 'READY_TO_DISPATCH':
        return 'Process Dispatch';

      case 'DISPATCHED':
        return 'View';

      case 'ON_HOLD':
        return 'Review';

      default:
        return 'View';
    }
  }

  onViewOrder(order: DispatchQueueItem): void {
    this.viewOrder.emit(order);
  }

  onProcessOrder(order: DispatchQueueItem): void {
    this.processOrder.emit(order);
  }
}