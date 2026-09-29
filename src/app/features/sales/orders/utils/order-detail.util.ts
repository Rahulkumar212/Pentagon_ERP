
import { SalesOrderStatus } from './order-list.util';

export interface OrderTimelineItem {
  status: SalesOrderStatus | 'CREATED';
  label: string;
  description: string;
  completed: boolean;
}

export const ORDER_TIMELINE: OrderTimelineItem[] = [
  {
    status: 'CREATED',
    label: 'Order Created',
    description: 'Sales order has been created.',
    completed: true
  },
  {
    status: 'PROCESSING',
    label: 'Processing',
    description: 'Order is being processed.',
    completed: false
  },
  {
    status: 'READY_FOR_DISPATCH',
    label: 'Ready for Dispatch',
    description: 'Order is ready for dispatch.',
    completed: false
  },
  {
    status: 'DISPATCHED',
    label: 'Dispatched',
    description: 'Order has been dispatched.',
    completed: false
  },
  {
    status: 'DELIVERED',
    label: 'Delivered',
    description: 'Order has been delivered to customer.',
    completed: false
  }
];

