export interface OverviewSummaryCard {
  key: string;
  title: string;
  value: number;
  icon: string;
  trend: string;
  description: string;
  iconBg: string;
  iconColor: string;
  trendColor: string;
}

export const OVERVIEW_SUMMARY_CARDS: OverviewSummaryCard[] = [
  {
    key: 'total-orders',
    title: 'Total Orders',
    value: 248,
    icon: '📦',
    trend: '+12%',
    description: 'vs last month',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    trendColor: 'text-blue-600',
  },

  {
    key: 'pending-dispatch',
    title: 'Pending Dispatch',
    value: 32,
    icon: '🚚',
    trend: '13%',
    description: 'of total orders',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    trendColor: 'text-orange-600',
  },

  {
    key: 'in-transit',
    title: 'In Transit',
    value: 57,
    icon: '🛣️',
    trend: '23%',
    description: 'of total orders',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    trendColor: 'text-purple-600',
  },

  {
    key: 'delivered',
    title: 'Delivered',
    value: 141,
    icon: '✓',
    trend: '+18%',
    description: 'this month',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    trendColor: 'text-green-600',
  },

  {
    key: 'delayed-shipments',
    title: 'Delayed Shipments',
    value: 18,
    icon: '⚠',
    trend: '7%',
    description: 'of total shipments',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    trendColor: 'text-red-600',
  },

  {
    key: 'pending-payments',
    title: 'Pending Payments',
    value: 26,
    icon: '₹',
    trend: '₹2.4L',
    description: 'outstanding amount',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    trendColor: 'text-yellow-600',
  },
];