export type OrderStatus =
  | 'PENDING'
  | 'PROCESSING'
  | 'READY_FOR_DISPATCH'
  | 'DISPATCHED'
  | 'IN_TRANSIT'
  | 'DELIVERED'
  | 'DELAYED';

export interface OrderStatusOverview {
  status: OrderStatus;
  label: string;
  description: string;
  count: number;
  icon: string;
}

export const ORDER_STATUS_OVERVIEW: OrderStatusOverview[] = [
  {
    status: 'PENDING',
    label: 'Pending',
    description: 'New orders awaiting processing',
    count: 18,
    icon: '⏳',
  },
  {
    status: 'PROCESSING',
    label: 'Processing',
    description: 'Orders currently being processed',
    count: 42,
    icon: '⚙️',
  },
  {
    status: 'READY_FOR_DISPATCH',
    label: 'Ready for Dispatch',
    description: 'Orders ready to leave warehouse',
    count: 27,
    icon: '📤',
  },
  {
    status: 'DISPATCHED',
    label: 'Dispatched',
    description: 'Orders dispatched from warehouse',
    count: 30,
    icon: '🚚',
  },
  {
    status: 'IN_TRANSIT',
    label: 'In Transit',
    description: 'Orders currently on the way',
    count: 31,
    icon: '🛣️',
  },
  {
    status: 'DELIVERED',
    label: 'Delivered',
    description: 'Successfully delivered orders',
    count: 94,
    icon: '✓',
  },
  {
    status: 'DELAYED',
    label: 'Delayed',
    description: 'Orders requiring attention',
    count: 6,
    icon: '⚠',
  },
];