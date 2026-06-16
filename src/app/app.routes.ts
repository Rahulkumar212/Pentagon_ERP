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

      {
        path: 'executive-center',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/executive-center/pages/executive-center.component').then(
            (m) => m.ExecutiveCenterComponent,
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
        path: 'orders',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/orders/pages/orders.component').then((m) => m.OrdersComponent),
      },
    ],
  },

  // Invalid Route
  {
    path: '**',
    redirectTo: 'login',
  },
];
