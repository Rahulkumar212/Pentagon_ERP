import { Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

import { authRoutes } from './features/auth/auth.routes';
import { HR_ROUTES } from './features/hr-dashboard/hr.routes';
import { FINANCE_ROUTES } from './features/Finance/finance.routes';

import { authGuard } from './core/guards/auth.guards';
import { SALES_DIRECTOR_ROUTES } from './features/Sales Director/sales-director.routes';
import { LOGISTICS_ROUTES } from './features/logistics/logistics.route';
import { SALES_ROUTES } from './features/sales/sales.routes';

export const routes: Routes = [

  // Auth Routes
  ...authRoutes,

  // Main Layout
  {
    path: '',
    component: MainLayoutComponent,

    children: [

      // sales
      ...SALES_ROUTES,

      // HR
      ...HR_ROUTES,

      // Finance
      ...FINANCE_ROUTES,

      // sales director
      ...SALES_DIRECTOR_ROUTES,

      // logistics
      ...LOGISTICS_ROUTES,

      // Sales Analytics
      {
        path: 'sales-analytics',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/sales-analytics/pages/sales-analytics.component')
            .then(m => m.SalesAnalyticsComponent),
      }
    ]

  },

  {
    path: '**',
    redirectTo: 'login'
  }

];