export type VisitType =
  | 'COLD'

export type LeadType =
  | 'HOT_PROSPECTS'
  | 'WARM_PROSPECTS';

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


export interface SalesVisitPayload {

  executive_name: string;
  designation: string;

  visit_date: string;
  visit_type: VisitType;

  customer_name: string;
  customer_address: string;
  contact_person: string;
  contact_number: string;
  customer_email: string;
  city: string;
  

  product_type: string;
  product_description: string;
  quantity: number;

  remarks: string;
  lead_type: LeadType;

  // Missing fields
  reporting_location: string;
  activity_type: string;

  client_type: 'NEW' | 'EXISTING';

  lead_priority: LeadPriority;

  discussion_summary: string;

  current_status: string;

  expected_business_value: number;

  proposal_sent: 'YES' | 'NO';

  order_closed: 'YES' | 'NO';

  expected_closure_date: string;

  next_followup_date: string;

  management_support_required: 'YES' | 'NO' | 'OTHER';

  additional_remarks: string;

  meeting_photo?: File | null;

  total_calls_made: number;

  connected_calls: number;

  meetings_scheduled: number;

  new_leads_generated: number;
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



/* ================= CALL DISCUSSION ================= */

export type CallType =
  | 'PHONE'
  | 'WHATSAPP'
  | 'VIDEO_CALL'
  | 'MEETING';

export type DiscussionOutcome =
  | 'INTERESTED'
  | 'FOLLOW_UP'
  | 'NEGOTIATION'
  | 'QUOTATION_REQUIRED'
  | 'NOT_INTERESTED'
  | 'CONVERTED';

export type FollowupMode =
  | 'PHONE'
  | 'WHATSAPP'
  | 'EMAIL'
  | 'MEETING';

export type ApprovalStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'REJECTED';


/* ================= CREATE CALL DISCUSSION ================= */

export interface CallDiscussionPayload {

  sales_visit_id: number;

  call_date: string;

  call_time: string;

  call_type: CallType;

  duration: number;

  discussion: string;

  requirement: string;

  solution: string;

  outcome: DiscussionOutcome;

  expected_amount: number;

  next_followup_date: string;

  followup_mode: FollowupMode;

  remarks: string;

}


/* ================= CALL DISCUSSION ================= */

export interface CallDiscussion
  extends CallDiscussionPayload {

  id: number;

  executive_name: string;

  customer_name: string;

  approval_status: ApprovalStatus;

  approved_by: string;

  approved_date: string;

  management_remarks: string;

  createdAt?: string;

  updatedAt?: string;

}


/* ================= RESPONSE ================= */

export interface CallDiscussionResponse {

  success: boolean;

  message: string;

  data: CallDiscussion[];

}