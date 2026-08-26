import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface TeamPerformanceItem {
  employeeName: string;
  designation: string;
  target: number;
  achieved: number;
  achievementPercentage: number;
  status: 'excellent' | 'on-track' | 'at-risk';
}

@Component({
  selector: 'app-team-performance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-performance.component.html',
})
export class TeamPerformanceComponent {

  @Input() teamData: TeamPerformanceItem[] = [];

  formatCurrency(value: number): string {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)} Cr`;
    }

    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)} L`;
    }

    return `₹${value.toLocaleString('en-IN')}`;
  }

  getStatusLabel(
    status: TeamPerformanceItem['status']
  ): string {
    switch (status) {
      case 'excellent':
        return 'Excellent';

      case 'on-track':
        return 'On Track';

      case 'at-risk':
        return 'At Risk';

      default:
        return 'Unknown';
    }
  }

}