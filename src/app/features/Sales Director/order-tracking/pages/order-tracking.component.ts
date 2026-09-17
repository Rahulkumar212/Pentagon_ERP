import { Component, signal } from '@angular/core';


import { Order } from '../utils/order-table.utils';
import { OrderFilter } from '../utils/order-filters.utils';
import { OrderTrackingHeaderComponent } from '../components/order-tracking-header/order-tracking-header.component';
import { OrderStatsComponent } from '../components/order-stats/order-stats.component';
import { OrderFiltersComponent } from '../components/order-filters/order-filters.component';
import { OrderTableComponent } from '../components/order-table/order-table.component';
import { OrderDetailsDrawerComponent } from '../components/order-details-drawer/order-details-drawer.component';

@Component({
  selector: 'app-order-tracking',
  standalone: true,
  imports: [
    OrderTrackingHeaderComponent,
    OrderStatsComponent,
    OrderFiltersComponent,
    OrderTableComponent,
    OrderDetailsDrawerComponent
  ],
  templateUrl: './order-tracking.component.html'
})
export class OrderTrackingComponent {

  selectedOrder = signal<Order | null>(null);

  currentFilters = signal<OrderFilter>({
    search: '',
    status: 'All',
    customer: '',
    startDate: '',
    endDate: ''
  });

  onFilterChange(filters: OrderFilter): void {
    this.currentFilters.set(filters);

    console.log('Order Filters:', filters);
  }

  openOrderDetails(order: Order): void {
    this.selectedOrder.set(order);
  }

  closeOrderDetails(): void {
    this.selectedOrder.set(null);
  }
}