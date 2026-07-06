// import {
//   ApplicationConfig,
//   provideBrowserGlobalErrorListeners
// } from '@angular/core';

// import {
//   provideRouter
// } from '@angular/router';

// import {
//   provideAnimations
// } from '@angular/platform-browser/animations';

// import {
//   provideToastr
// } from 'ngx-toastr';

// import {
//   provideHttpClient,
//   withInterceptors
// } from '@angular/common/http';

// import { routes } from './app.routes';
// import { authInterceptor } from './core/interceptors/auth.interceptor';
// import { errorInterceptor } from './core/interceptors/error.interceptor';

// export const appConfig: ApplicationConfig = {

//   providers: [

//     provideBrowserGlobalErrorListeners(),

//     provideRouter(routes),

//     provideHttpClient(

//       withInterceptors([
//         authInterceptor,
//           errorInterceptor
//       ])

//     ),

//     provideAnimations(),

//     provideToastr({

//       timeOut: 3000,
//       positionClass: 'toast-top-right',
//       preventDuplicates: true,
//       closeButton: true,
//       progressBar: true

//     })

//   ]

// };







import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';

import {
  provideRouter
} from '@angular/router';

import {
  provideAnimations
} from '@angular/platform-browser/animations';

import {
  provideToastr
} from 'ngx-toastr';

import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';

import {
  provideEchartsCore
} from 'ngx-echarts';

import * as echarts from 'echarts/core';

import {
  PieChart,
  BarChart,
  LineChart
} from 'echarts/charts';

import {
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TitleComponent
} from 'echarts/components';

import {
  CanvasRenderer
} from 'echarts/renderers';

import { routes } from './app.routes';

import { authInterceptor } from './core/interceptors/auth.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';

echarts.use([
  PieChart,
  BarChart,
  LineChart,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TitleComponent,
  CanvasRenderer
]);

export const appConfig: ApplicationConfig = {

  providers: [

    provideBrowserGlobalErrorListeners(),

    provideRouter(routes),

    provideHttpClient(

      withInterceptors([
        authInterceptor,
        errorInterceptor
      ])

    ),

    provideAnimations(),

    provideToastr({

      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
      progressBar: true

    }),

    provideEchartsCore({

      echarts

    })

  ]

};