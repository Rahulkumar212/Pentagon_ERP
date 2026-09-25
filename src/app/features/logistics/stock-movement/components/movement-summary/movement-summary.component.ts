import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  MOVEMENT_SUMMARY_DATA,
  MovementSummaryCard,
} from '../../utils/stock-movement.util';

@Component({
  selector: 'app-movement-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movement-summary.component.html',
})
export class MovementSummaryComponent {
  summaryCards: MovementSummaryCard[] = MOVEMENT_SUMMARY_DATA;
}