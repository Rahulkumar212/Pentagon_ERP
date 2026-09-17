export const ORDER_STATUSES = [
  'All',
  'PENDING',
  'APPROVED',
  'PROCESSING',
  'DISPATCHED',
  'DELIVERED',
  'DELAYED',
  'CANCELLED'
] as const;

export type OrderStatus = typeof ORDER_STATUSES[number];

export interface OrderFilter {
  search: string;
  status: OrderStatus;
  customer: string;
  startDate: string;
  endDate: string;
}