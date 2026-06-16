import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientCrmService } from '../../../core/services/client-crm.service';
import { Order } from '../models/order.type';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  private cdr = inject(ChangeDetectorRef);

  private readonly orderService =
    inject(ClientCrmService);

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {

    this.orderService.getOrders().subscribe({

      next: (response) => {

        this.orders = response?.data ?? [];
         this.cdr.detectChanges();
      },

      error: (err) => {

        console.error('Failed to load orders', err);

        this.orders = [];

      }

    });

  }

}