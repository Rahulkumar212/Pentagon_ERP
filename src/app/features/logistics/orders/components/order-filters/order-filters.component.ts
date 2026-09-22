import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  ORDER_SOURCE_OPTIONS,
  ORDER_STATUS_OPTIONS,
  PAYMENT_STATUS_OPTIONS,
  OrderFilter,
} from '../../utils/order-filters.util';

@Component({
  selector: 'app-order-filters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './order-filters.component.html',
})
export class OrderFiltersComponent {
  readonly sourceOptions = ORDER_SOURCE_OPTIONS;
  readonly statusOptions = ORDER_STATUS_OPTIONS;
  readonly paymentStatusOptions =
    PAYMENT_STATUS_OPTIONS;

  filters: OrderFilter = {
    search: '',
    source: 'ALL',
    status: 'ALL',
    paymentStatus: 'ALL',
    fromDate: '',
    toDate: '',
  };

  @Output()
  filterChange = new EventEmitter<OrderFilter>();

  applyFilters(): void {
    this.filterChange.emit({
      ...this.filters,
    });
  }

  resetFilters(): void {
    this.filters = {
      search: '',
      source: 'ALL',
      status: 'ALL',
      paymentStatus: 'ALL',
      fromDate: '',
      toDate: '',
    };

    this.applyFilters();
  }
}