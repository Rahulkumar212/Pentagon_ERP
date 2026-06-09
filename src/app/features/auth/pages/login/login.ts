import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

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

  errorMessage = '';

  // 👇 Add this
  showPassword = false;

  loginForm = this.fb.group({
    employeeCode: [
      '',
      Validators.required
    ],
    password: [
      '',
      Validators.required
    ],
  });

  // 👇 Add this
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const {
      employeeCode,
      password
    } = this.loginForm.getRawValue();

    const isLoggedIn =
      this.authService.login(
        employeeCode!,
        password!
      );

    if (!isLoggedIn) {

      this.errorMessage =
        'Invalid Employee Code or Password';

      return;
    }

    this.router.navigate([
      '/executive-center'
    ]);
  }
}