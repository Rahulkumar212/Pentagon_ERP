
export type DeliveryReportStatus =
  | 'GOOD'
  | 'ATTENTION'
  | 'CRITICAL';

export interface DeliveryReportItem {
  id: string;
  carrier: string;
  totalDeliveries: number;
  delivered: number;
  inTransit: number;
  outForDelivery: number;
  delayed: number;
  returned: number;
  onTimeDeliveries: number;
  onTimeRate: number;
  averageDeliveryDays: number;
  iconBg: string;
  iconColor: string;
  status: DeliveryReportStatus;
}

export const DELIVERY_REPORT_DATA: DeliveryReportItem[] = [
  {
    id: 'DR-001',
    carrier: 'BlueDart',
    totalDeliveries: 96,
    delivered: 91,
    inTransit: 2,
    outForDelivery: 1,
    delayed: 2,
    returned: 1,
    onTimeDeliveries: 87,
    onTimeRate: 91,
    averageDeliveryDays: 2.8,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    status: 'GOOD',
  },
  {
    id: 'DR-002',
    carrier: 'Delhivery',
    totalDeliveries: 82,
    delivered: 77,
    inTransit: 3,
    outForDelivery: 1,
    delayed: 4,
    returned: 2,
    onTimeDeliveries: 69,
    onTimeRate: 84,
    averageDeliveryDays: 3.4,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    status: 'ATTENTION',
  },
  {
    id: 'DR-003',
    carrier: 'DTDC',
    totalDeliveries: 70,
    delivered: 65,
    inTransit: 2,
    outForDelivery: 1,
    delayed: 3,
    returned: 1,
    onTimeDeliveries: 58,
    onTimeRate: 83,
    averageDeliveryDays: 3.6,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    status: 'ATTENTION',
  },
];

