
import { ApprovalTimelineItem } from './approval-timeline.util';

// =====================================================
// TYPES
// =====================================================

export type ApprovalDetailStatus =
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'changes-requested';

export type ApprovalPriority =
  | 'low'
  | 'medium'
  | 'high';

export interface ApprovalDetail {
  id: string;
  requestTitle: string;
  category: string;
  requestedBy: string;
  requesterRole: string;
  amount: number;
  status: ApprovalDetailStatus;
  requestedDate: string;
  description: string;
  priority: ApprovalPriority;
  department: string;
  supportingDocuments: string[];
  approvalLevel: string;
  currentApprover: string;
  timeline: ApprovalTimelineItem[];
}


// =====================================================
// APPROVAL DETAIL DATA
// =====================================================

export const APPROVAL_DETAIL: ApprovalDetail = {

  id: 'APR-1024',

  requestTitle:
    'ABC Industries Special Discount',

  category:
    'Discount',

  requestedBy:
    'Vikas Malhotra',

  requesterRole:
    'Sales Manager',

  amount:
    450000,

  status:
    'pending',

  requestedDate:
    '31 Aug 2026, 09:24 AM',

  description:
    'Special discount approval requested for ABC Industries enterprise order. The proposed discount is required to close the deal within the current sales cycle.',

  priority:
    'high',

  department:
    'Sales & CRM',

  supportingDocuments: [
    'Customer Quotation.pdf',
    'Discount Approval Note.pdf',
    'Sales Order.pdf',
  ],

  approvalLevel:
    'Sales Director',

  currentApprover:
    'Amit Sharma',

  timeline: [

    {
      id: 'TL-001',

      title:
        'Request Submitted',

      description:
        'Approval request was submitted for management review.',

      userName:
        'Vikas Malhotra',

      userRole:
        'Sales Manager',

      date:
        '31 Aug 2026, 09:24 AM',

      status:
        'completed',

      icon:
        '📤',
    },

    {
      id: 'TL-002',

      title:
        'Manager Review',

      description:
        'Request reviewed and forwarded to Sales Director.',

      userName:
        'Priya Verma',

      userRole:
        'Sales Manager',

      date:
        '31 Aug 2026, 09:48 AM',

      status:
        'completed',

      icon:
        '👁️',
    },

    {
      id: 'TL-003',

      title:
        'Sales Director Review',

      description:
        'Waiting for review from the Sales Director.',

      userName:
        'Amit Sharma',

      userRole:
        'Sales Director',

      date:
        'Pending',

      status:
        'current',

      icon:
        '⏳',
    },

  ],
};

