export type VisitType =
  | 'COLD'
  | 'REPEAT'
  | 'TELECALL';

  export type LeadType =
  | 'HOT'
  | 'WARM';

export type VisitStatus =
  | 'OPEN'
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'NEGOTIATION'
  | 'FOLLOW_UP'
  | 'CONVERTED'
  | 'FAILED';

export interface SalesVisitPayload {

  executive_name: string;

  visit_date: string;

  visit_type: VisitType;

  customer_name: string;

  customer_address: string;

  contact_person: string;

  contact_number: string;

  customer_email: string;

  product_type: string;

  product_description: string;

  quantity: number;

  remarks: string;
  lead_type: LeadType;
}

export interface SalesVisit
  extends SalesVisitPayload {

  id: number;

  status?: VisitStatus;

  closure_date?: string;

  basic_amount?: number;

  createdAt?: string;

  updatedAt?: string;
}

export interface SalesVisitResponse {

  success: boolean;

  message: string;

  data: SalesVisit[];
}

export type LeadResponse =
  SalesVisitResponse;


  export interface UpdateSalesVisitPayload {

   status: string;

  closure_date: string;

  basic_amount: number;

  remarks: string;

}