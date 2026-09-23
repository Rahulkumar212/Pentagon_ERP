import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  DEFAULT_SHIPMENT_FILTER,
  SHIPMENT_CARRIER_OPTIONS,
  SHIPMENT_DESTINATION_OPTIONS,
  SHIPMENT_STATUS_OPTIONS,
  ShipmentFilter,
} from '../../utils/shipment-filters.util';

@Component({
  selector: 'app-shipment-filters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './shipment-filters.component.html',
})
export class ShipmentFiltersComponent {
  filter: ShipmentFilter = {
    ...DEFAULT_SHIPMENT_FILTER,
  };

  readonly statusOptions = SHIPMENT_STATUS_OPTIONS;
  readonly carrierOptions = SHIPMENT_CARRIER_OPTIONS;
  readonly destinationOptions = SHIPMENT_DESTINATION_OPTIONS;

  @Output()
  filterChange = new EventEmitter<ShipmentFilter>();

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
      ...DEFAULT_SHIPMENT_FILTER,
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

    if (this.filter.carrier !== 'ALL') {
      count++;
    }

    if (this.filter.destination !== 'ALL') {
      count++;
    }

    if (this.filter.fromDate) {
      count++;
    }

    if (this.filter.toDate) {
      count++;
    }

    return count;
  }
}