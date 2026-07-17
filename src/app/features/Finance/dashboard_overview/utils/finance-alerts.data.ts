export interface FinanceAlert {

  id: number;

  title: string;

  message: string;

  priority:
    | 'HIGH'
    | 'MEDIUM'
    | 'LOW';

  time: string;

}

export const FINANCE_ALERTS: FinanceAlert[] = [

  {
    id: 1,
    title: 'Overdue Vendor Payment',
    message:
      '₹1,25,000 payment is overdue by 5 days.',
    priority: 'HIGH',
    time: '10 mins ago'
  },

  {
    id: 2,
    title: 'Budget Limit Warning',
    message:
      'Marketing department has utilized 92% of its monthly budget.',
    priority: 'MEDIUM',
    time: '1 hour ago'
  },

  {
    id: 3,
    title: 'Low Cash Balance',
    message:
      'Cash reserve has dropped below the configured threshold.',
    priority: 'HIGH',
    time: 'Today'
  },

  {
    id: 4,
    title: 'Invoice Approved',
    message:
      'Invoice INV-2026-0145 has been approved successfully.',
    priority: 'LOW',
    time: 'Yesterday'
  }

];