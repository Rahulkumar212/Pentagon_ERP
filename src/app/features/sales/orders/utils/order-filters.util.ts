
export type SalesOrderStatus =
  | 'ALL'
  | 'PENDING'
  | 'PROCESSING'
  | 'READY_FOR_DISPATCH'
  | 'DISPATCHED'
  | 'DELIVERED'
  | 'CANCELLED';

export type SalesOrderPaymentStatus =
  | 'ALL'
  | 'PENDING'
  | 'PARTIAL'
  | 'PAID';

export type SalesOrderPriority =
  | 'ALL'
  | 'HIGH'
  | 'MEDIUM'
  | 'LOW';

export interface OrderFilters {
  search: string;
  status: SalesOrderStatus;
  paymentStatus: SalesOrderPaymentStatus;
  priority: SalesOrderPriority;
  date: string;
}

export const DEFAULT_ORDER_FILTERS: OrderFilters = {
  search: '',
  status: 'ALL',
  paymentStatus: 'ALL',
  priority: 'ALL',
  date: ''
};

export const ORDER_STATUS_OPTIONS = [
  {
    label: 'All Status',
    value: 'ALL'
  },
  {
    label: 'Pending',
    value: 'PENDING'
  },
  {
    label: 'Processing',
    value: 'PROCESSING'
  },
  {
    label: 'Ready for Dispatch',
    value: 'READY_FOR_DISPATCH'
  },
  {
    label: 'Dispatched',
    value: 'DISPATCHED'
  },
  {
    label: 'Delivered',
    value: 'DELIVERED'
  },
  {
    label: 'Cancelled',
    value: 'CANCELLED'
  }
];

export const PAYMENT_STATUS_OPTIONS = [
  {
    label: 'All Payments',
    value: 'ALL'
  },
  {
    label: 'Pending',
    value: 'PENDING'
  },
  {
    label: 'Partial',
    value: 'PARTIAL'
  },
  {
    label: 'Paid',
    value: 'PAID'
  }
];

export const ORDER_PRIORITY_OPTIONS = [
  {
    label: 'All Priority',
    value: 'ALL'
  },
  {
    label: 'High',
    value: 'HIGH'
  },
  {
    label: 'Medium',
    value: 'MEDIUM'
  },
  {
    label: 'Low',
    value: 'LOW'
  }
];

