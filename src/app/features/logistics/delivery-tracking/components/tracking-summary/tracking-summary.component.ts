import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TRACKING_SUMMARY_DATA } from '../../utils/tracking-summary.util';

@Component({
  selector: 'app-tracking-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tracking-summary.component.html',
})
export class TrackingSummaryComponent {
  summaryCards = TRACKING_SUMMARY_DATA;
}