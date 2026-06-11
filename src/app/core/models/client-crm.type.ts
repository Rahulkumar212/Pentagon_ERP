export type PriorityType =
  | 'LOW'
  | 'MEDIUM'
  | 'HIGH';

export type LeadStatus =
  | 'RAW'
  | 'INTERESTED'
  | 'IN_PROGRESS'
  | 'CONVERTED'
  | 'Follow Up Required'
  | 'No Answer'
  | 'Busy'
  | 'Wrong Number'
  | 'Not Interested';

export interface OrganizationPayload {
  organization_name: string;
  industry_sector?: string;
  name_of_poc: string;
  designation: string;
  phoneNumber: string;
  email: string;
  address: string;
  city: string;
  notes: string;
  priority: PriorityType;
}

export interface Organization
  extends OrganizationPayload {

  id: number;

  createdAt?: string;

  updatedAt?: string;
}

export interface LeadResponse {
  success: boolean;
  message: string;
  data: Organization[];
}