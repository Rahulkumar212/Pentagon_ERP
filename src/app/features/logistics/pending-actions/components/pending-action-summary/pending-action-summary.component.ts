import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  PENDING_ACTION_SUMMARY,
  PendingActionSummaryCard,
} from '../../utils/pending-action-summary.util';

@Component({
  selector: 'app-pending-action-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pending-action-summary.component.html',
})
export class PendingActionSummaryComponent {
  readonly summaryCards: PendingActionSummaryCard[] =
    PENDING_ACTION_SUMMARY;
}