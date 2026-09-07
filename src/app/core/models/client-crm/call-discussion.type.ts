/* ================= CALL DISCUSSION TYPES ================= */

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


/* ================= SALES VISIT ================= */

export interface CallDiscussionSalesVisit {

  id: number;

  executive_name: string;

  visit_date: string;

  visit_type?: string | null;

  customer_name: string;

  customer_address?: string | null;

  contact_person: string;

  contact_number: string;

  customer_email?: string | null;

  city: string;

  product_description?: string | null;

  quantity?: number | null;

  remarks?: string | null;

  reporting_location?: string | null;

  activity_type?: string | null;

  client_type?: string | null;

  lead_priority?: string | null;

  discussion_summary?: string | null;

  current_status?: string | null;

  expected_business_value?: number | null;

  proposal_sent?: string | null;

  order_closed?: string | null;

  order_lost_reason?: string | null;

  total_calls_made?: number | null;

  connected_calls?: number | null;

  meetings_scheduled?: number | null;

  new_leads_generated?: number | null;

  expected_closure_date?: string | null;

  next_followup_date?: string | null;

  management_support_required?: string | null;

  additional_remarks?: string | null;

  meeting_photo?: string | null;

  reason?: string | null;

  closure_date?: string | null;

  basic_amount?: number | null;

  status?: ApprovalStatus | string | null;

  userId: number;

  type?: string | null;

  createdAt?: string;

  updatedAt?: string;
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
  
   status?: ApprovalStatus | string | null;

  createdAt?: string;

  updatedAt?: string;

  /*
   * Backend response me salesVisit nested object
   * ke andar aa raha hai.
   */
  salesVisit?: CallDiscussionSalesVisit;
}


/* ================= RESPONSE ================= */

export interface CallDiscussionResponse {

  success: boolean;

  message: string;

  data: CallDiscussion[];
}