export interface EmployeeOnboard {

  id: number;

  employee_id: number;

  onboarding_date: string;

  onboarding_status: string;

  remarks: string;

  createdAt?: string;

  updatedAt?: string;

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

  message: string;

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