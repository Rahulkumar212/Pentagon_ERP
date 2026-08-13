export interface HiringRequirement {

  id: number;

  jobTitle: string;

  department: string;

  employmentType: string;

  openings: number;


  experienceRequired: string;

  qualification: string;

  location: string;

  salaryRange: string;

  applicationDeadline: string;

  hiringManager: string;

  description: string;

  status: 'OPEN' | 'CLOSED' | 'DRAFT';

  candidates: number;

  postedDate: string;

  createdAt?: string;

  updatedAt?: string;
}


// =====================================================
// CREATE HIRING REQUIREMENT
// =====================================================

export interface CreateHiringRequirementPayload {

  jobTitle: string;

  department: string;

  employmentType: string;

  openings: number;

  experienceRequired: string;

  qualification: string;

  location: string;

  salaryRange: string;

  applicationDeadline: string;

  hiringManager: string;

  description: string;
}


// =====================================================
// SINGLE RESPONSE
// =====================================================

export interface HiringRequirementResponse {

  success: boolean;

  message: string;

  data: HiringRequirement;
}


// =====================================================
// LIST RESPONSE
// =====================================================

export interface HiringRequirementsResponse {

  success: boolean;

  message: string;

  data: HiringRequirement[];
}