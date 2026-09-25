
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  DEFAULT_REPORT_FILTERS,
  ReportFilters,
  ReportType,
  ReportStatus,
} from '../../utils/report-filters.util';

@Component({
  selector: 'app-report-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './report-filters.component.html',
})
export class ReportFiltersComponent {
  @Input() filters: ReportFilters = {
    ...DEFAULT_REPORT_FILTERS,
  };

  @Output() filtersChange = new EventEmitter<ReportFilters>();
  @Output() clear = new EventEmitter<void>();

  reportTypes: { value: ReportType; label: string }[] = [
    {
      value: 'ALL',
      label: 'All Reports',
    },
    {
      value: 'INVENTORY',
      label: 'Inventory',
    },
    {
      value: 'STOCK_MOVEMENT',
      label: 'Stock Movement',
    },
    {
      value: 'ORDERS',
      label: 'Orders',
    },
    {
      value: 'DELIVERIES',
      label: 'Deliveries',
    },
    {
      value: 'DELAYED_SHIPMENTS',
      label: 'Delayed Shipments',
    },
  ];

  statuses: { value: ReportStatus; label: string }[] = [
    {
      value: 'ALL',
      label: 'All Status',
    },
    {
      value: 'COMPLETED',
      label: 'Completed',
    },
    {
      value: 'PENDING',
      label: 'Pending',
    },
    {
      value: 'IN_PROGRESS',
      label: 'In Progress',
    },
    {
      value: 'DELAYED',
      label: 'Delayed',
    },
    {
      value: 'CANCELLED',
      label: 'Cancelled',
    },
  ];

  onFilterChange(): void {
    this.filtersChange.emit({
      ...this.filters,
    });
  }

  onClearFilters(): void {
    this.filters = {
      ...DEFAULT_REPORT_FILTERS,
    };

    this.clear.emit();
    this.filtersChange.emit({
      ...this.filters,
    });
  }
}

