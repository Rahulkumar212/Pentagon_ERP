import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SummaryCard {

  title: string;

  value: string;

  icon: 'bill' | 'warning' | 'paid';

  valueClass: string;

}

@Component({
  selector: 'app-payable-summary-cards',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './payable-summary-cards.component.html'
})
export class PayableSummaryCardsComponent {

  cards: SummaryCard[] = [

    {
      title: 'Total Operational Liabilities',
      value: '$25,300',
      icon: 'bill',
      valueClass: 'text-slate-900'
    },

    {
      title: 'Immediate Dues',
      value: '$17,050',
      icon: 'warning',
      valueClass: 'text-red-800'
    },

    {
      title: 'Settled Liabilities',
      value: '$8,250',
      icon: 'paid',
      valueClass: 'text-emerald-700'
    }

  ];

}