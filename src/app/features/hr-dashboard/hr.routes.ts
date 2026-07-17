import { Routes } from '@angular/router';

export const HR_ROUTES: Routes = [

  {
    path: 'hr-dashboard',
    loadComponent: () =>
      import('./dashboard-overview/pages/hr-dashboard.component')
        .then(m => m.HrDashboardComponent)
  },

  {
    path: 'recruitment',
    loadComponent: () =>
      import('./recruitment-hiring/pages/recruitment-dashboard.component')
        .then(m => m.RecruitmentDashboardComponent)
  },

  {
    path: 'employee-onboarding',
    loadComponent: () =>
      import('./employee-onboarding/pages/onboarding-milestones.component')
        .then(m => m.OnboardingMilestonesComponent)
  },

  {
    path: 'employee-master',
    loadComponent: () =>
      import('./employee-master/pages/employee-master.component')
        .then(m => m.EmployeeMasterComponent)
  },

  {
    path: 'exit-management',
    loadComponent: () =>
      import('./exit-management/pages/exit-management.component')
        .then(m => m.ExitManagementComponent)
  },

  {
    path: 'daily-operations',
    loadComponent: () =>
      import('./operations-management/pages/operations-management.component')
        .then(m => m.OperationsManagementComponent)
  },

  {
    path: 'reports-analytics',
    loadComponent: () =>
      import('./reports-analytics/pages/reports-analytics.component')
        .then(m => m.ReportsAnalyticsComponent)
  }

];