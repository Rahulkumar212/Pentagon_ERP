import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  ACTION_TYPE_OPTIONS,
  PRIORITY_OPTIONS,
  STATUS_OPTIONS,
  PendingActionFilter,
} from '../../utils/pending-action-filters.util';

@Component({
  selector: 'app-pending-action-filters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './pending-action-filters.component.html',
})
export class PendingActionFiltersComponent {
  readonly actionTypeOptions = ACTION_TYPE_OPTIONS;
  readonly priorityOptions = PRIORITY_OPTIONS;
  readonly statusOptions = STATUS_OPTIONS;

  filters: PendingActionFilter = {
    actionType: 'ALL',
    priority: 'ALL',
    status: 'ALL',
    date: '',
  };

  @Output()
  filterChange = new EventEmitter<PendingActionFilter>();

  applyFilters(): void {
    this.filterChange.emit({
      ...this.filters,
    });
  }

  resetFilters(): void {
    this.filters = {
      actionType: 'ALL',
      priority: 'ALL',
      status: 'ALL',
      date: '',
    };

    this.applyFilters();
  }
}