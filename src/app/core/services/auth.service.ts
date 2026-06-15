import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../environments/environment.development';

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
    {
      withCredentials: true
    }
  ).pipe(

    tap((response) => {

  const role = response.user?.roles?.[0];
console.log("roles",role);

  if (role) {

    localStorage.setItem(
      'role',
      role
    );

  }

})

  );

}

getRole(): string | null {
  return localStorage.getItem('role');
}

isLoggedIn(): boolean {
  return !!localStorage.getItem('role');
}

logout(): void {

  localStorage.removeItem('role');

  this.router.navigate(['/login']);

}

  getCurrentUser() {

    const user = localStorage.getItem('role');
console.log("user login",user);

    return user 

  }

  getToken(): string | null {

    return localStorage.getItem('token');

  }


}