
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

import {
  CommonModule,
} from '@angular/common';

import {
  FormsModule,
} from '@angular/forms';

export interface ApprovalFilter {
  search: string;
  category: string;
  priority: string;
  status: string;
  dateRange: string;
}

@Component({
  selector: 'app-approval-filters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './approval-filters.component.html',
})
export class ApprovalFiltersComponent {

  @Output()
  filtersChange =
    new EventEmitter<ApprovalFilter>();

  filters: ApprovalFilter = {
    search: '',
    category: 'all',
    priority: 'all',
    status: 'pending',
    dateRange: 'all',
  };

  onFilterChange(): void {
    this.filtersChange.emit({
      ...this.filters,
    });
  }

  clearFilters(): void {
    this.filters = {
      search: '',
      category: 'all',
      priority: 'all',
      status: 'pending',
      dateRange: 'all',
    };

    this.filtersChange.emit({
      ...this.filters,
    });
  }
}

