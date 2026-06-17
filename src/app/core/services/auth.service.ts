import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../environments/environment.development';
import { LogoutResponse } from '../models/login-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  private readonly API_URL = environment.apiUrl;

  login(
    empcode: string,
    password: string
  ): Observable<any> {

    return this.http.post<any>(
      `${this.API_URL}/login`,
      {
        empcode,
        password
      },
    ).pipe(

      tap((response) => {

        localStorage.setItem(
          'role',
          response.user.roles[0]
        );

        localStorage.setItem(
          'userName',
          response.user.name
        );

      })

    );

  }

 logout(): Observable<LogoutResponse> {
  return this.http.post<LogoutResponse>(
    `${this.API_URL}/logout`,
    {}
  );
}

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('role');
  }


  getCurrentUser() {

    const user = localStorage.getItem('role');
    console.log("user login", user);

    return user

  }

  getToken(): string | null {

    return localStorage.getItem('token');

  }


}