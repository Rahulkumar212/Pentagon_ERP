export interface InstitutionVisit {

  id: number;

  institution_type: string;

  institution_name: string;

  address: string;

  contact_person: string;

  contact_number: string;

  designation: string;

  planned_visit_date: string;

  createdAt?: string;

  updatedAt?: string;

}

export interface CreateInstitutionVisitPayload {

  institution_type: string;

  institution_name: string;

  address: string;

  contact_person: string;

  contact_number: string;

  designation: string;

  planned_visit_date: string;

}

export interface InstitutionVisitResponse {

  success: boolean;

  message: string;

  data: InstitutionVisit[];

}

export interface InstitutionVisitListResponse {

  success: boolean;

  message: string;

  data: InstitutionVisit[];

}