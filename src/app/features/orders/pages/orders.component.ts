import { Component, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Order } from '../models/order.type';
import { OrderService } from '../../../core/services/order.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  private orderService = inject(OrderService);

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrders().subscribe({
      next: (res) => {
        this.orders = res.data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
