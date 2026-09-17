import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Order } from '../../utils/order-table.utils';
import { OrderStatusBadgeComponent } from '../order-status-badge/order-status-badge.component';
import { OrderTimelineComponent } from '../order-timeline/order-timeline.component';

@Component({
  selector: 'app-order-details-drawer',
  standalone: true,
  imports: [
    CommonModule,
    OrderStatusBadgeComponent,
    OrderTimelineComponent
  ],
  templateUrl: './order-details-drawer.component.html'
})
export class OrderDetailsDrawerComponent {

  @Input({ required: true })
  order!: Order;

  @Output()
  close = new EventEmitter<void>();

  closeDrawer(): void {
    this.close.emit();
  }
}