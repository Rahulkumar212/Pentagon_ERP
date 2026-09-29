
import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guards';

export const SALES_ROUTES: Routes = [

  // =========================================================
  // SALES DASHBOARD
  // =========================================================

  {
    path: 'sales-executive',
    canActivate: [authGuard],
    loadComponent: () =>
      import(
        './sales-executive/sales-executive.component'
      ).then(
        (m) => m.SalesExecutiveComponent
      ),
  },

  // =========================================================
  // CRM
  // =========================================================

  {
    path: 'crm',
    canActivate: [authGuard],
    loadComponent: () =>
      import(
        './client-crm/client-crm.component'
      ).then(
        (m) => m.ClientCrmComponent
      ),
  },

  // =========================================================
  // BILLING / ORDERS
  // =========================================================


  {
    path: 'sales-orders',
    canActivate: [authGuard],
    loadComponent: () =>
      import(
        './orders/pages/sales-orders.component'
      ).then(
        (m) => m.SalesOrdersComponent
      ),
  },

  {
    path: 'billing-orders',
    canActivate: [authGuard],
    loadComponent: () =>
      import(
        './billing-orders/pages/billing-orders.component'
      ).then(
        (m) => m.BillingOrdersComponent
      ),
  },

  // =========================================================
  // INSTITUTION VISIT PLANNER
  // =========================================================

  {
    path: 'institution-visit-planner',
    canActivate: [authGuard],
    loadComponent: () =>
      import(
        './institution-visit-planner/pages/institution-visit-planner.component'
      ).then(
        (m) => m.InstitutionVisitPlannerComponent
      ),
  },
];

