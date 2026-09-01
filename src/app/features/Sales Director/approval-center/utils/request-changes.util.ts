
export interface RequestChangesData {
  requestId: string;
  requestTitle: string;
  requestedBy: string;
  currentStatus: string;
}

export const CHANGE_REASONS = [
  {
    value: 'MISSING_INFORMATION',
    label: 'Missing Information',
  },
  {
    value: 'INCORRECT_DOCUMENTS',
    label: 'Incorrect / Missing Documents',
  },
  {
    value: 'AMOUNT_CLARIFICATION',
    label: 'Amount Clarification Required',
  },
  {
    value: 'BUSINESS_JUSTIFICATION',
    label: 'Business Justification Required',
  },
  {
    value: 'MANAGER_REVIEW',
    label: 'Manager Review Required',
  },
  {
    value: 'OTHER',
    label: 'Other',
  },
];

export const DEFAULT_CHANGE_MESSAGE =
  'Please review the request and provide the required information or corrections.';

