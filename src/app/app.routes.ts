import { Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

import { authRoutes } from './features/auth/auth.routes';
import { HR_ROUTES } from './features/hr-dashboard/hr.routes';
import { FINANCE_ROUTES } from './features/Finance/finance.routes';

import { authGuard } from './core/guards/auth.guards';

export const routes: Routes = [

  // Auth Routes
  ...authRoutes,

  // Main Layout
  {
    path: '',
    component: MainLayoutComponent,

    children: [

      // Sales Executive
      {
        path: 'sales-executive',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/executive-center/sales-executive/sales-executive.component')
            .then(m => m.SalesExecutiveComponent),
      },

      // SCM Executive
      {
        path: 'scm-executive',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/executive-center/scm-executive/scm-executive.component')
            .then(m => m.ScmExecutiveComponent),
      },

      // CRM
      {
        path: 'crm',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/client-crm/client-crm.component')
            .then(m => m.ClientCrmComponent),
      },

      // Billing
      {
        path: 'billing-orders',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/billing-orders/pages/billing-orders.component')
            .then(m => m.BillingOrdersComponent),
      },

      // Institution
      {
        path: 'institution-visit-planner',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/institution-visit-planner/pages/institution-visit-planner.component')
            .then(m => m.InstitutionVisitPlannerComponent),
      },

      // HR
      ...HR_ROUTES,

      // Finance
      ...FINANCE_ROUTES,

      // Sales Analytics
      {
        path: 'sales-analytics',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/sales-analytics/pages/sales-analytics.component')
            .then(m => m.SalesAnalyticsComponent),
      },

      // Task Collaboration
      {
        path: 'task-collaboration',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/task-collaboration/pages/task-collaboration.component')
            .then(m => m.TaskCollaborationComponent),
      },

      // SCM Dashboard
      {
        path: 'supply-chain',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/scm-dashboard/pages/scm-dashboard.component')
            .then(m => m.ScmDashboardComponent),
      },

      // Operations
      {
        path: 'operations',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/operations/operations-dashboard.component')
            .then(m => m.OperationsDashboardComponent),
      }

    ]

  },

  {
    path: '**',
    redirectTo: 'login'
  }

];