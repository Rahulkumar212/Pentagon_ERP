
export interface ApprovalHistoryItem {
  id: string;
  requestTitle: string;
  category: string;
  requestedBy: string;
  amount: number;
  action: 'approved' | 'rejected';
  processedDate: string;
  processedBy: string;
}

export const SALES_DIRECTOR_APPROVAL_HISTORY: ApprovalHistoryItem[] = [
  {
    id: 'APR-1024',
    requestTitle: 'ABC Industries Special Discount',
    category: 'Discount',
    requestedBy: 'Vikas Malhotra',
    amount: 450000,
    action: 'approved',
    processedDate: '31 Aug 2026, 10:42 AM',
    processedBy: 'Amit Sharma',
  },
  {
    id: 'APR-1023',
    requestTitle: 'North Region Sales Order',
    category: 'Sales Order',
    requestedBy: 'Karan Mehta',
    amount: 1250000,
    action: 'approved',
    processedDate: '30 Aug 2026, 04:18 PM',
    processedBy: 'Amit Sharma',
  },
  {
    id: 'APR-1022',
    requestTitle: 'Customer Credit Limit Increase',
    category: 'Credit Limit',
    requestedBy: 'Priya Verma',
    amount: 800000,
    action: 'rejected',
    processedDate: '30 Aug 2026, 01:35 PM',
    processedBy: 'Amit Sharma',
  },
  {
    id: 'APR-1021',
    requestTitle: 'Enterprise Pricing Approval',
    category: 'Pricing',
    requestedBy: 'Rahul Mehta',
    amount: 2200000,
    action: 'approved',
    processedDate: '29 Aug 2026, 05:12 PM',
    processedBy: 'Amit Sharma',
  },
  {
    id: 'APR-1020',
    requestTitle: 'Regional Marketing Budget',
    category: 'Budget',
    requestedBy: 'Neha Kapoor',
    amount: 350000,
    action: 'rejected',
    processedDate: '29 Aug 2026, 11:20 AM',
    processedBy: 'Amit Sharma',
  },
];

