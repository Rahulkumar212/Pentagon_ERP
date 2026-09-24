
import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  STOCK_FILTER_OPTIONS,
  StockCategory,
  StockCondition,
  StockStatus,
} from '../../utils/stock-filters.util';

export interface StockFilters {
  search: string;
  category: StockCategory;
  status: StockStatus;
  condition: StockCondition;
}

@Component({
  selector: 'app-stock-filters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './stock-filters.component.html',
})
export class StockFiltersComponent {

  // =========================================================
  // INPUT
  // =========================================================

  @Input()
  filters: StockFilters = {
    search: '',
    category: 'ALL',
    status: 'ALL',
    condition: 'ALL',
  };


  // =========================================================
  // OUTPUTS
  // =========================================================

  @Output()
  filtersChange = new EventEmitter<StockFilters>();

  @Output()
  clear = new EventEmitter<void>();


  // =========================================================
  // FILTER OPTIONS
  // =========================================================

  filterOptions = STOCK_FILTER_OPTIONS;


  // =========================================================
  // FILTER CHANGE
  // =========================================================

  onFilterChange(): void {
    this.filtersChange.emit({
      ...this.filters,
    });
  }


  // =========================================================
  // CLEAR FILTERS
  // =========================================================

  clearFilters(): void {

    this.filters = {
      search: '',
      category: 'ALL',
      status: 'ALL',
      condition: 'ALL',
    };

    this.clear.emit();

    this.filtersChange.emit({
      ...this.filters,
    });
  }


  // =========================================================
  // ACTIVE FILTER CHECK
  // =========================================================

  hasActiveFilters(): boolean {
    return (
      this.filters.search.trim() !== '' ||
      this.filters.category !== 'ALL' ||
      this.filters.status !== 'ALL' ||
      this.filters.condition !== 'ALL'
    );
  }
}

