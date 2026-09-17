import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ORDER_TABLE_DATA,
  Order
} from '../../utils/order-table.utils';

@Component({
  selector: 'app-order-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-table.component.html'
})
export class OrderTableComponent {
  @Output() viewOrder = new EventEmitter<Order>();

  readonly orders: Order[] = ORDER_TABLE_DATA;

  openOrder(order: Order): void {
    this.viewOrder.emit(order);
  }
}