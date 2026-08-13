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