
// =====================================================
// TYPES
// =====================================================

export type ApprovalCardStatus =
  | 'pending'
  | 'approved'
  | 'rejected';

export type ApprovalCardPriority =
  | 'low'
  | 'medium'
  | 'high';


export interface ApprovalCard {

  id: string;

  requestTitle: string;

  category: string;

  requestedBy: string;

  requesterRole: string;

  department: string;

  amount: number;

  requestedDate: string;

  status: ApprovalCardStatus;

  priority: ApprovalCardPriority;

  description: string;

  icon: string;

}


// =====================================================
// DEFAULT CARD DATA
// =====================================================

export const APPROVAL_CARD_DATA: ApprovalCard = {

  id: 'APR-1024',

  requestTitle:
    'ABC Industries Special Discount',

  category:
    'Discount',

  requestedBy:
    'Vikas Malhotra',

  requesterRole:
    'Sales Manager',

  department:
    'Sales & CRM',

  amount:
    450000,

  requestedDate:
    '31 Aug 2026, 09:24 AM',

  status:
    'pending',

  priority:
    'high',

  description:
    'Special discount approval requested for ABC Industries enterprise order. The proposed discount is required to close the deal within the current sales cycle.',

  icon:
    '💰'

};

