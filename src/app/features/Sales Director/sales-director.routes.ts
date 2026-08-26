import { Routes } from '@angular/router';

export const SALES_DIRECTOR_ROUTES: Routes = [

  // =====================================================
  // MAIN
  // =====================================================

  {
    path: 'sales-director/dashboard-overview',
    loadComponent: () =>
      import('./dashboard_overview/pages/sales-director-dashboard.component')
        .then(m => m.SalesDirectorDashboardComponent),
  },

//   {
//     path: 'approvals',
//     loadComponent: () =>
//       import('./approval-center/approval-center.component')
//         .then(m => m.ApprovalCenterComponent),
//   },

//   {
//     path: 'order-tracking',
//     loadComponent: () =>
//       import('./order-tracking/order-tracking.component')
//         .then(m => m.OrderTrackingComponent),
//   },


//   // =====================================================
//   // SALES MANAGEMENT
//   // =====================================================

//   {
//     path: 'pipeline',
//     loadComponent: () =>
//       import('./pipeline/pipeline.component')
//         .then(m => m.PipelineComponent),
//   },

//   {
//     path: 'opportunities',
//     loadComponent: () =>
//       import('./opportunities/opportunities.component')
//         .then(m => m.OpportunitiesComponent),
//   },

//   {
//     path: 'customers',
//     loadComponent: () =>
//       import('./customers/customers.component')
//         .then(m => m.CustomersComponent),
//   },

//   {
//     path: 'sales-orders',
//     loadComponent: () =>
//       import('./sales-orders/sales-orders.component')
//         .then(m => m.SalesOrdersComponent),
//   },

//   {
//     path: 'quotations',
//     loadComponent: () =>
//       import('./quotations/quotations.component')
//         .then(m => m.QuotationsComponent),
//   },


//   // =====================================================
//   // PERFORMANCE & CONTROL
//   // =====================================================

//   {
//     path: 'team-performance',
//     loadComponent: () =>
//       import('./team-performance/team-performance.component')
//         .then(m => m.TeamPerformanceComponent),
//   },

//   {
//     path: 'regional-performance',
//     loadComponent: () =>
//       import('./regional-performance/regional-performance.component')
//         .then(m => m.RegionalPerformanceComponent),
//   },

//   {
//     path: 'targets',
//     loadComponent: () =>
//       import('./targets/targets.component')
//         .then(m => m.TargetsComponent),
//   },

//   {
//     path: 'revenue-performance',
//     loadComponent: () =>
//       import('./revenue-performance/revenue-performance.component')
//         .then(m => m.RevenuePerformanceComponent),
//   },


//   // =====================================================
//   // STRATEGIC CONTROL
//   // =====================================================

//   {
//     path: 'pricing',
//     loadComponent: () =>
//       import('./pricing/pricing.component')
//         .then(m => m.PricingComponent),
//   },

//   {
//     path: 'key-accounts',
//     loadComponent: () =>
//       import('./key-accounts/key-accounts.component')
//         .then(m => m.KeyAccountsComponent),
//   },

//   {
//     path: 'forecast',
//     loadComponent: () =>
//       import('./forecast/forecast.component')
//         .then(m => m.ForecastComponent),
//   },

//   {
//     path: 'critical-attention',
//     loadComponent: () =>
//       import('./critical-attention/critical-attention.component')
//         .then(m => m.CriticalAttentionComponent),
//   },


//   // =====================================================
//   // CROSS-FUNCTIONAL OVERSIGHT
//   // =====================================================

//   {
//     path: 'it',
//     loadComponent: () =>
//       import('./it/it.component')
//         .then(m => m.ItComponent),
//   },

//   {
//     path: 'hr',
//     loadComponent: () =>
//       import('./hr/hr.component')
//         .then(m => m.HrComponent),
//   },

//   {
//     path: 'finance',
//     loadComponent: () =>
//       import('./finance/finance.component')
//         .then(m => m.FinanceComponent),
//   },

//   {
//     path: 'supply-chain',
//     loadComponent: () =>
//       import('./supply-chain/supply-chain.component')
//         .then(m => m.SupplyChainComponent),
//   },


//   // =====================================================
//   // REPORTS & ANALYTICS
//   // =====================================================

//   {
//     path: 'reports/sales',
//     loadComponent: () =>
//       import('./reports/sales-reports/sales-reports.component')
//         .then(m => m.SalesReportsComponent),
//   },

//   {
//     path: 'reports/revenue',
//     loadComponent: () =>
//       import('./reports/revenue-reports/revenue-reports.component')
//         .then(m => m.RevenueReportsComponent),
//   },

//   {
//     path: 'reports/customers',
//     loadComponent: () =>
//       import('./reports/customer-reports/customer-reports.component')
//         .then(m => m.CustomerReportsComponent),
//   },

//   {
//     path: 'reports/management',
//     loadComponent: () =>
//       import('./reports/management-reports/management-reports.component')
//         .then(m => m.ManagementReportsComponent),
//   },


  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },

];