import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  // ==========================
  // Success
  // ==========================

  success(
    title: string,
    text?: string
  ) {

    return Swal.fire({

      icon: 'success',

      title,

      text,

      timer: 1800,

      showConfirmButton: false

    });

  }

  // ==========================
  // Error
  // ==========================

  error(
    title: string,
    text?: string
  ) {

    return Swal.fire({

      icon: 'error',

      title,

      text

    });

  }

  // ==========================
  // Warning
  // ==========================

  warning(
    title: string,
    text?: string
  ) {

    return Swal.fire({

      icon: 'warning',

      title,

      text

    });

  }

  // ==========================
  // Confirm
  // ==========================

  confirm(

    title: string,

    text: string

  ) {

    return Swal.fire({

      title,

      text,

      icon: 'warning',

      showCancelButton: true,

      confirmButtonColor: '#dc2626',

      cancelButtonColor: '#6b7280',

      confirmButtonText: 'Yes',

      cancelButtonText: 'Cancel'

    });

  }

}