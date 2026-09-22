import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PendingActionSummaryComponent } from '../components/pending-action-summary/pending-action-summary.component';
import { PendingActionFiltersComponent } from '../components/pending-action-filters/pending-action-filters.component';
import { PendingActionListComponent } from '../components/pending-action-list/pending-action-list.component';
import { PendingActionDetailComponent } from '../components/pending-action-detail/pending-action-detail.component';

import {
  PendingAction,
  PENDING_ACTIONS
} from '../utils/pending-action-list.util';

import {
  PendingActionFilter,
} from '../utils/pending-action-filters.util';


@Component({
  selector: 'app-pending-actions',
  standalone: true,
  imports: [
    CommonModule,
    PendingActionSummaryComponent,
    PendingActionFiltersComponent,
    PendingActionListComponent,
    PendingActionDetailComponent,
  ],
  templateUrl: './pending-actions.component.html',
})
export class PendingActionsComponent {
  readonly allActions: PendingAction[] = PENDING_ACTIONS;

  filteredActions: PendingAction[] = [
    ...this.allActions,
  ];

  selectedAction: PendingAction | null = null;

  isDetailOpen = false;

  onFilterChange(filters: PendingActionFilter): void {
    this.filteredActions = this.allActions.filter(
      (action) => {
        const matchesType =
          filters.actionType === 'ALL' ||
          action.type === filters.actionType;

        const matchesPriority =
          filters.priority === 'ALL' ||
          action.priority === filters.priority;

        const matchesStatus =
          filters.status === 'ALL' ||
          action.status === filters.status;

        const matchesDate =
          !filters.date ||
          this.isSameDate(
            action.createdDate,
            filters.date
          );

        return (
          matchesType &&
          matchesPriority &&
          matchesStatus &&
          matchesDate
        );
      }
    );
  }

  onViewAction(action: PendingAction): void {
    this.selectedAction = action;
    this.isDetailOpen = true;
  }

  onCloseDetail(): void {
    this.isDetailOpen = false;
    this.selectedAction = null;
  }

  onTakeAction(action: PendingAction): void {
    console.log('Take action:', action);
  }

  private isSameDate(
    actionDate: string,
    filterDate: string
  ): boolean {
    if (!filterDate) {
      return true;
    }

    const parsedFilterDate = new Date(
      `${filterDate}T00:00:00`
    );

    const parsedActionDate = new Date(actionDate);

    if (
      Number.isNaN(parsedFilterDate.getTime()) ||
      Number.isNaN(parsedActionDate.getTime())
    ) {
      return false;
    }

    return (
      parsedActionDate.getDate() ===
        parsedFilterDate.getDate() &&
      parsedActionDate.getMonth() ===
        parsedFilterDate.getMonth() &&
      parsedActionDate.getFullYear() ===
        parsedFilterDate.getFullYear()
    );
  }
}