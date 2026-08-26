import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { KpiCardsComponent } from '../components/kpi-cards/kpi-cards.component';
import { RevenuePerformanceComponent } from '../components/revenue-performance/revenue-performance.component';
import { SalesFunnelComponent } from '../components/sales-funnel/sales-funnel.component';
import { TeamPerformanceComponent } from '../components/team-performance/team-performance.component';
import { CriticalAttentionComponent } from '../components/critical-attention/critical-attention.component';
import { SALES_DIRECTOR_KPIS } from '../utils/kpi-cards.utils';
import { SALES_DIRECTOR_REVENUE_PERFORMANCE } from '../utils/revenue-performance.utils';
import { SALES_DIRECTOR_SALES_FUNNEL } from '../utils/sales-funnel.utils';
import { SALES_DIRECTOR_TEAM_PERFORMANCE } from '../utils/team-performance.utils';
import { SALES_DIRECTOR_CRITICAL_ATTENTION } from '../utils/critical-attention.utils';

@Component({
  selector: 'app-sales-director-dashboard',
  standalone: true,

  imports: [
    CommonModule,
    KpiCardsComponent,
    RevenuePerformanceComponent,
    SalesFunnelComponent,
    TeamPerformanceComponent,
    CriticalAttentionComponent,
  ],

  templateUrl: './sales-director-dashboard.component.html',
})
export class SalesDirectorDashboardComponent {

  kpis = SALES_DIRECTOR_KPIS;

  revenuePerformance =
    SALES_DIRECTOR_REVENUE_PERFORMANCE;

  salesFunnel =
    SALES_DIRECTOR_SALES_FUNNEL;

  teamPerformance =
    SALES_DIRECTOR_TEAM_PERFORMANCE;


  criticalAttention =
    SALES_DIRECTOR_CRITICAL_ATTENTION;

  refreshDashboard(): void {

    console.log('Sales Director Dashboard refreshed');

  }

}