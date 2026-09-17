export interface OrderStat {
  label: string;
  value: number;
  description: string;
  icon: string;
}

export const ORDER_STATS: OrderStat[] = [
  {
    label: 'Total Orders',
    value: 128,
    description: 'All customer orders',
    icon: '📦'
  },
  {
    label: 'Pending',
    value: 18,
    description: 'Awaiting approval',
    icon: '⏳'
  },
  {
    label: 'In Progress',
    value: 32,
    description: 'Currently processing',
    icon: '⚙️'
  },
  {
    label: 'Completed',
    value: 68,
    description: 'Successfully delivered',
    icon: '✓'
  },
  {
    label: 'Delayed',
    value: 10,
    description: 'Needs attention',
    icon: '!'
  }
];