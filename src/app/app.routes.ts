import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [

  {
    path: '',
    component: MainLayoutComponent,
    children: [

      {
        path: 'executive-center',
        loadComponent: () =>
          import('./features/executive-center/executive-center.component')
            .then(m => m.ExecutiveCenterComponent)
      },

    ]
  }

];