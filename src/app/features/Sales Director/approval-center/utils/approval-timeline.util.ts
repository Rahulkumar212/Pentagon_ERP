export type ApprovalTimelineStatus =
  | 'completed'
  | 'current'
  | 'pending'
  | 'rejected'
  | 'changes-requested';


export interface ApprovalTimelineItem {
  id: string;
  title: string;
  description: string;
  userName: string;
  userRole: string;
  date: string;
  status: ApprovalTimelineStatus;
  icon: string;
}


export const APPROVAL_TIMELINE: ApprovalTimelineItem[] = [
  {
    id: 'TL-001',
    title: 'Request Submitted',
    description:
      'Sales order approval request was submitted for management review.',
    userName: 'Vikas Malhotra',
    userRole: 'Sales Manager',
    date: '31 Aug 2026, 09:15 AM',
    status: 'completed',
    icon: '📤',
  },

  {
    id: 'TL-002',
    title: 'Request Reviewed',
    description:
      'The request was reviewed by the Sales Director.',
    userName: 'Amit Sharma',
    userRole: 'Sales Director',
    date: '31 Aug 2026, 10:05 AM',
    status: 'completed',
    icon: '👁️',
  },

  {
    id: 'TL-003',
    title: 'Additional Information Requested',
    description:
      'Additional business justification and supporting documents were requested.',
    userName: 'Amit Sharma',
    userRole: 'Sales Director',
    date: '31 Aug 2026, 10:12 AM',
    status: 'changes-requested',
    icon: '✏️',
  },

  {
    id: 'TL-004',
    title: 'Changes Submitted',
    description:
      'The requester submitted the required information and supporting documents.',
    userName: 'Vikas Malhotra',
    userRole: 'Sales Manager',
    date: '31 Aug 2026, 11:30 AM',
    status: 'current',
    icon: '🔄',
  },

  {
    id: 'TL-005',
    title: 'Final Approval',
    description:
      'Waiting for final approval from the Sales Director.',
    userName: 'Amit Sharma',
    userRole: 'Sales Director',
    date: 'Pending',
    status: 'pending',
    icon: '⏳',
  },
];