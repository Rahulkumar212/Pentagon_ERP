import { Routes } from '@angular/router';

export const FINANCE_ROUTES: Routes = [

  // Dashboard
  {
    path: 'finance/dashboard',
    loadComponent: () =>
      import('../../features/Finance/dashboard_overview/pages/dashboard-overview.component')
        .then(m => m.DashboardOverviewComponent)
  },

//   // Accounting
//   {
//     path: 'accounting',
//     loadComponent: () =>
//       import('./accounting/pages/accounting.component')
//         .then(m => m.AccountingComponent)
//   },

//   // Payments
//   {
//     path: 'payments',
//     loadComponent: () =>
//       import('./payments/pages/payments.component')
//         .then(m => m.PaymentsComponent)
//   },

//   // Receivables
//   {
//     path: 'receivables',
//     loadComponent: () =>
//       import('./receivables/pages/receivables.component')
//         .then(m => m.ReceivablesComponent)
//   },

//   // Payables
//   {
//     path: 'payables',
//     loadComponent: () =>
//       import('./payables/pages/payables.component')
//         .then(m => m.PayablesComponent)
//   },

//   // Banking
//   {
//     path: 'banking',
//     loadComponent: () =>
//       import('./banking/pages/banking.component')
//         .then(m => m.BankingComponent)
//   },

//   // Payroll Finance
//   {
//     path: 'payroll-finance',
//     loadComponent: () =>
//       import('./payroll-finance/pages/payroll-finance.component')
//         .then(m => m.PayrollFinanceComponent)
//   },

//   // Budget
//   {
//     path: 'budget',
//     loadComponent: () =>
//       import('./budget/pages/budget.component')
//         .then(m => m.BudgetComponent)
//   },

//   // Reports
//   {
//     path: 'reports',
//     loadComponent: () =>
//       import('./reports/pages/reports.component')
//         .then(m => m.ReportsComponent)
//   },

//   // Expenses
//   {
//     path: 'expenses',
//     loadComponent: () =>
//       import('./expenses/pages/expenses.component')
//         .then(m => m.ExpensesComponent)
//   },

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

  // Fallback
  {
    path: '**',
    redirectTo: ''
  }

];