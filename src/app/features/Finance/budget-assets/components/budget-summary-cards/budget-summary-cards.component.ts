import {
  Component,
  signal
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

interface SummaryCard {

  title: string;

  value: string;

  subtitle: string;

  color: string;

}

@Component({
  selector: 'app-budget-summary-cards',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './budget-summary-cards.component.html'
})
export class BudgetSummaryCardsComponent {

  cards = signal<SummaryCard[]>([

    {

      title: 'ANNUAL BUDGET',

      value: '₹1.50 Cr',

      subtitle: 'Approved organization budget',

      color: 'text-slate-900'

    },

    {

      title: 'BUDGET UTILIZED',

      value: '₹82.50 L',

      subtitle: '55% of annual budget consumed',

      color: 'text-red-800'

    },

    {

      title: 'FIXED ASSETS',

      value: '148',

      subtitle: 'Active registered assets',

      color: 'text-emerald-700'

    },

    {

      title: 'NET ASSET VALUE',

      value: '₹4.86 Cr',

      subtitle: 'After accumulated depreciation',

      color: 'text-violet-700'

    }

  ]);

}