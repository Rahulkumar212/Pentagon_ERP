import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsHeaderComponent } from '../components/reports-header/reports-header.component';
import { AnalyticsSummaryCardsComponent } from '../components/analytics-summary-cards/analytics-summary-cards.component';
import { AnalyticsChartsComponent } from '../components/analytics-charts/analytics-charts.component';
import { LeaveRequestListComponent } from '../components/leave/leave-request-list.component';
import { PayrollSummaryListComponent } from '../components/payroll-summary/payroll-summary-list.component';
import { OrganizationTableComponent } from '../../../client-crm/tables/organization-table.component';

@Component({
  selector: 'app-reports-analytics',
  standalone: true,
  imports: [
    CommonModule,
    ReportsHeaderComponent,
    AnalyticsSummaryCardsComponent,
    AnalyticsChartsComponent,
    LeaveRequestListComponent,
    PayrollSummaryListComponent,
    OrganizationTableComponent
  ],
  templateUrl: './reports-analytics.component.html'
})
export class ReportsAnalyticsComponent {

  activeTab: string = 'analytics';

  onTabChange(tab: string): void {

    this.activeTab = tab;

  }

}