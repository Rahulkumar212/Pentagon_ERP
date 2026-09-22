import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Order } from '../../utils/order-list.util';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './order-detail.component.html',
})
export class OrderDetailComponent {
  @Input()
  order: Order | null = null;

  @Input()
  isOpen = false;

  @Output()
  close = new EventEmitter<void>();

  getSourceClass(
    source: Order['source']
  ): string {
    switch (source) {
      case 'SALES':
        return 'bg-blue-50 text-blue-700';

      case 'GEM':
        return 'bg-purple-50 text-purple-700';

      case 'SALES_DIRECTOR':
        return 'bg-orange-50 text-orange-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getStatusClass(
    status: Order['status']
  ): string {
    switch (status) {
      case 'PENDING':
        return 'bg-gray-50 text-gray-700';

      case 'PROCESSING':
        return 'bg-orange-50 text-orange-700';

      case 'READY_FOR_DISPATCH':
        return 'bg-yellow-50 text-yellow-700';

      case 'DISPATCHED':
        return 'bg-indigo-50 text-indigo-700';

      case 'IN_TRANSIT':
        return 'bg-cyan-50 text-cyan-700';

      case 'DELIVERED':
        return 'bg-green-50 text-green-700';

      case 'DELAYED':
        return 'bg-red-50 text-red-700';

      case 'CANCELLED':
        return 'bg-gray-100 text-gray-500';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getPaymentClass(
    paymentStatus: Order['paymentStatus']
  ): string {
    switch (paymentStatus) {
      case 'PAID':
        return 'bg-green-50 text-green-700';

      case 'PARTIAL':
        return 'bg-yellow-50 text-yellow-700';

      case 'PENDING':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getStatusLabel(
    status: Order['status']
  ): string {
    switch (status) {
      case 'READY_FOR_DISPATCH':
        return 'Ready for Dispatch';

      case 'IN_TRANSIT':
        return 'In Transit';

      default:
        return this.toTitleCase(status);
    }
  }

  getSourceLabel(
    source: Order['source']
  ): string {
    switch (source) {
      case 'SALES_DIRECTOR':
        return 'Sales Director';

      default:
        return this.toTitleCase(source);
    }
  }

  getPaymentLabel(
    paymentStatus: Order['paymentStatus']
  ): string {
    switch (paymentStatus) {
      case 'PAID':
        return 'Paid';

      case 'PARTIAL':
        return 'Partially Paid';

      case 'PENDING':
        return 'Payment Pending';

      default:
        return paymentStatus;
    }
  }

  isStepCompleted(
    step: Order['status']
  ): boolean {
    if (!this.order) {
      return false;
    }

    const steps: Order['status'][] = [
      'PENDING',
      'PROCESSING',
      'READY_FOR_DISPATCH',
      'DISPATCHED',
      'IN_TRANSIT',
      'DELIVERED',
    ];

    const currentIndex = steps.indexOf(
      this.order.status
    );

    const stepIndex = steps.indexOf(step);

    if (currentIndex === -1 || stepIndex === -1) {
      return false;
    }

    return stepIndex <= currentIndex;
  }

  isCurrentStep(
    step: Order['status']
  ): boolean {
    return this.order?.status === step;
  }

  onClose(): void {
    this.close.emit();
  }

  onOverlayClick(
    event: MouseEvent
  ): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  private toTitleCase(value: string): string {
    return value
      .toLowerCase()
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
}