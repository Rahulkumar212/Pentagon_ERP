import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ORDER_TIMELINE_STEPS,
  OrderTimelineItem,
  OrderTimelineStep
} from '../../utils/order-timeline.utils';

@Component({
  selector: 'app-order-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-timeline.component.html'
})
export class OrderTimelineComponent implements OnChanges {

  @Input({ required: true })
  status!: string;

  @Input()
  orderDate = '';

  @Input()
  expectedDelivery = '';

  timeline: OrderTimelineItem[] = [];

  ngOnChanges(): void {
    this.buildTimeline();
  }

  private buildTimeline(): void {
    const currentIndex = this.getCurrentStepIndex();

    this.timeline = ORDER_TIMELINE_STEPS.map(
      (step, index): OrderTimelineItem => ({
        title: step,
        description: this.getDescription(step),
        date: this.getDate(step, index),
        completed: index < currentIndex,
        current: index === currentIndex
      })
    );
  }

  private getCurrentStepIndex(): number {
    switch (this.status) {
      case 'PENDING':
        return 0;

      case 'APPROVED':
        return 1;

      case 'PROCESSING':
        return 2;

      case 'DISPATCHED':
        return 3;

      case 'DELIVERED':
        return 4;

      case 'DELAYED':
        return 2;

      case 'CANCELLED':
        return 1;

      default:
        return 0;
    }
  }

  private getDescription(step: OrderTimelineStep): string {
    const descriptions: Record<OrderTimelineStep, string> = {
      'Order Created': 'Order has been created successfully.',
      'Approved': 'Order has been approved for processing.',
      'Processing': 'Order is currently being processed.',
      'Dispatched': 'Order has been dispatched for delivery.',
      'Delivered': 'Order has been delivered successfully.'
    };

    return descriptions[step];
  }

  private getDate(
    step: OrderTimelineStep,
    index: number
  ): string | undefined {

    if (index === 0 && this.orderDate) {
      return this.orderDate;
    }

    if (step === 'Delivered' && this.status === 'DELIVERED') {
      return this.expectedDelivery || undefined;
    }

    return undefined;
  }
}