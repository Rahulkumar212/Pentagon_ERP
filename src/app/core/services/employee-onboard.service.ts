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
  EmployeeNameDesignationResponse,
  EmployeeOnboardPayload,
  EmployeeOnboardResponse,
  EmployeeOnboardsResponse,
  TaskChecklist
} from '../models/employee-onboard.type';

import {
  environment
} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeOnboardService {

  private readonly http =
    inject(HttpClient);

  private readonly apiUrl =
    environment.apiUrl;

  createEmployeeOnboard(
    payload: EmployeeOnboardPayload
  ): Observable<EmployeeOnboardResponse> {

    return this.http.post<EmployeeOnboardResponse>(
      `${this.apiUrl}/onboard/create`,
      payload
    );

  }

  getEmployeeOnboards(): Observable<EmployeeOnboardsResponse> {

    return this.http.get<EmployeeOnboardsResponse>(
      `${this.apiUrl}/fetchonboard`
    );

  }

   getEmployeeNameDesignation(): Observable<EmployeeNameDesignationResponse> {

    return this.http.get<EmployeeNameDesignationResponse>(
      `${this.apiUrl}/employee-name-designation`
    );

  }

toggleTaskChecklist(
  taskId: number,
  completed: boolean
): Observable<any> {

  return this.http.patch(

    `${this.apiUrl}/task-checklist/${taskId}/toggle`,

    { completed }

  );

}

getTaskChecklist(
  employeeOnboardId: number
): Observable<TaskChecklist[]> {

  return this.http.get<TaskChecklist[]>(
    `${this.apiUrl}/fetchChecklist/${employeeOnboardId}`
  );

}


}