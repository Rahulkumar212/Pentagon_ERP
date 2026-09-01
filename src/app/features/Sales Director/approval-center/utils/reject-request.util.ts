
export interface RejectRequestData {
  id: string;
  requestTitle: string;
  requestedBy: string;
  category: string;
  amount: number;
}

export const REJECTION_REASONS = [
  'Budget exceeded',
  'Incorrect information',
  'Policy violation',
  'Insufficient justification',
  'Commercial terms not acceptable',
  'Duplicate request',
  'Other'
];

export const REJECT_REQUEST_CONTENT = {
  title: 'Reject Request',
  description:
    'Please provide a reason for rejecting this approval request.',
  cancelLabel: 'Cancel',
  confirmLabel: 'Reject Request',
  icon: '✕'
};

export function formatRejectAmount(value: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
}

