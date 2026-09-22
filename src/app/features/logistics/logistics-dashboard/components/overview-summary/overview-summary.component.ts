import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  OVERVIEW_SUMMARY_CARDS,
  OverviewSummaryCard,
} from '../../utils/overview-summary.util';

@Component({
  selector: 'app-overview-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview-summary.component.html',
})
export class OverviewSummaryComponent {
  readonly summaryCards: OverviewSummaryCard[] =
    OVERVIEW_SUMMARY_CARDS;
}