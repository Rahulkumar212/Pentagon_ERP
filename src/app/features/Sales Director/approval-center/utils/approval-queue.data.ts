
export interface ApprovalQueueItem {
  id: string;
  title: string;
  description: string;
  category: string;
  requestedBy: string;
  requestedDate: string;
  amount: number;
  priority: 'high' | 'medium' | 'low';
  icon: string;

  // =====================================================
  // APPROVAL STATUS
  // =====================================================

  status: 'pending' | 'approved' | 'rejected' | 'changes-requested';
}


export const SALES_DIRECTOR_APPROVAL_QUEUE: ApprovalQueueItem[] = [
  {
    id: 'APR-1032',
    title: 'ABC Industries Special Discount',
    description:
      'Special pricing approval required for a high-value enterprise deal.',
    category: 'Discount',
    requestedBy: 'Vikas Malhotra',
    requestedDate: '31 Aug 2026, 09:42 AM',
    amount: 450000,
    priority: 'high',
    icon: '💰',
    status: 'pending',
  },

  {
    id: 'APR-1031',
    title: 'North Region Sales Order',
    description:
      'Sales order requires director approval before processing.',
    category: 'Sales Order',
    requestedBy: 'Karan Mehta',
    requestedDate: '31 Aug 2026, 08:25 AM',
    amount: 1250000,
    priority: 'high',
    icon: '📦',
    status: 'pending',
  },

  {
    id: 'APR-1030',
    title: 'Customer Credit Limit Increase',
    description:
      'Request to increase the credit limit for a strategic customer.',
    category: 'Credit Limit',
    requestedBy: 'Priya Verma',
    requestedDate: '30 Aug 2026, 04:15 PM',
    amount: 800000,
    priority: 'medium',
    icon: '🏦',
    status: 'pending',
  },

  {
    id: 'APR-1029',
    title: 'Enterprise Pricing Approval',
    description:
      'Enterprise customer pricing requires management approval.',
    category: 'Pricing',
    requestedBy: 'Rahul Mehta',
    requestedDate: '30 Aug 2026, 02:10 PM',
    amount: 2200000,
    priority: 'high',
    icon: '🏷️',
    status: 'pending',
  },

  {
    id: 'APR-1028',
    title: 'Regional Marketing Budget',
    description:
      'Additional marketing budget requested for the North region.',
    category: 'Budget',
    requestedBy: 'Neha Kapoor',
    requestedDate: '30 Aug 2026, 11:35 AM',
    amount: 350000,
    priority: 'medium',
    icon: '📊',
    status: 'pending',
  },

  {
    id: 'APR-1027',
    title: 'Key Account Travel Approval',
    description:
      'Travel budget approval required for strategic customer meetings.',
    category: 'Expense',
    requestedBy: 'Amit Verma',
    requestedDate: '29 Aug 2026, 05:20 PM',
    amount: 85000,
    priority: 'low',
    icon: '✈️',
    status: 'pending',
  },
];

