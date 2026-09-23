import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  DEFAULT_DISPATCH_FILTER,
  DISPATCH_CARRIER_OPTIONS,
  DISPATCH_PRIORITY_OPTIONS,
  DISPATCH_SOURCE_OPTIONS,
  DISPATCH_STATUS_OPTIONS,
  DispatchFilter,
} from '../../utils/dispatch-filters.util';

@Component({
  selector: 'app-dispatch-filters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './dispatch-filters.component.html',
})
export class DispatchFiltersComponent {
  filter: DispatchFilter = {
    ...DEFAULT_DISPATCH_FILTER,
  };

  readonly statusOptions = DISPATCH_STATUS_OPTIONS;

  readonly sourceOptions = DISPATCH_SOURCE_OPTIONS;

  readonly priorityOptions = DISPATCH_PRIORITY_OPTIONS;

  readonly carrierOptions = DISPATCH_CARRIER_OPTIONS;

  @Output()
  filterChange = new EventEmitter<DispatchFilter>();

  @Output()
  reset = new EventEmitter<void>();

  applyFilters(): void {
    this.filterChange.emit({
      ...this.filter,
    });
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  resetFilters(): void {
    this.filter = {
      ...DEFAULT_DISPATCH_FILTER,
    };

    this.reset.emit();

    this.filterChange.emit({
      ...this.filter,
    });
  }

  get activeFilterCount(): number {
    let count = 0;

    if (this.filter.search.trim()) {
      count++;
    }

    if (this.filter.status !== 'ALL') {
      count++;
    }

    if (this.filter.source !== 'ALL') {
      count++;
    }

    if (this.filter.priority !== 'ALL') {
      count++;
    }

    if (this.filter.carrier !== 'ALL') {
      count++;
    }

    if (this.filter.dispatchDate) {
      count++;
    }

    return count;
  }
}