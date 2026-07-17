import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FinanceHeaderComponent
} from '../components/finance-header/finance-header.component';

import {
  FinanceSummaryCardsComponent
} from '../components/finance-summary-cards/finance-summary-cards.component';

import {
  RevenueExpenseChartComponent
} from '../components/revenue-expense-chart/revenue-expense-chart.component';

import {
  CashflowChartComponent
} from '../components/cashflow-chart/cashflow-chart.component';

import {
  RecentTransactionsComponent
} from '../components/recent-transactions/recent-transactions.component';

import {
  PendingPaymentsComponent
} from '../components/pending-payments/pending-payments.component';

import {
  FinanceAlertsComponent
} from '../components/finance-alerts/finance-alerts.component';

import {
  BudgetOverviewComponent
} from '../components/budget-overview/budget-overview.component';
import { RecentTransaction, RecentTransactions } from '../utils/recent-transactions';
import { FINANCE_ALERTS, FinanceAlert } from '../utils/finance-alerts.data';
import { BUDGET_OVERVIEW, BudgetOverview } from '../utils/budget-overview.data';
import { CashflowChart } from '../utils/cashflow-chart';
import { RevenueExpenseChart } from '../utils/revenue-expense-chart';
import { FinanceSummaryCard, FinanceSummaryCards } from '../utils/finance-summary-cards';



@Component({
  selector: 'app-dashboard-overview',
  standalone: true,
  imports: [
    CommonModule,
    FinanceHeaderComponent,
    FinanceSummaryCardsComponent,
    RevenueExpenseChartComponent,
    CashflowChartComponent,
    RecentTransactionsComponent,
    PendingPaymentsComponent,
    FinanceAlertsComponent,
    BudgetOverviewComponent
  ],
  templateUrl:
    './dashboard-overview.component.html'
})
export class DashboardOverviewComponent {
      pendingPayments = [];
      recentTransactions: RecentTransaction[] = RecentTransactions;
      financeAlerts: FinanceAlert[] = FINANCE_ALERTS;
      budgets: BudgetOverview[] = BUDGET_OVERVIEW;
      cashflowChart = CashflowChart;
       revenueExpenseChart = RevenueExpenseChart;
        summaryCards: FinanceSummaryCard[] = FinanceSummaryCards;
}