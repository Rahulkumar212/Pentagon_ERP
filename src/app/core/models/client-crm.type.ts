export type PriorityType =
  | 'LOW'
  | 'MEDIUM'
  | 'HIGH';

export interface OrganizationPayload {
  organization_name: string;
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