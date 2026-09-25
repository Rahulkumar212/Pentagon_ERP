
import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  DEFAULT_MOVEMENT_FILTERS,
  MovementFilters,
  MovementReferenceType,
  MovementStatus,
  MovementType,
} from '../../utils/stock-movement.util';

@Component({
  selector: 'app-movement-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movement-filters.component.html',
})
export class MovementFiltersComponent {
  @Input()
  filters: MovementFilters = { ...DEFAULT_MOVEMENT_FILTERS };

  @Output()
  filtersChange = new EventEmitter<MovementFilters>();

  @Output()
  clear = new EventEmitter<void>();

  movementTypes: {
    label: string;
    value: MovementType | 'ALL';
  }[] = [
    { label: 'All Movements', value: 'ALL' },
    { label: 'Stock Entry', value: 'ENTRY' },
    { label: 'Stock Exit', value: 'EXIT' },
  ];

  statuses: {
    label: string;
    value: MovementStatus | 'ALL';
  }[] = [
    { label: 'All Status', value: 'ALL' },
    { label: 'Pending', value: 'PENDING' },
    { label: 'Completed', value: 'COMPLETED' },
    { label: 'Rejected', value: 'REJECTED' },
  ];

  referenceTypes: {
    label: string;
    value: MovementReferenceType | 'ALL';
  }[] = [
    { label: 'All References', value: 'ALL' },
    { label: 'Procurement', value: 'PROCUREMENT' },
    { label: 'Purchase Order', value: 'PURCHASE_ORDER' },
    { label: 'Sales Order', value: 'SALES_ORDER' },
    { label: 'GEM Order', value: 'GEM_ORDER' },
    { label: 'Demo', value: 'DEMO' },
    { label: 'Office Use', value: 'OFFICE_USE' },
    { label: 'Replacement', value: 'REPLACEMENT' },
    { label: 'Direct Receipt', value: 'DIRECT_RECEIPT' },
    { label: 'Other', value: 'OTHER' },
  ];

  onFilterChange(): void {
    this.filtersChange.emit({
      ...this.filters,
    });
  }

  onClear(): void {
    this.filters = {
      ...DEFAULT_MOVEMENT_FILTERS,
    };

    this.clear.emit();

    this.filtersChange.emit({
      ...this.filters,
    });
  }
}

