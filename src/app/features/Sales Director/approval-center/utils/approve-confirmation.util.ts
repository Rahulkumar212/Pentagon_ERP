
export interface ApprovalConfirmationData {
  id: string;
  requestTitle: string;
  requestedBy: string;
  category: string;
  amount: number;
}

export const APPROVE_CONFIRMATION_CONTENT = {
  title: 'Confirm Approval',
  description:
    'Are you sure you want to approve this request?',
  warning:
    'Once approved, this action will be recorded in the approval history.',
  cancelLabel: 'Cancel',
  confirmLabel: 'Approve Request',
  icon: '✓'
};

export function formatApprovalAmount(value: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
}

