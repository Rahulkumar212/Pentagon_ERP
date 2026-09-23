export interface TrackingSummaryCard {
  id: string;
  title: string;
  value: number;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  valueColor: string;
}

export const TRACKING_SUMMARY_DATA: TrackingSummaryCard[] = [
  {
    id: 'total-deliveries',
    title: 'Total Deliveries',
    value: 248,
    description: 'All active deliveries',
    icon: 'local_shipping',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    valueColor: 'text-gray-900',
  },

  {
    id: 'in-transit',
    title: 'In Transit',
    value: 57,
    description: 'Currently moving',
    icon: 'route',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    valueColor: 'text-indigo-600',
  },

  {
    id: 'out-for-delivery',
    title: 'Out for Delivery',
    value: 24,
    description: 'Expected today',
    icon: 'delivery_dining',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    valueColor: 'text-orange-600',
  },

  {
    id: 'delivered',
    title: 'Delivered',
    value: 141,
    description: 'Successfully delivered',
    icon: 'check_circle',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    valueColor: 'text-green-600',
  },

  {
    id: 'delayed',
    title: 'Delayed',
    value: 18,
    description: 'Requires attention',
    icon: 'schedule',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    valueColor: 'text-red-600',
  },

  {
    id: 'returned',
    title: 'Returned',
    value: 8,
    description: 'Returned shipments',
    icon: 'keyboard_return',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    valueColor: 'text-purple-600',
  },
];