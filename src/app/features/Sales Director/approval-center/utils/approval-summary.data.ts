export interface ApprovalSummaryItem {
  title: string;
  value: number;
  description: string;
  icon: string;
  type: 'pending' | 'high-priority' | 'approved' | 'rejected';
}

export const SALES_DIRECTOR_APPROVAL_SUMMARY: ApprovalSummaryItem[] = [
  {
    title: 'Pending Approvals',
    value: 18,
    description: 'Requests waiting for your review',
    icon: '⏳',
    type: 'pending',
  },
  {
    title: 'High Priority',
    value: 5,
    description: 'Require immediate attention',
    icon: '⚠️',
    type: 'high-priority',
  },
  {
    title: 'Approved Today',
    value: 12,
    description: 'Requests approved today',
    icon: '✓',
    type: 'approved',
  },
  {
    title: 'Rejected Today',
    value: 2,
    description: 'Requests rejected today',
    icon: '✕',
    type: 'rejected',
  },
];