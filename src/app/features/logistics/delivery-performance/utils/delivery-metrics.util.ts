
export interface DeliveryMetric {
  id: string;
  title: string;
  value: number;
  suffix: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  progress: number;
  progressLabel: string;
  progressClass: string;
}

export const DELIVERY_METRICS_DATA: DeliveryMetric[] = [
  {
    id: 'on-time-delivery',
    title: 'On-Time Delivery',
    value: 89,
    suffix: '%',
    description: 'Deliveries completed within expected timeline',
    icon: 'schedule',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    progress: 89,
    progressLabel: '89% on schedule',
    progressClass: 'bg-green-500',
  },
  {
    id: 'delivery-success',
    title: 'Delivery Success Rate',
    value: 95,
    suffix: '%',
    description: 'Shipments successfully delivered',
    icon: 'check_circle',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    progress: 95,
    progressLabel: '95% successful',
    progressClass: 'bg-blue-500',
  },
  {
    id: 'first-attempt-success',
    title: 'First Attempt Success',
    value: 92,
    suffix: '%',
    description: 'Deliveries completed on the first attempt',
    icon: 'local_shipping',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    progress: 92,
    progressLabel: '92% first attempt',
    progressClass: 'bg-purple-500',
  },
  {
    id: 'delay-rate',
    title: 'Delay Rate',
    value: 7,
    suffix: '%',
    description: 'Deliveries currently affected by delays',
    icon: 'warning',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    progress: 7,
    progressLabel: '7% delayed',
    progressClass: 'bg-orange-500',
  },
  {
    id: 'return-rate',
    title: 'Return Rate',
    value: 3,
    suffix: '%',
    description: 'Deliveries returned after dispatch',
    icon: 'assignment_return',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    progress: 3,
    progressLabel: '3% returned',
    progressClass: 'bg-red-500',
  },
  {
    id: 'average-delivery-time',
    title: 'Average Delivery Time',
    value: 3.2,
    suffix: ' Days',
    description: 'Average dispatch to delivery duration',
    icon: 'timer',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    progress: 80,
    progressLabel: 'Target: 4 Days',
    progressClass: 'bg-indigo-500',
  },
];

