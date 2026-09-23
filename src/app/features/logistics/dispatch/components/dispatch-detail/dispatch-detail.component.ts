import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  DEFAULT_DISPATCH_DETAIL,
  DispatchDetail,
  DispatchDetailActivity,
  DispatchDetailStatus,
} from '../../utils/dispatch-detail.util';

@Component({
  selector: 'app-dispatch-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dispatch-detail.component.html',
})
export class DispatchDetailComponent {
  @Input()
  detail: DispatchDetail = {
    ...DEFAULT_DISPATCH_DETAIL,
    items: DEFAULT_DISPATCH_DETAIL.items.map((item) => ({
      ...item,
    })),
    activities: DEFAULT_DISPATCH_DETAIL.activities.map(
      (activity) => ({
        ...activity,
      }),
    ),
  };

  @Input()
  isOpen = false;

  @Output()
  close = new EventEmitter<void>();

  @Output()
  process = new EventEmitter<DispatchDetail>();

  @Output()
  markReady = new EventEmitter<DispatchDetail>();

  @Output()
  confirmDispatch = new EventEmitter<DispatchDetail>();

  getStatusLabel(status: DispatchDetailStatus): string {
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

  getStatusClass(status: DispatchDetailStatus): string {
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

  getPriorityClass(
    priority: DispatchDetail['priority'],
  ): string {
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

  getSourceClass(
    source: DispatchDetail['source'],
  ): string {
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

  getSourceLabel(
    source: DispatchDetail['source'],
  ): string {
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
    status: DispatchDetail['paymentStatus'],
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

  getActivityDotClass(
    status: DispatchDetailActivity['status'],
  ): string {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-500';

      case 'CURRENT':
        return 'bg-indigo-500';

      case 'PENDING':
        return 'bg-gray-300';

      default:
        return 'bg-gray-300';
    }
  }

  getActivityIconClass(
    status: DispatchDetailActivity['status'],
  ): string {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-50 text-green-600 border-green-100';

      case 'CURRENT':
        return 'bg-indigo-50 text-indigo-600 border-indigo-100';

      case 'PENDING':
        return 'bg-gray-50 text-gray-400 border-gray-100';

      default:
        return 'bg-gray-50 text-gray-400 border-gray-100';
    }
  }

  getActivityStatusClass(
    status: DispatchDetailActivity['status'],
  ): string {
    switch (status) {
      case 'COMPLETED':
        return 'text-green-600';

      case 'CURRENT':
        return 'text-indigo-600';

      case 'PENDING':
        return 'text-gray-400';

      default:
        return 'text-gray-400';
    }
  }

  getActivityStatusLabel(
    status: DispatchDetailActivity['status'],
  ): string {
    switch (status) {
      case 'COMPLETED':
        return 'Completed';

      case 'CURRENT':
        return 'Current';

      case 'PENDING':
        return 'Pending';

      default:
        return status;
    }
  }

  getTotalQuantity(): number {
    return this.detail.items.reduce(
      (total, item) => total + item.quantity,
      0,
    );
  }

  canProcess(): boolean {
    return (
      this.detail.status === 'READY' ||
      this.detail.status === 'PACKING'
    );
  }

  canMarkReady(): boolean {
    return this.detail.status === 'PACKING';
  }

  canConfirmDispatch(): boolean {
    return this.detail.status === 'READY_TO_DISPATCH';
  }

  onProcess(): void {
    this.process.emit(this.detail);
  }

  onMarkReady(): void {
    this.markReady.emit(this.detail);
  }

  onConfirmDispatch(): void {
    this.confirmDispatch.emit(this.detail);
  }

  onClose(): void {
    this.close.emit();
  }

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}