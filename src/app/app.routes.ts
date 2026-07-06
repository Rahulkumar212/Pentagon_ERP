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
          import('./features/hr-dashboard/dashboard-overview/pages/hr-dashboard.component').then((m) => m.HrDashboardComponent),
      },
      {
        path: 'recruitment',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/hr-dashboard/recruitment-hiring/pages/recruitment-dashboard.component').then((m) => m.RecruitmentDashboardComponent),
      },  
      {
        path: 'employee-onboarding',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/hr-dashboard/employee-onboarding/pages/onboarding-milestones.component').then((m) => m.OnboardingMilestonesComponent),
      },
       {
        path: 'employee-master',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/hr-dashboard/employee-master/pages/employee-master.component').then((m) => m.EmployeeMasterComponent),
      },  
      {
        path: 'exit-management',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/hr-dashboard/exit-management/pages/exit-management.component').then((m) => m.ExitManagementComponent),
      },
      {
        path: 'daily-operations',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/hr-dashboard/operations-management/pages/operations-management.component').then((m) => m.OperationsManagementComponent),
      },
       {
        path: 'sales-analytics',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/sales-analytics/pages/sales-analytics.component').then((m) => m.SalesAnalyticsComponent),
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

  {
    path: '**',
    redirectTo: 'login',
  },
];