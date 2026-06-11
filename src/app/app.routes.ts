import { Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { authGuard } from './core/guards/auth.guards';

export const routes: Routes = [

  // Default Route -> Login
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Login Page
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login/login')
        .then(m => m.LoginComponent)
  },

  // Layout Routes
  {
    path: '',
    component: MainLayoutComponent,

    children: [

      {
        path: 'executive-center',
        canActivate:[authGuard],
        loadComponent: () =>
          import('./features/executive-center/executive-center.component')
            .then(m => m.ExecutiveCenterComponent)
      },
       {
        path: 'crm',
        canActivate:[authGuard],
        loadComponent: () =>
          import('./features/client-crm/client-crm.component')
            .then(m => m.ClientCrmComponent)
      }

    ]
  },

  // Invalid Route
  {
    path: '**',
    redirectTo: 'login'
  }

];