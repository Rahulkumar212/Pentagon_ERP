import { Employee } from './employee.type';

// =====================================================
// TASK CHECKLIST
// =====================================================

export interface TaskChecklist {
  id: number;
  text: string;
  category: string;
  completed: boolean;
  employeeOnboardId: number;
}

export interface TaskChecklistResponse {
  success: boolean;
  message: string;
  data: TaskChecklist[];
}

// =====================================================
// EMPLOYEE ONBOARD
// =====================================================

export interface EmployeeOnboard {
  id: number;
  joiningDate: string;
  candidateName: string | null;
  jobTitle: string | null;
  taskCheckLists: TaskChecklist[];
}

export interface EmployeeOnboardPayload {
  candidateName: string;
  jobTitle: string;
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

// =====================================================
// EMPLOYEE NAME + DESIGNATION
// =====================================================

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

// =====================================================
// HIRED JOB APPLICANT
// =====================================================

export interface HiredJobApplicant {
  id: number;
  candidateName: string;
  email: string;
  mobile: string;
  cvUrl?: string | null;
  status: 'HIRED';
  appliedAt: string;

  hiringRequirement: {
    id: number;
    jobTitle: string;
    department: string;
    employmentType: string;
    openings: number;
    experienceRequired: string;
    qualification: string;
    location: string[];
    salaryRange: string;
    applicationDeadline: string;
    hiringManager: string;
    jobStatus: 'OPEN' | 'CLOSED' | 'DRAFT';
    description: string;
    createdAt: string;
    updatedAt: string;
  };
}

// =====================================================
// HIRED JOB APPLICANTS RESPONSE
// =====================================================

export interface HiredJobApplicantsResponse {
  success: boolean;
  count: number;
  data: HiredJobApplicant[];
}