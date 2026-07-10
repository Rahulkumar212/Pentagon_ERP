import {
  Injectable,
  inject
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  CreateEmployeePayload,
  EmployeeResponse,
  EmployeesResponse
} from '../models/employee.type';

import {
  environment
} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly http =
    inject(HttpClient);

  private readonly apiUrl =
    environment.apiUrl;

  createEmployee(
    payload: CreateEmployeePayload
  ): Observable<EmployeeResponse> {

    return this.http.post<EmployeeResponse>(
      `${this.apiUrl}/employee/create`,
      payload
    );

  }

  getEmployees(): Observable<EmployeesResponse> {

    return this.http.get<EmployeesResponse>(
      `${this.apiUrl}/fetchEmp`
    );

  }

}