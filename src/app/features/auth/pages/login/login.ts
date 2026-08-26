import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth/auth.service';
import { ToastService } from '../../../../core/services/toast/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
})
export class LoginComponent {

  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  private readonly toast = inject(ToastService);

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
        const role = response.user?.roles?.[0];
       
        console.log('ROLE:', role);

        console.log('USER:', response.user);

        switch (role) {

          // =====================================================
          // SALES
          // =====================================================

          case 'SALES_MANAGER':
          case 'SALES_EXECUTIVE':
            this.router.navigate(['/sales-executive']);
            break;


          // =====================================================
          // SALES DIRECTOR
          // =====================================================

          case 'SALES_DIRECTOR':
            this.router.navigate(['/sales-director/dashboard-overview']);
            break;


          // =====================================================
          // SUPPLY CHAIN
          // =====================================================

          case 'SCM_MANAGER':
          case 'SCM_EXECUTIVE':
          case 'SUPPLY_CHAIN_EXECUTIVE':
            this.router.navigate(['/scm-executive']);
            break;


          // =====================================================
          // SUPPLY CHAIN DIRECTOR
          // =====================================================

          case 'SUPPLY_CHAIN_DIRECTOR':
            this.router.navigate(['/supply-chain-director']);
            break;


          // =====================================================
          // HR
          // =====================================================

          case 'HR_MANAGER':
          case 'HR_EXECUTIVE':
            this.router.navigate(['/hr-dashboard']);
            break;


          // =====================================================
          // FINANCE
          // =====================================================

          case 'FINANCE_MANAGER':
          case 'ACCOUNTANT':
            this.router.navigate(['/finance/dashboard']);
            break;


          // =====================================================
          // FINANCE DIRECTOR
          // =====================================================

          case 'FINANCE_DIRECTOR':
            this.router.navigate(['/finance-director']);
            break;


          // =====================================================
          // GEM
          // =====================================================

          case 'GEM_MANAGER':
          case 'GEM_EXECUTIVE':
            this.router.navigate(['/gem']);
            break;


          // =====================================================
          // GEM DIRECTOR
          // =====================================================

          case 'GEM_DIRECTOR':
            this.router.navigate(['/gem-director']);
            break;


          // =====================================================
          // OPERATIONS
          // =====================================================

          case 'OPERATIONS_MANAGER':
          case 'OPERATIONS_EXECUTIVE':
            this.router.navigate(['/operations']);
            break;


          // =====================================================
          // SUPER ADMIN
          // =====================================================

          case 'SUPER_ADMIN':
            this.router.navigate(['/executive-center']);
            break;


          // =====================================================
          // DEFAULT
          // =====================================================

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