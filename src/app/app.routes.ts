import { Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { authGuard } from './core/guards/auth.guards';

export const routes: Routes = [
  // Default Route
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  // Login
  {
    path: 'login',
    loadComponent: () => import('./features/auth/pages/login/login').then((m) => m.LoginComponent),
  },

  // Main Layout
  {
    path: '',
    component: MainLayoutComponent,

    children: [
      // Sales Executive Dashboard
      {
        path: 'sales-executive',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/executive-center/sales-executive/sales-executive.component').then(
            (m) => m.SalesExecutiveComponent,
          ),
      },

      // SCM Executive Dashboard
      {
        path: 'scm-executive',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/executive-center/scm-executive/scm-executive.component').then(
            (m) => m.ScmExecutiveComponent,
          ),
      },

      // Client CRM
      {
        path: 'crm',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/client-crm/client-crm.component').then((m) => m.ClientCrmComponent),
      },
      {
        path: 'billing-orders',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/billing-orders/pages/billing-orders.component').then((m) => m.BillingOrdersComponent),
      },
       {
        path: 'institution-visit-planner',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/institution-visit-planner/pages/institution-visit-planner.component').then((m) => m.InstitutionVisitPlannerComponent),
      },
      {
        path: 'hr-dashboard',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/hr-dashboard/pages/hr-dashboard.component').then((m) => m.HrDashboardComponent),
      },
      {
        path: 'task-collaboration',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/task-collaboration/pages/task-collaboration.component').then(
            (m) => m.TaskCollaborationComponent,
          ),
      },
      {
        path: 'supply-chain',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/scm-dashboard/pages/scm-dashboard.component').then(
            (m) => m.ScmDashboardComponent,
          ),
      },
      {
        path: 'operations',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/operations/operations-dashboard.component').then(
            (m) => m.OperationsDashboardComponent,
          ),
      },
    ],
  },

  // Invalid Route
  {
    path: '**',
    redirectTo: 'login',
  },
];