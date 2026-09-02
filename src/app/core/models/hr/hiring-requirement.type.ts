// =====================================================
// HIRING REQUIREMENT
// =====================================================

export interface HiringRequirement {
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
  description: string;

  // API me jobStatus aa raha hai to ideally yahi hona chahiye
  jobStatus: 'OPEN' | 'CLOSED' | 'DRAFT';

  _count: {
    applications: number;
  };

  postedDate?: string;
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
  location: string[];
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


// =====================================================
// JOB APPLICATION
// =====================================================

export interface JobApplication {
  id: number;
  hiringRequirementId: number;
  candidateName: string;
  email: string;
  mobile: string;
  appliedAt: string;
}


// =====================================================
// JOB APPLICATIONS RESPONSE
// =====================================================

export interface JobApplicationsResponse {
  success: boolean;
  message: string;
  data: JobApplication[];
}


// =====================================================
// CANDIDATE
// =====================================================

export interface Candidate {
  id: number;
  name: string;
  designation: string;
  experience: string;
  score: number;
  cvUrl: string;
}


// =====================================================
// HIRING PIPELINE COLUMN
// =====================================================

export interface PipelineColumn {
  title: string;
  candidates: Candidate[];
}