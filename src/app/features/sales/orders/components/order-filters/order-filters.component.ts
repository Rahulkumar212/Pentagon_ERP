
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type SalesOrderStatus =
  | 'ALL'
  | 'PENDING'
  | 'PROCESSING'
  | 'READY_FOR_DISPATCH'
  | 'DISPATCHED'
  | 'DELIVERED'
  | 'CANCELLED';

export type SalesOrderPaymentStatus =
  | 'ALL'
  | 'PENDING'
  | 'PARTIAL'
  | 'PAID';

export type SalesOrderPriority =
  | 'ALL'
  | 'HIGH'
  | 'MEDIUM'
  | 'LOW';

export interface OrderFilters {
  search: string;
  status: SalesOrderStatus;
  paymentStatus: SalesOrderPaymentStatus;
  priority: SalesOrderPriority;
  date: string;
}

@Component({
  selector: 'app-order-filters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './order-filters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderFiltersComponent {

  @Output() filterChange = new EventEmitter<OrderFilters>();

  filters: OrderFilters = {
    search: '',
    status: 'ALL',
    paymentStatus: 'ALL',
    priority: 'ALL',
    date: ''
  };

  onFilterChange(): void {
    this.filterChange.emit({
      ...this.filters
    });
  }

  clearFilters(): void {
    this.filters = {
      search: '',
      status: 'ALL',
      paymentStatus: 'ALL',
      priority: 'ALL',
      date: ''
    };

    this.onFilterChange();
  }

}

