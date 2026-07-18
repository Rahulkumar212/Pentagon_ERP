import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FinanceSummaryCardsComponent
} from '../components/finance-summary-cards/finance-summary-cards.component';

import {
  RevenueExpenseChartComponent
} from '../components/revenue-expense-chart/revenue-expense-chart.component';


import { RecentTransaction, RecentTransactions } from '../utils/recent-transactions';
import { FINANCE_ALERTS, FinanceAlert } from '../utils/finance-alerts.data';
import { BUDGET_OVERVIEW, BudgetOverview } from '../utils/budget-overview.data';
import { CashflowChart } from '../utils/cashflow-chart';
import { RevenueExpenseChart } from '../utils/revenue-expense-chart';
import { FinanceSummaryCard, FinanceSummaryCards } from '../utils/finance-summary-cards';
import { DepartmentBudgetsComponent } from '../components/department-budget-card/department-budgets.component';
import { GeneralLedgerTableComponent } from '../components/general-ledger-table/general-ledger-table.component';



@Component({
  selector: 'app-dashboard-overview',
  standalone: true,
  imports: [
    CommonModule,
    FinanceSummaryCardsComponent,
    RevenueExpenseChartComponent,
    DepartmentBudgetsComponent,
    GeneralLedgerTableComponent
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