export interface HiringRequirement {

  id: number;

  jobTitle: string;

  department: string;

  employmentType: string;

  description: string;

  status: 'OPEN' | 'CLOSED' | 'DRAFT';

  candidates: number;

  postedDate: string;

  createdAt?: string;

  updatedAt?: string;

}

export interface CreateHiringRequirementPayload {

  jobTitle: string;

  department: string;

  employmentType: string;

  description: string;

}

export interface HiringRequirementResponse {

  success: boolean;

  message: string;

  data: HiringRequirement;

}

export interface HiringRequirementsResponse {

  success: boolean;

  message: string;

  data: HiringRequirement[];

}