export type ApprovalAction =
  | 'approve'
  | 'reject'
  | 'request-changes';

export interface ApprovalActionConfig {
  action: ApprovalAction;
  label: string;
  description: string;
  icon: string;
  variant: 'success' | 'danger' | 'warning';
}

export const APPROVAL_ACTIONS: ApprovalActionConfig[] = [

  {
    action: 'approve',
    label: 'Approve',
    description: 'Approve this request',
    icon: '✓',
    variant: 'success'
  },

  {
    action: 'reject',
    label: 'Reject',
    description: 'Reject this request',
    icon: '✕',
    variant: 'danger'
  },

  {
    action: 'request-changes',
    label: 'Request Changes',
    description: 'Send the request back for changes',
    icon: '↩',
    variant: 'warning'
  }

];