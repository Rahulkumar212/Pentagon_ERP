import { Injectable } from '@angular/core';
import { LoginCredential } from './models/auth.type';
import { LOGIN_CREDENTIALS } from './utils/auth-data';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private currentUser: LoginCredential | null = null;

  login(employeeCode: string, password: string): LoginCredential | null {

    const user = LOGIN_CREDENTIALS.find(
      u =>
        u.employeeCode === employeeCode &&
        u.password === password
    );

    if (user) {
      this.currentUser = user;
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }

    return null;
  }

  getUser(): LoginCredential | null {
    if (this.currentUser) return this.currentUser;

    const data = localStorage.getItem('user');
    if (data) {
      this.currentUser = JSON.parse(data);
      return this.currentUser;
    }

    return null;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('user');
  }
}