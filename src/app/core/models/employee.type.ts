export interface Employee {

  id: number;

  employeeCode: string;

  fullName: string;

  workEmail: string;

  mobileNumber: string;

  panNumber: string;

  aadhaarNumber: string;

  dob: string;

  org_name: string;

  designation: string;

  department: string;

  salary: number;

  status: 'Active' | 'Probation' | 'On Leave';

  bankName: string;

  accountNumber: string;

  joiningDate: string;

  createdAt?: string;

  updatedAt?: string;

}

export interface CreateEmployeePayload {

  employeeCode: string;

  fullName: string;

  workEmail: string;

  mobileNumber: string;

  panNumber: string;

  aadhaarNumber: string;

  dob: string;

  org_name: string;

  designation: string;

  department: string;

  salary: number;

  status: 'Active' | 'Probation' | 'On Leave';

  bankName: string;

  accountNumber: string;

  joiningDate: string;

}

export interface EmployeeResponse {

  success: boolean;

  message: string;

  data: Employee;

}

export interface EmployeesResponse {

  success: boolean;

  message: string;

  data: Employee[];

}