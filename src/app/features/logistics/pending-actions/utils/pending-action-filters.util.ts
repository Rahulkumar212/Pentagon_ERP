export type PendingActionType =
  | 'ALL'
  | 'DISPATCH'
  | 'PAYMENT'
  | 'SHIPMENT'
  | 'DELIVERY'
  | 'APPROVAL'
  | 'STOCK';

export type PendingActionPriority =
  | 'ALL'
  | 'HIGH'
  | 'MEDIUM'
  | 'LOW';

export type PendingActionStatus =
  | 'ALL'
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'OVERDUE';

export interface PendingActionFilter {
  actionType: PendingActionType;
  priority: PendingActionPriority;
  status: PendingActionStatus;
  date: string;
}

export interface FilterOption<T extends string> {
  value: T;
  label: string;
}

export const ACTION_TYPE_OPTIONS:
  FilterOption<PendingActionType>[] = [
    {
      value: 'ALL',
      label: 'All Action Types',
    },
    {
      value: 'DISPATCH',
      label: 'Dispatch',
    },
    {
      value: 'PAYMENT',
      label: 'Payment',
    },
    {
      value: 'SHIPMENT',
      label: 'Shipment',
    },
    {
      value: 'DELIVERY',
      label: 'Delivery',
    },
    {
      value: 'APPROVAL',
      label: 'Approval',
    },
    {
      value: 'STOCK',
      label: 'Stock',
    },
  ];

export const PRIORITY_OPTIONS:
  FilterOption<PendingActionPriority>[] = [
    {
      value: 'ALL',
      label: 'All Priorities',
    },
    {
      value: 'HIGH',
      label: 'High',
    },
    {
      value: 'MEDIUM',
      label: 'Medium',
    },
    {
      value: 'LOW',
      label: 'Low',
    },
  ];

export const STATUS_OPTIONS:
  FilterOption<PendingActionStatus>[] = [
    {
      value: 'ALL',
      label: 'All Status',
    },
    {
      value: 'PENDING',
      label: 'Pending',
    },
    {
      value: 'IN_PROGRESS',
      label: 'In Progress',
    },
    {
      value: 'OVERDUE',
      label: 'Overdue',
    },
  ];