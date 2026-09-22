import { Routes } from '@angular/router';

export const LOGISTICS_ROUTES: Routes = [
  // =====================================================
  // DASHBOARD
  // =====================================================
  {
    path: 'logistics/dashboard-overview',
    loadComponent: () =>
      import(
        './logistics-dashboard/pages/logistics-dashboard.component'
      ).then(
        (m) => m.LogisticsDashboardComponent
      ),
  },

 
  {
    path: 'logistics/pending-actions',
    loadComponent: () =>
      import(
        './pending-actions/pages/pending-actions.component'
      ).then(
        (m) => m.PendingActionsComponent
      ),
  },

  
  {
    path: 'logistics/orders',
    loadComponent: () =>
      import(
        './orders/pages/orders.component'
      ).then(
        (m) => m.OrdersComponent
      ),
  },

  
  {
    path: 'logistics/shipments',
    loadComponent: () =>
      import(
        './shipments/pages/shipments.component'
      ).then(
        (m) => m.ShipmentsComponent
      ),
  },

//   // =====================================================
//   // DISPATCH
//   // =====================================================
//   {
//     path: 'dispatch',
//     loadComponent: () =>
//       import(
//         './logistics-dispatch/pages/logistics-dispatch.component'
//       ).then(
//         (m) => m.LogisticsDispatchComponent
//       ),
//   },

//   // =====================================================
//   // DELIVERY TRACKING
//   // =====================================================
//   {
//     path: 'delivery-tracking',
//     loadComponent: () =>
//       import(
//         './delivery-tracking/pages/delivery-tracking.component'
//       ).then(
//         (m) => m.DeliveryTrackingComponent
//       ),
//   },

//   // =====================================================
//   // STOCK MANAGEMENT
//   // =====================================================
//   {
//     path: 'stock-management',
//     loadComponent: () =>
//       import(
//         './stock-management/pages/stock-management.component'
//       ).then(
//         (m) => m.StockManagementComponent
//       ),
//   },

//   // =====================================================
//   // STOCK MOVEMENT
//   // =====================================================
//   {
//     path: 'stock-movement',
//     loadComponent: () =>
//       import(
//         './stock-movement/pages/stock-movement.component'
//       ).then(
//         (m) => m.StockMovementComponent
//       ),
//   },

//   // =====================================================
//   // DELIVERY PERFORMANCE
//   // =====================================================
//   {
//     path: 'delivery-performance',
//     loadComponent: () =>
//       import(
//         './delivery-performance/pages/delivery-performance.component'
//       ).then(
//         (m) => m.DeliveryPerformanceComponent
//       ),
//   },

//   // =====================================================
//   // REPORTS
//   // =====================================================
//   {
//     path: 'reports',
//     loadComponent: () =>
//       import(
//         './logistics-reports/pages/logistics-reports.component'
//       ).then(
//         (m) => m.LogisticsReportsComponent
//       ),
//   },

  
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard-overview',
  },
];