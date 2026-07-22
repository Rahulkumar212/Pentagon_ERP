import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SummaryCard {

  title: string;

  value: string;

  color: string;

  icon: string;

}

@Component({
  selector: 'app-receivable-summary-cards',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './receivable-summary-cards.component.html'
})
export class ReceivableSummaryCardsComponent {

  summaryCards: SummaryCard[] = [

    {
      title: 'Total Billed Receivables',
      value: '₹125,300',
      color: 'text-slate-900',
      icon: 'document'
    },

    {
      title: 'Outstanding Dues',
      value: '₹43,800',
      color: 'text-red-800',
      icon: 'warning'
    },

    {
      title: 'Collected Cash',
      value: '₹36,500',
      color: 'text-emerald-700',
      icon: 'success'
    }

  ];

}