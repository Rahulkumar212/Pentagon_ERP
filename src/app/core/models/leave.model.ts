export interface Leave {

  id?: number;

  applicant_name: string;

  leave_category: string;

  from_date: string;

  to_date: string;

  leave_approve?: 'PENDING' | 'APPROVED' | 'REJECTED';

  reason_absence: string;

  reason_reject?: string;

  createdAt?: string;

  updatedAt?: string;

}

export interface CreateLeaveRequest {

  applicant_name: string;

  leave_category: string;

  from_date: string;

  to_date: string;

  reason_absence: string;

}

export interface UpdateLeaveRequest {

  applicant_name?: string;

  leave_category?: string;

  from_date?: string;

  to_date?: string;

  reason_absence?: string;

  leave_approve?: 'PENDING' | 'APPROVED' | 'REJECTED';

  reason_reject?: string;

}

export interface ApiResponse<T> {

  success: boolean;

  message: string;

  data: T;

}

