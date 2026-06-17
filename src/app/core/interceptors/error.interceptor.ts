import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

import {
  catchError,
  throwError
} from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (

  req,
  next

) => {

  const router = inject(Router);

  return next(req).pipe(

    catchError((error) => {

      switch (error.status) {

        case 401:

          localStorage.clear();

          router.navigate([
            '/login'
          ]);

          break;

        case 403:

          console.error(
            'Access Denied'
          );

          break;

        case 500:

          console.error(
            'Internal Server Error'
          );

          break;

        default:

          console.error(
            'Unexpected Error',
            error
          );

      }

      return throwError(
        () => error
      );

    })

  );

};