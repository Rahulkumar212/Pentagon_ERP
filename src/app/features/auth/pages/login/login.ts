import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router} from '@angular/router';

import { LOGIN_CREDENTIALS } from '../../utils/auth-data';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  errorMessage = '';

  loginForm = this.fb.group({
    employeeCode: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { employeeCode, password } =
      this.loginForm.getRawValue();

    const user = LOGIN_CREDENTIALS.find(
      credential =>
        credential.employeeCode === employeeCode &&
        credential.password === password
    );

    if (!user) {
      this.errorMessage =
        'Invalid Employee Code or Password';
      return;
    }

    localStorage.setItem(
      'user',
      JSON.stringify(user)
    );

    this.router.navigate(['/executive-center']);
  }
}