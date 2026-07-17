import {
  Injectable,
  signal
} from '@angular/core';

import {
  Observable
} from 'rxjs';

import {
  EmployeeNameDesignationResponse,
  EmployeeOnboard,
  EmployeeOnboardPayload,
  EmployeeOnboardResponse,
  EmployeeOnboardsResponse,
  TaskChecklist,
  TaskChecklistResponse
} from '../models/employee-onboard.type';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeOnboardService extends BaseApiService{

   readonly employees = signal<EmployeeOnboard[]>([]);
  readonly selectedEmployee = signal<EmployeeOnboard | null>(null);
  readonly checklist = signal<TaskChecklist[]>([]);
  readonly employeeChecklists = signal<
  Record<number, TaskChecklist[]>
>({});
  

 getProgress(employeeId: number): number {

  const checklist =
    this.employeeChecklists()[employeeId] ?? [];

  if (!checklist.length) {

    return 0;

  }

  const completed =
    checklist.filter(item => item.completed).length;

  return Math.round(
    (completed / checklist.length) * 100
  );

}


loadEmployees(): void {

  this.getEmployeeOnboards().subscribe({

    next: (response) => {

      this.employees.set(response.data);

      if (!response.data.length) {
        return;
      }

      this.selectedEmployee.set(response.data[0]);

      response.data.forEach(employee => {

        this.loadChecklist(employee.id);

      });

    },

    error: console.error

  });

}

selectEmployee(
  employee: EmployeeOnboard
): void {

  this.selectedEmployee.set(employee);

  this.loadChecklist(employee.id);

}


loadChecklist(employeeId: number): void {

  this.getTaskChecklist(employeeId)
    .subscribe({

      next: (response) => {

        this.employeeChecklists.update(state => ({

          ...state,

          [employeeId]: response.data

        }));

        // Selected employee ki checklist bhi update karo
        this.checklist.set(response.data);

      },

      error: console.error

    });

}

toggleChecklist(
  item: TaskChecklist
): void {

  const completed = !item.completed;

  this.toggleTaskChecklist(
    item.id,
    completed
  ).subscribe({

    next: () => {

      this.checklist.update(tasks =>
        tasks.map(task =>
          task.id === item.id
            ? { ...task, completed }
            : task
        )
      );

      const employeeId =
        this.selectedEmployee()?.id;

      if (!employeeId) {

        return;

      }

      this.employeeChecklists.update(state => ({

        ...state,

        [employeeId]:
          (state[employeeId] ?? []).map(task =>
            task.id === item.id
              ? { ...task, completed }
              : task
          )

      }));

    },

    error: console.error

  });

}


generateEmployeeCodeForSelectedEmployee(): void {

  const employee = this.selectedEmployee();

  if (!employee) {
    return;
  }

  this.generateEmployeeCode(employee.id)
    .subscribe({

      next: (response) => {

        console.log('Employee Code:', response);

        // Agar backend updated employee bhejta hai
        // to yahan employees signal bhi update kar sakte ho.

      },

      error: console.error

    });

}


  createEmployeeOnboard(
    payload: EmployeeOnboardPayload
  ): Observable<EmployeeOnboardResponse> {

    return this.http.post<EmployeeOnboardResponse>(
      `${this.API_URL}/onboard/create`,
      payload
    );

  }

  getEmployeeOnboards(): Observable<EmployeeOnboardsResponse> {

    return this.http.get<EmployeeOnboardsResponse>(
      `${this.API_URL}/fetchonboard`
    );

  }

   getEmployeeNameDesignation(): Observable<EmployeeNameDesignationResponse> {

    return this.http.get<EmployeeNameDesignationResponse>(
      `${this.API_URL}/employee-name-designation`
    );

  }

toggleTaskChecklist(
  taskId: number,
  completed: boolean
): Observable<any> {

  return this.http.patch(

    `${this.API_URL}/task-checklist/${taskId}/toggle`,

    { completed }

  );

}

getTaskChecklist(
  employeeOnboardId: number
): Observable<TaskChecklistResponse> {

  return this.http.get<TaskChecklistResponse>(
    `${this.API_URL}/fetchChecklist/${employeeOnboardId}`
  );

}


generateEmployeeCode(
  employeeOnboardId: number
): Observable<any> {

  return this.http.post(

    `${this.API_URL}/generateEmpCode`,

    {
      employeeOnboardId
    }

  );

}


}