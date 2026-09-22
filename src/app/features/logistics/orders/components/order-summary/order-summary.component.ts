import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  ORDER_SUMMARY_CARDS,
  OrderSummaryCard,
} from '../../utils/order-summary.util';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
})
export class OrderSummaryComponent {
  readonly summaryCards: OrderSummaryCard[] =
    ORDER_SUMMARY_CARDS;
}