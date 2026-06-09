import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LOGIN_CREDENTIALS } from '../../features/auth/utils/auth-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) {}

  login(
    employeeCode: string,
    password: string
  ): boolean {

    const user = LOGIN_CREDENTIALS.find(
      credential =>
        credential.employeeCode === employeeCode &&
        credential.password === password
    );

    if (!user) {
      return false;
    }

    localStorage.setItem(
      'user',
      JSON.stringify(user)
    );

    return true;
  }

  logout(): void {

    localStorage.removeItem('user');

    this.router.navigate(['/login']);
  }

  getCurrentUser() {
    const user =
      localStorage.getItem('user');

    return user
      ? JSON.parse(user)
      : null;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}