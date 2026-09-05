
export type VisitStatus =
  | 'OPEN'
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'NEGOTIATION'
  | 'FOLLOW_UP'
  | 'CONVERTED'
  | 'FAILED';

  export type ApprovalDetailStatus =
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'changes-requested';

  
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
  | 'NO'
  | 'ORDER_LOST';

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



  

export interface SalesVisitPayload {
  executive_name: string;
  reporting_location: string;
  visit_date: string;
  activity_type: ActivityType;

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

  order_lost_reason?: string;

  expected_closure_date: string;
  next_followup_date: string;

  management_support_required: ManagementSupport;
  additional_remarks: string;

  meeting_photo?: File | null;
}


export interface SalesVisit {

  id: number;

  executive_name: string;
  reporting_location: string;
  visit_date: string;
  activity_type?: ActivityType | string;

  customer_name: string;
  customer_address?: string | null;

  contact_person: string;
  contact_number: string;
  customer_email?: string | null;

  city: string;

  client_type?: ClientType | string;
  lead_priority: LeadPriority | string;

  discussion_summary?: string | null;
  current_status?: SalesActivityStatus | string;

  expected_business_value?: number | null;

  proposal_sent?: ProposalStatus | string;
  order_closed?: OrderStatus | string;

  order_lost_reason?: string | null;

  expected_closure_date?: string | null;
  next_followup_date?: string | null;

  management_support_required?: ManagementSupport | string;
  additional_remarks?: string | null;

  // Additional database fields
  visit_type?: string | null;

  product_description?: string | null;
  quantity?: number | null;

  remarks?: string | null;

  total_calls_made?: number | null;
  connected_calls?: number | null;
  meetings_scheduled?: number | null;
  new_leads_generated?: number | null;

  closure_date?: string | null;
  basic_amount?: number | null;

  status?: VisitStatus | string | null;

  userId: number;

  type?: string | null;

  meeting_photo?: string | null;

  createdAt?: string;
  updatedAt?: string;
}


export interface SalesVisitResponse {
  success: boolean;
  message: string;
  data: SalesVisit[];
}


export interface SingleSalesVisitResponse {
  success: boolean;
  message: string;
  data: SalesVisit;
}


export interface UpdateSalesVisitPayload {
  status: string;
  closure_date: string;
  basic_amount: number;
  remarks: string;
}