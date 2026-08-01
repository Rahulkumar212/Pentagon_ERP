export type OrganizationName =
  | 'PTGN'
  | 'SEST';

export interface Employee {

  id: number;

  fullName: string;

  workEmail: string;

  mobileNumber: string;

  panNumber: string;

  aadhaarNumber: string;

  dob: string;

  org_name: OrganizationName;

  designation: string;

  department: string;

  salary: number;

  status: 'Active' | 'Probation' | 'On Leave';

  bankName: string;

  accountNumber: string;

  joiningDate?: string;

  createdAt?: string;

  updatedAt?: string;

}

export interface CreateEmployeePayload {


  fullName: string;

  workEmail: string;

  mobileNumber: string;

  panNumber: string;

  aadhaarNumber: string;

  dob: string;

   org_name: OrganizationName;

  designation: string;

  department: string;

  salary: number;

  status: 'Active' | 'Probation' | 'On Leave';

  bankName: string;

  accountNumber: string;


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