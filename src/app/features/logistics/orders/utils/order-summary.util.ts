export type OrderSummaryTrend =
  | 'POSITIVE'
  | 'WARNING'
  | 'NEUTRAL';

export interface OrderSummaryCard {
  key: string;
  title: string;
  value: number;
  icon: string;
  description: string;
  trend: string;
  trendType: OrderSummaryTrend;
  iconBg: string;
  iconColor: string;
}

export const ORDER_SUMMARY_CARDS: OrderSummaryCard[] = [
  {
    key: 'total-orders',
    title: 'Total Orders',
    value: 248,
    icon: '📦',
    description: 'Orders received',
    trend: '+12%',
    trendType: 'POSITIVE',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    key: 'new-orders',
    title: 'New Orders',
    value: 18,
    icon: '🔔',
    description: 'Awaiting processing',
    trend: 'Today',
    trendType: 'NEUTRAL',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    key: 'processing',
    title: 'Processing',
    value: 42,
    icon: '⚙️',
    description: 'Currently being processed',
    trend: '17%',
    trendType: 'NEUTRAL',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    key: 'ready-dispatch',
    title: 'Ready for Dispatch',
    value: 27,
    icon: '📤',
    description: 'Ready to dispatch',
    trend: '11%',
    trendType: 'WARNING',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    key: 'dispatched',
    title: 'Dispatched',
    value: 30,
    icon: '🚚',
    description: 'Successfully dispatched',
    trend: '+8%',
    trendType: 'POSITIVE',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    key: 'in-transit',
    title: 'In Transit',
    value: 31,
    icon: '🛣️',
    description: 'Currently in transit',
    trend: '13%',
    trendType: 'NEUTRAL',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    key: 'delivered',
    title: 'Delivered',
    value: 121,
    icon: '✓',
    description: 'Successfully delivered',
    trend: '+18%',
    trendType: 'POSITIVE',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    key: 'delayed',
    title: 'Delayed',
    value: 6,
    icon: '⚠',
    description: 'Requires attention',
    trend: '2.4%',
    trendType: 'WARNING',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
  },
];