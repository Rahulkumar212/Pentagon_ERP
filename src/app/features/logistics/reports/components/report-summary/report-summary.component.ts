
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  REPORT_SUMMARY_DATA,
  ReportSummaryCard,
} from '../../utils/report-summary.util';

@Component({
  selector: 'app-report-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-summary.component.html',
})
export class ReportSummaryComponent {
  summaryCards: ReportSummaryCard[] = REPORT_SUMMARY_DATA;
}

