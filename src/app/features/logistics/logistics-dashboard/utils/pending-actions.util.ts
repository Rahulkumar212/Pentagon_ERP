export type PendingActionType =
  | 'DISPATCH'
  | 'PAYMENT'
  | 'SHIPMENT'
  | 'DELIVERY';

export type PendingActionPriority =
  | 'HIGH'
  | 'MEDIUM'
  | 'LOW';

export interface PendingAction {
  id: string;
  type: PendingActionType;
  title: string;
  description: string;
  reference: string;
  priority: PendingActionPriority;
  age: string;
}

export const PENDING_ACTIONS: PendingAction[] = [
  {
    id: 'PA-001',
    type: 'DISPATCH',
    title: 'Pending Dispatch',
    description: 'Order is ready but not dispatched',
    reference: 'ORD-10248',
    priority: 'HIGH',
    age: '2 days',
  },
  {
    id: 'PA-002',
    type: 'PAYMENT',
    title: 'Payment Pending',
    description: 'Payment confirmation is required',
    reference: 'ORD-10241',
    priority: 'HIGH',
    age: '3 days',
  },
  {
    id: 'PA-003',
    type: 'SHIPMENT',
    title: 'Shipment Update Required',
    description: 'Shipment tracking information is missing',
    reference: 'SHP-00572',
    priority: 'MEDIUM',
    age: '1 day',
  },
  {
    id: 'PA-004',
    type: 'DELIVERY',
    title: 'Delayed Delivery',
    description: 'Shipment has crossed expected delivery date',
    reference: 'SHP-00561',
    priority: 'HIGH',
    age: '4 days',
  },
  {
    id: 'PA-005',
    type: 'DISPATCH',
    title: 'Dispatch Approval',
    description: 'Dispatch is waiting for approval',
    reference: 'ORD-10235',
    priority: 'MEDIUM',
    age: '1 day',
  },
];