
export type PerformanceBreakdownStatus =
  | 'DELIVERED'
  | 'IN_TRANSIT'
  | 'OUT_FOR_DELIVERY'
  | 'DELAYED'
  | 'RETURNED';

export interface PerformanceBreakdownItem {
  id: string;
  label: string;
  status: PerformanceBreakdownStatus;
  count: number;
  percentage: number;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  barClass: string;
}

export const PERFORMANCE_BREAKDOWN_DATA: PerformanceBreakdownItem[] = [
  {
    id: 'delivered',
    label: 'Delivered',
    status: 'DELIVERED',
    count: 141,
    percentage: 57,
    description: 'Successfully delivered shipments',
    icon: 'check_circle',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    barClass: 'bg-green-500',
  },
  {
    id: 'in-transit',
    label: 'In Transit',
    status: 'IN_TRANSIT',
    count: 57,
    percentage: 23,
    description: 'Shipments currently in transit',
    icon: 'local_shipping',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    barClass: 'bg-blue-500',
  },
  {
    id: 'out-for-delivery',
    label: 'Out for Delivery',
    status: 'OUT_FOR_DELIVERY',
    count: 24,
    percentage: 10,
    description: 'Shipments out for final delivery',
    icon: 'local_shipping',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    barClass: 'bg-purple-500',
  },
  {
    id: 'delayed',
    label: 'Delayed',
    status: 'DELAYED',
    count: 18,
    percentage: 7,
    description: 'Shipments delayed beyond expected date',
    icon: 'warning',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    barClass: 'bg-orange-500',
  },
  {
    id: 'returned',
    label: 'Returned',
    status: 'RETURNED',
    count: 8,
    percentage: 3,
    description: 'Shipments returned to warehouse',
    icon: 'assignment_return',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    barClass: 'bg-red-500',
  },
];

