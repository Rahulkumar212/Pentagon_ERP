import { Employee } from './employee.type';

export interface TaskChecklist {

  id: number;

  text: string;

  category: string;

  completed: boolean;

  employeeOnboardId: number;

}

export interface EmployeeOnboard {

  id: number;

  joiningDate: string;

  employeeId: number;

  employee: Employee;

  taskCheckLists: TaskChecklist[];

}

export interface EmployeeOnboardPayload {

  employeeId: number;

  joiningDate: string;

}

export interface EmployeeOnboardResponse {

  success: boolean;

  message: string;

  data: EmployeeOnboard;

}

export interface EmployeeOnboardsResponse {

  success: boolean;

  count: number;

  data: EmployeeOnboard[];

}

export interface EmployeeNameDesignation {

  id: number;

  fullName: string;

  designation: string;

}

export interface EmployeeNameDesignationResponse {

  success: boolean;

  message: string;

  data: EmployeeNameDesignation[];

}

