import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsHeaderComponent } from '../components/analytics-header/analytics-header.component';
import { KpiSummaryComponent } from '../components/kpi-summary/kpi-summary.component';
import { RevenueOverviewComponent } from '../components/revenue-overview/revenue-overview.component';
import { OrganizationSummaryComponent } from '../components/organization-summary/organization-summary.component';
import { VisitSummaryComponent } from '../components/visit-summary/visit-summary.component';
import { ExecutivePerformanceComponent } from '../components/executive-performance/executive-performance.component';
import { BillingSummaryComponent } from '../components/billing-summary/billing-summary.component';
import { SalesFunnelComponent } from '../components/sales-funnel/sales-funnel.component';
import { RecentActivitiesComponent } from '../components/recent-activities/recent-activities.component';

@Component({
  selector: 'app-sales-analytics',
  standalone: true,
  imports: [
    CommonModule,
    AnalyticsHeaderComponent,
    KpiSummaryComponent,
    RevenueOverviewComponent,
    OrganizationSummaryComponent,
    VisitSummaryComponent,
    ExecutivePerformanceComponent,
    BillingSummaryComponent,
    SalesFunnelComponent,
    RecentActivitiesComponent
  ],
  templateUrl: './sales-analytics.component.html'
})
export class SalesAnalyticsComponent {

   selectedTab = 'Revenue Overview';

onTabChange(tab: string): void {

  this.selectedTab = tab;

}

}