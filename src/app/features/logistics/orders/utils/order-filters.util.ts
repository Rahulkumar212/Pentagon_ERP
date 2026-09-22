export type OrderSource =
  | 'ALL'
  | 'SALES'
  | 'GEM'
  | 'SALES_DIRECTOR';

export type OrderStatus =
  | 'ALL'
  | 'PENDING'
  | 'PROCESSING'
  | 'READY_FOR_DISPATCH'
  | 'DISPATCHED'
  | 'IN_TRANSIT'
  | 'DELIVERED'
  | 'DELAYED'
  | 'CANCELLED';

export type PaymentStatus =
  | 'ALL'
  | 'PENDING'
  | 'PARTIAL'
  | 'PAID';

export interface OrderFilter {
  search: string;
  source: OrderSource;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  fromDate: string;
  toDate: string;
}

export interface FilterOption<T extends string> {
  value: T;
  label: string;
}

export const ORDER_SOURCE_OPTIONS:
  FilterOption<OrderSource>[] = [
  {
    value: 'ALL',
    label: 'All Sources',
  },
  {
    value: 'SALES',
    label: 'Sales',
  },
  {
    value: 'GEM',
    label: 'GEM',
  },
  {
    value: 'SALES_DIRECTOR',
    label: 'Sales Director',
  },
];

export const ORDER_STATUS_OPTIONS:
  FilterOption<OrderStatus>[] = [
  {
    value: 'ALL',
    label: 'All Status',
  },
  {
    value: 'PENDING',
    label: 'Pending',
  },
  {
    value: 'PROCESSING',
    label: 'Processing',
  },
  {
    value: 'READY_FOR_DISPATCH',
    label: 'Ready for Dispatch',
  },
  {
    value: 'DISPATCHED',
    label: 'Dispatched',
  },
  {
    value: 'IN_TRANSIT',
    label: 'In Transit',
  },
  {
    value: 'DELIVERED',
    label: 'Delivered',
  },
  {
    value: 'DELAYED',
    label: 'Delayed',
  },
  {
    value: 'CANCELLED',
    label: 'Cancelled',
  },
];

export const PAYMENT_STATUS_OPTIONS:
  FilterOption<PaymentStatus>[] = [
  {
    value: 'ALL',
    label: 'All Payment Status',
  },
  {
    value: 'PENDING',
    label: 'Payment Pending',
  },
  {
    value: 'PARTIAL',
    label: 'Partially Paid',
  },
  {
    value: 'PAID',
    label: 'Paid',
  },
];