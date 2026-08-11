export type VisitType = 'COLD'
  

export type VisitStatus =
  | 'OPEN'
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'NEGOTIATION'
  | 'FOLLOW_UP'
  | 'CONVERTED'
  | 'FAILED';

export type ClientType =
  | 'NEW'
  | 'EXISTING';

export type LeadPriority =
  | 'HOT'
  | 'WARM'
  | 'COLD';

export type ProposalStatus =
  | 'YES'
  | 'NO';

export type OrderStatus =
  | 'YES'
  | 'NO';

export type ManagementSupport =
  | 'YES'
  | 'NO'
  | 'OTHER';

export type ActivityType =
  | 'MEETING'
  | 'FOLLOW_UP'
  | 'PROPOSAL_SUBMISSION'
  | 'PAYMENT_COLLECTION'
  | 'SITE_VISIT'
  | 'ORDER_CLOSING'
  | 'COMPLAINT_RESOLUTION'
  | 'INSTALLATION_COORDINATION'
  | 'OTHER';

export type SalesActivityStatus =
  | 'INTERESTED'
  | 'PROPOSAL_FOLLOW_UP'
  | 'NEGOTIATION'
  | 'PROPOSAL_SENT'
  | 'ORDER_CLOSED'
  | 'NOT_INTERESTED'
  | 'FUTURE_OPPORTUNITY';


// ================= SALES VISIT =================

export interface SalesVisitPayload {

  executive_name: string;

  reporting_location: string;

  visit_date: string;

  activity_type: ActivityType;

  visit_type: VisitType;

  customer_name: string;

  contact_person: string;

  contact_number: string;

  city: string;

  client_type: ClientType;

  lead_priority: LeadPriority;

  discussion_summary: string;

  current_status: SalesActivityStatus;

  expected_business_value: number;

  proposal_sent: ProposalStatus;

  order_closed: OrderStatus;

  expected_closure_date: string;

  next_followup_date: string;

  management_support_required: ManagementSupport;

  additional_remarks: string;

  meeting_photo?: File | null;
}


// ================= SALES VISIT RESPONSE =================

export interface SalesVisit extends SalesVisitPayload {

  id: number;

  status?: VisitStatus;

  closure_date?: string;

  basic_amount?: number;

  createdAt?: string;

  updatedAt?: string;
}


// ================= RESPONSE =================

export interface SalesVisitResponse {

  success: boolean;

  message: string;

  data: SalesVisit[];
}


// ================= UPDATE SALES VISIT =================

export interface UpdateSalesVisitPayload {

  status: string;

  closure_date: string;

  basic_amount: number;

  remarks: string;
}