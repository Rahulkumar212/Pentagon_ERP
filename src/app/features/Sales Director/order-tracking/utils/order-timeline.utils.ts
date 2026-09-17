export interface OrderTimelineItem {
  title: string;
  description: string;
  date?: string;
  completed: boolean;
  current: boolean;
}

export const ORDER_TIMELINE_STEPS = [
  'Order Created',
  'Approved',
  'Processing',
  'Dispatched',
  'Delivered'
] as const;

export type OrderTimelineStep =
  typeof ORDER_TIMELINE_STEPS[number];