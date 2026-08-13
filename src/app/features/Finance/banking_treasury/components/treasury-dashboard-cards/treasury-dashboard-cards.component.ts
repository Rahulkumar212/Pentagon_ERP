import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-treasury-dashboard-cards',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './treasury-dashboard-cards.component.html'
})
export class TreasuryDashboardCardsComponent {

  cards = [

    {
      title: 'Total Bank Balance',
      value: '₹12.84 Cr',
      change: '+5.6%',
      color: 'text-emerald-700',
      bg: 'bg-emerald-50'
    },

    {
      title: 'Available Cash',
      value: '₹3.26 Cr',
      change: '+2.1%',
      color: 'text-blue-700',
      bg: 'bg-blue-50'
    },

    {
      title: 'Payments Scheduled',
      value: '₹1.42 Cr',
      change: '18 Payments',
      color: 'text-amber-700',
      bg: 'bg-amber-50'
    },

    {
      title: 'Receivables Today',
      value: '₹87.50 L',
      change: '12 Collections',
      color: 'text-purple-700',
      bg: 'bg-purple-50'
    },

    {
      title: 'Pending Reconciliation',
      value: '24',
      change: 'Needs Review',
      color: 'text-red-700',
      bg: 'bg-red-50'
    },

    {
      title: 'Active Bank Accounts',
      value: '8',
      change: 'Across 5 Banks',
      color: 'text-slate-700',
      bg: 'bg-slate-100'
    }

  ];

}