import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ORDER_STATUSES,
  OrderFilter,
  OrderStatus
} from '../../utils/order-filters.utils';

@Component({
  selector: 'app-order-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './order-filters.component.html'
})
export class OrderFiltersComponent {
  @Output() filterChange = new EventEmitter<OrderFilter>();

  readonly statuses = ORDER_STATUSES;

  search = '';
  status:OrderStatus = 'All';
  customer = '';
  startDate = '';
  endDate = '';

  applyFilters(): void {
    this.filterChange.emit({
      search: this.search.trim(),
      status: this.status,
      customer: this.customer.trim(),
      startDate: this.startDate,
      endDate: this.endDate
    });
  }

  resetFilters(): void {
    this.search = '';
    this.status = 'All';
    this.customer = '';
    this.startDate = '';
    this.endDate = '';

    this.applyFilters();
  }
}