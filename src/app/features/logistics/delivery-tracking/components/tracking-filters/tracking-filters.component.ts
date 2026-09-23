import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  DeliveryPriority,
  DeliveryTrackingStatus,
  TRACKING_FILTER_OPTIONS,
} from '../../utils/tracking-filters.util';

export interface TrackingFilters {
  search: string;
  status: DeliveryTrackingStatus;
  carrier: string;
  priority: DeliveryPriority;
  fromDate: string;
  toDate: string;
}

@Component({
  selector: 'app-tracking-filters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './tracking-filters.component.html',
})
export class TrackingFiltersComponent {
  @Output()
  filtersChange = new EventEmitter<TrackingFilters>();

  @Output()
  clear = new EventEmitter<void>();

  filterOptions = TRACKING_FILTER_OPTIONS;

  filters: TrackingFilters = {
    search: '',
    status: 'ALL',
    carrier: 'All Carriers',
    priority: 'ALL',
    fromDate: '',
    toDate: '',
  };

  onFilterChange(): void {
    this.filtersChange.emit({
      ...this.filters,
    });
  }

  clearFilters(): void {
    this.filters = {
      search: '',
      status: 'ALL',
      carrier: 'All Carriers',
      priority: 'ALL',
      fromDate: '',
      toDate: '',
    };

    this.clear.emit();

    this.filtersChange.emit({
      ...this.filters,
    });
  }

  hasActiveFilters(): boolean {
    return (
      this.filters.search.trim() !== '' ||
      this.filters.status !== 'ALL' ||
      this.filters.carrier !== 'All Carriers' ||
      this.filters.priority !== 'ALL' ||
      this.filters.fromDate !== '' ||
      this.filters.toDate !== ''
    );
  }
}