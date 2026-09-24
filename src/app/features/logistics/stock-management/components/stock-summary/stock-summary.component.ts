import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  STOCK_SUMMARY_DATA,
} from '../../utils/stock-summary.util';

@Component({
  selector: 'app-stock-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-summary.component.html',
})
export class StockSummaryComponent {

  summaryCards = STOCK_SUMMARY_DATA;

}