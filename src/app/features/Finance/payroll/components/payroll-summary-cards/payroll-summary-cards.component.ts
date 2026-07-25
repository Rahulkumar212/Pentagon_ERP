import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-payroll-summary-cards',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './payroll-summary-cards.component.html'
})
export class PayrollSummaryCardsComponent {

  cards = signal([

    {
      title: 'TOTAL PAYROLL BUDGET',
      value: '₹745,000',
      subtitle: 'Gross salaries per active month',
      color: 'text-slate-900',
      bg: 'bg-blue-50',
      icon: '₹'
    },

    {
      title: 'NET DISBURSEMENT DUES',
      value: '₹563,500',
      subtitle: 'Pending salary transfers',
      color: 'text-red-800',
      bg: 'bg-red-50',
      icon: '⇄'
    },

    {
      title: 'TDS LIABILITIES',
      value: '₹125,500',
      subtitle: 'Income tax deductions',
      color: 'text-violet-700',
      bg: 'bg-violet-50',
      icon: '%'
    },

    {
      title: 'PROVIDENT FUND (PF)',
      value: '₹54,500',
      subtitle: 'Employer + Employee contribution',
      color: 'text-emerald-700',
      bg: 'bg-emerald-50',
      icon: 'PF'
    }

  ]);

}