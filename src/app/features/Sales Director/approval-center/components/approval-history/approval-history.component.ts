
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ApprovalHistoryItem,
  SALES_DIRECTOR_APPROVAL_HISTORY,
} from '../../utils/approval-history.data';

@Component({
  selector: 'app-approval-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approval-history.component.html',
})
export class ApprovalHistoryComponent {

  history: ApprovalHistoryItem[] =
    SALES_DIRECTOR_APPROVAL_HISTORY;

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  }
}

