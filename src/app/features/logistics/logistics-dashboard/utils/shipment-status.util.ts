export type ShipmentStatus =
  | 'PENDING_DISPATCH'
  | 'IN_TRANSIT'
  | 'DELIVERED'
  | 'DELAYED';

export interface ShipmentStatusItem {
  key: ShipmentStatus;
  label: string;
  count: number;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  progressColor: string;
}

export const SHIPMENT_STATUS_DATA: ShipmentStatusItem[] = [
  {
    key: 'PENDING_DISPATCH',
    label: 'Pending Dispatch',
    count: 32,
    description: 'Ready for dispatch',
    icon: '🚚',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    progressColor: 'bg-orange-500',
  },

  {
    key: 'IN_TRANSIT',
    label: 'In Transit',
    count: 57,
    description: 'Currently in transit',
    icon: '→',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    progressColor: 'bg-blue-500',
  },

  {
    key: 'DELIVERED',
    label: 'Delivered',
    count: 141,
    description: 'Successfully delivered',
    icon: '✓',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    progressColor: 'bg-green-500',
  },

  {
    key: 'DELAYED',
    label: 'Delayed',
    count: 18,
    description: 'Delivery delayed',
    icon: '!',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    progressColor: 'bg-red-500',
  },
];