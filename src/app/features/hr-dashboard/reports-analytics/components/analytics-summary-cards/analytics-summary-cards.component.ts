import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AnalyticsCard {

  title: string;

  value: string;

  subtitle: string;

  badge?: string;

  icon: string;

  iconBg: string;

  badgeColor?: string;

}

@Component({
  selector: 'app-analytics-summary-cards',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './analytics-summary-cards.component.html'
})
export class AnalyticsSummaryCardsComponent {

  readonly cards: AnalyticsCard[] = [

    {
      title: 'Average Appraisal Rating',
      value: '4.4 / 5',
      subtitle: 'Top team performance',
      icon: '★',
      iconBg: 'bg-indigo-100 text-indigo-600'
    },

    {
      title: 'Average Attendance Ratio',
      value: '96.2%',
      subtitle: 'Active roster presence',
      icon: '%',
      iconBg: 'bg-emerald-100 text-emerald-600'
    },

    {
      title: 'Employee Attrition Rate',
      value: '4.2%',
      subtitle: 'Risk',
      badge: 'Low Retention',
      badgeColor: 'bg-green-100 text-green-700',
      icon: '↓',
      iconBg: 'bg-blue-100 text-blue-600'
    },

    {
      title: 'Statutory Deductions Status',
      value: '100%',
      subtitle: 'PF & ESI filings fully reconciled',
      icon: '✓',
      iconBg: 'bg-purple-100 text-purple-600'
    }

  ];

}