import {
  Component,
  Input
} from '@angular/core';

import {
  CommonModule,
  CurrencyPipe
} from '@angular/common';
import { FinanceSummaryCard } from '../../utils/finance-summary-cards';


@Component({
  selector: 'app-finance-summary-cards',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe
  ],
  templateUrl: './finance-summary-cards.component.html'
})
export class FinanceSummaryCardsComponent {

    @Input()
  summaryCards: FinanceSummaryCard[] = [];

}