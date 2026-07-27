import { Routes } from '@angular/router';

export const FINANCE_ROUTES: Routes = [

  // Dashboard
  {
    path: 'finance/dashboard',
    loadComponent: () =>
      import('../../features/Finance/dashboard_overview/pages/dashboard-overview.component')
        .then(m => m.DashboardOverviewComponent)
  },

  // Accounting
  {
    path: 'finance/accounting',
    loadComponent: () =>
      import('./accounting_ledger/pages/accounting-dashboard.component')
        .then(m => m.AccountingDashboardComponent)
  },

//   // Payments
//   {
//     path: 'payments',
//     loadComponent: () =>
//       import('./payments/pages/payments.component')
//         .then(m => m.PaymentsComponent)
//   },

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
  },

//   // Assets
//   {
//     path: 'assets',
//     loadComponent: () =>
//       import('./assets/pages/assets.component')
//         .then(m => m.AssetsComponent)
//   },

//   // Taxation
//   {
//     path: 'taxation',
//     loadComponent: () =>
//       import('./taxation/pages/taxation.component')
//         .then(m => m.TaxationComponent)
//   },

//   // Configuration
//   {
//     path: 'configuration',
//     loadComponent: () =>
//       import('./configuration/pages/configuration.component')
//         .then(m => m.ConfigurationComponent)
//   },


];