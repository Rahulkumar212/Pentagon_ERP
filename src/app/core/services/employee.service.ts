import {
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs';

import {
  CreateEmployeePayload,
  EmployeeResponse,
  EmployeesResponse
} from '../models/employee.type';

import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseApiService{

  createEmployee(
    payload: CreateEmployeePayload
  ): Observable<EmployeeResponse> {

    return this.http.post<EmployeeResponse>(
      `${this.API_URL}/employee/create`,
      payload
    );

  }

  getEmployees(): Observable<EmployeesResponse> {

    return this.http.get<EmployeesResponse>(
      `${this.API_URL}/fetchEmp`
    );

  }

}