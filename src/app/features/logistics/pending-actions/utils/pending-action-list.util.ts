export type PendingActionType =
  | 'DISPATCH'
  | 'PAYMENT'
  | 'SHIPMENT'
  | 'DELIVERY'
  | 'APPROVAL'
  | 'STOCK';

export type PendingActionPriority =
  | 'HIGH'
  | 'MEDIUM'
  | 'LOW';

export type PendingActionStatus =
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'OVERDUE';

export interface PendingAction {
  id: string;
  type: PendingActionType;
  title: string;
  description: string;
  reference: string;
  priority: PendingActionPriority;
  status: PendingActionStatus;
  age: string;
  createdDate: string;
}

export const PENDING_ACTIONS: PendingAction[] = [
  {
    id: 'PA-001',
    type: 'DISPATCH',
    title: 'Pending Dispatch',
    description: 'Order is ready but not dispatched',
    reference: 'ORD-10248',
    priority: 'HIGH',
    status: 'PENDING',
    age: '2 days',
    createdDate: '22 Sep 2026',
  },
  {
    id: 'PA-002',
    type: 'PAYMENT',
    title: 'Payment Pending',
    description: 'Payment confirmation is required',
    reference: 'ORD-10241',
    priority: 'HIGH',
    status: 'OVERDUE',
    age: '3 days',
    createdDate: '21 Sep 2026',
  },
  {
    id: 'PA-003',
    type: 'SHIPMENT',
    title: 'Shipment Update Required',
    description: 'Shipment tracking information is missing',
    reference: 'SHP-00572',
    priority: 'MEDIUM',
    status: 'IN_PROGRESS',
    age: '1 day',
    createdDate: '22 Sep 2026',
  },
  {
    id: 'PA-004',
    type: 'DELIVERY',
    title: 'Delayed Delivery',
    description: 'Shipment has crossed expected delivery date',
    reference: 'SHP-00561',
    priority: 'HIGH',
    status: 'OVERDUE',
    age: '4 days',
    createdDate: '18 Sep 2026',
  },
  {
    id: 'PA-005',
    type: 'DISPATCH',
    title: 'Dispatch Approval',
    description: 'Dispatch is waiting for approval',
    reference: 'ORD-10235',
    priority: 'MEDIUM',
    status: 'PENDING',
    age: '1 day',
    createdDate: '21 Sep 2026',
  },
  {
    id: 'PA-006',
    type: 'STOCK',
    title: 'Stock Verification Required',
    description: 'Stock quantity needs to be verified',
    reference: 'STK-00128',
    priority: 'MEDIUM',
    status: 'PENDING',
    age: '2 days',
    createdDate: '20 Sep 2026',
  },
  {
    id: 'PA-007',
    type: 'APPROVAL',
    title: 'Delivery Approval',
    description: 'Delivery confirmation is waiting for approval',
    reference: 'DEL-00482',
    priority: 'LOW',
    status: 'PENDING',
    age: '1 day',
    createdDate: '21 Sep 2026',
  },
];