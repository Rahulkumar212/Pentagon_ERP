import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);
  private toast = inject(ToastService);

  errorMessage = '';

  showPassword = false;

  loginForm = this.fb.group({
    employeeCode: [
      '',
      Validators.required
    ],
    password: [
      '',
      Validators.required
    ]
  });

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

 onSubmit(): void {

  if (this.loginForm.invalid) {

    this.loginForm.markAllAsTouched();

    this.toast.warning(
      'Please fill all required fields'
    );

    return;

  }

  const {
    employeeCode,
    password
  } = this.loginForm.getRawValue();

  this.authService.login(
    employeeCode!,
    password!
  ).subscribe({

    next: (response) => {

      this.toast.success(
        'Login Successful'
      );
      // const role = response.user?.roles;
      const role = response.user?.roles?.[0];


      switch (role) {
        case 'SALES_MANAGER':
        case 'SALES_EXECUTIVE':
          console.log("role:",role)
          this.router.navigate(['/sales-executive']);
          break;

        case 'SCM_MANAGER':
        case 'SCM_EXECUTIVE':
        case 'SUPPLY_CHAIN_EXECUTIVE':
          this.router.navigate(['/scm-executive']);
          break;

        case 'HR_MANAGER':
        case 'HR_EXECUTIVE':
          this.router.navigate(['/employees']);
          break;

        case 'FINANCE_MANAGER':
        case 'ACCOUNTANT':
          this.router.navigate(['/finance']);
          break;

        case 'GEM_MANAGER':
        case 'GEM_EXECUTIVE':
          this.router.navigate(['/gem']);
          break;

        case 'OPERATIONS_MANAGER':
        case 'OPERATIONS_EXECUTIVE':
          this.router.navigate(['/operations']);
          break;

        case 'SUPER_ADMIN':
        case 'DIRECTOR':
        case 'MANAGER':
          this.router.navigate(['/executive-center']);
          break;

        default:
          this.router.navigate(['/executive-center']);

      }

    },

    error: () => {

      this.errorMessage =
        'Invalid Employee Code or Password';

      this.toast.error(
        'Invalid Employee Code or Password'
      );

    }

  });

}
}