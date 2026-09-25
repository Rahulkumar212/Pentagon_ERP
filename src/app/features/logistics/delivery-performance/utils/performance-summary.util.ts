
export interface PerformanceSummaryCard {
  id: string;
  title: string;
  value: number;
  suffix?: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  valueColor: string;
  status?: string;
  statusClass?: string;
}

export const PERFORMANCE_SUMMARY_DATA: PerformanceSummaryCard[] = [
  {
    id: 'on-time-delivery',
    title: 'On-Time Delivery',
    value: 89,
    suffix: '%',
    description: 'Deliveries completed on schedule',
    icon: 'schedule',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    valueColor: 'text-green-600',
  },
  {
    id: 'delivery-success-rate',
    title: 'Delivery Success Rate',
    value: 95,
    suffix: '%',
    description: 'Successfully delivered shipments',
    icon: 'check_circle',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    valueColor: 'text-blue-600',
  },
  {
    id: 'average-delivery-time',
    title: 'Average Delivery Time',
    value: 3.2,
    suffix: ' Days',
    description: 'Average time from dispatch to delivery',
    icon: 'local_shipping',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    valueColor: 'text-purple-600',
  },
  {
    id: 'delayed-deliveries',
    title: 'Delayed Deliveries',
    value: 18,
    description: 'Shipments currently delayed',
    icon: 'warning',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    valueColor: 'text-orange-600',
    status: 'Attention',
    statusClass: 'bg-orange-50 text-orange-700',
  },
  {
    id: 'returned-deliveries',
    title: 'Returned Deliveries',
    value: 8,
    description: 'Shipments returned to warehouse',
    icon: 'assignment_return',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    valueColor: 'text-red-600',
  },
  {
    id: 'total-deliveries',
    title: 'Total Deliveries',
    value: 248,
    description: 'Total deliveries processed',
    icon: 'inventory',
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-600',
    valueColor: 'text-gray-900',
  },
];

