import { Routes } from '@angular/router';

export const FINANCE_ROUTES: Routes = [

  // Dashboard
  {
    path: 'finance/dashboard',
    loadComponent: () =>
      import('../../features/Finance/dashboard_overview/pages/dashboard-overview.component')
        .then(m => m.DashboardOverviewComponent)
  },

   {
    path: 'finance/order-tracking',
    loadComponent: () =>
      import('../../features/Finance/order-tracking/pages/order-tracking.component')
        .then(m => m.OrderTrackingComponent)
  },

  // Accounting
  {
    path: 'finance/accounting',
    loadComponent: () =>
      import('./accounting_ledger/pages/accounting-dashboard.component')
        .then(m => m.AccountingDashboardComponent)
  },



  // Receivables
  {
    path: 'finance/receivables',
    loadComponent: () =>
      import('./receivables_billing/pages/receivables-dashboard.component')
        .then(m => m.ReceivablesDashboardComponent)
  },

  // Payables
  {
    path: 'finance/payables',
    loadComponent: () =>
      import('./payables_bills/pages/payables-dashboard.component')
        .then(m => m.PayablesDashboardComponent)
  },

  // Banking
  {
    path: 'finance/banking',
    loadComponent: () =>
      import('./banking_treasury/pages/banking-dashboard.component')
        .then(m => m.BankingDashboardComponent)
  },

  // Payroll Finance
  {
    path: 'payroll-finance',
    loadComponent: () =>
      import('./payroll/pages/payroll-dashboard.component')
        .then(m => m.PayrollDashboardComponent)
  },

  // Budget
  {
    path: 'finance/budget',
    loadComponent: () =>
      import('./budget-assets/pages/budget-assets-dashboard.component')
        .then(m => m.BudgetAssetsDashboardComponent)
  },

  // Reports
  {
    path: 'finance/reports',
    loadComponent: () =>
      import('./reports-statements/pages/reports-dashboard.component')
        .then(m => m.ReportsDashboardComponent)
  },

  // Expenses
  {
    path: 'finance/expenses',
    loadComponent: () =>
      import('./expenses-payments/pages/expenses-dashboard.component')
        .then(m => m.ExpensesDashboardComponent)
  }
];