import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

@Component({
  selector: 'app-overview-cards',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './overview-cards.component.html'
})
export class OverviewCardsComponent {

  cards = [

    {
      title: 'Total Employees',
      value: 127,
      badge: '+5 New',
      badgeClass: 'bg-green-100 text-green-700',
      description: '5 employees joined this month',
      icon: '👥'
    },

    {
      title: 'Leave Operations',
      value: 8,
      badge: 'Pending',
      badgeClass: 'bg-yellow-100 text-yellow-700',
      description: 'Employees currently on leave',
      icon: '📅'
    },

    {
      title: 'Open Positions',
      value: 12,
      badge: 'Hiring',
      badgeClass: 'bg-blue-100 text-blue-700',
      description: 'Candidates under recruitment',
      icon: '💼'
    },

    {
      title: 'Active Onboarding',
      value: 6,
      badge: 'In Progress',
      badgeClass: 'bg-purple-100 text-purple-700',
      description: 'New hires being onboarded',
      icon: '🎓'
    }

  ];

}