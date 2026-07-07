import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  StatsService
} from '../../../../../core/services/stats.service';

@Component({
  selector: 'app-overview-cards',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './overview-cards.component.html'
})
export class OverviewCardsComponent implements OnInit {

  private readonly statsService = inject(StatsService);

  private readonly cdr = inject(ChangeDetectorRef);

  cards = [

    {
      title: 'Total Employees',
      value: 0,
      badge: '+5 New',
      badgeClass: 'bg-green-100 text-green-700',
      description: '5 employees joined this month',
      icon: '👥'
    },

    {
      title: 'Leave Operations',
      value: 0,
      badge: 'Pending',
      badgeClass: 'bg-yellow-100 text-yellow-700',
      description: 'Employees currently on leave',
      icon: '📅'
    },

    {
      title: 'Open Positions',
      value: 0,
      badge: 'Hiring',
      badgeClass: 'bg-blue-100 text-blue-700',
      description: 'Candidates under recruitment',
      icon: '💼'
    },

    {
      title: 'Active Onboarding',
      value: 0,
      badge: 'In Progress',
      badgeClass: 'bg-purple-100 text-purple-700',
      description: 'New hires being onboarded',
      icon: '🎓'
    }

  ];

  ngOnInit(): void {

    this.loadDashboardOverview();

  }

  private loadDashboardOverview(): void {

    this.statsService.getDashboardOverview().subscribe({

      next: (response) => {

        const overview = response.data;

        this.cards[0].value = overview.totalEmployee;

        this.cards[1].value = overview.approvedLeaves;

        this.cards[2].value = overview.totalOpportunities;

        // API me activeOnboarding nahi aa raha
        this.cards[3].value = 0;

        this.cdr.detectChanges();

      },

      error: (error) => {

        console.error('Failed to load dashboard overview', error);

      }

    });

  }

}