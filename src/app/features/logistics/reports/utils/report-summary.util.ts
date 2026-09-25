
export interface ReportSummaryCard {
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

export const REPORT_SUMMARY_DATA: ReportSummaryCard[] = [
  {
    id: 'total-orders',
    title: 'Total Orders',
    value: 248,
    description: 'Orders processed through logistics',
    icon: 'receipt_long',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    valueColor: 'text-blue-600',
  },
  {
    id: 'total-stock',
    title: 'Total Stock',
    value: 3248,
    description: 'Items currently recorded in inventory',
    icon: 'inventory_2',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    valueColor: 'text-green-600',
  },
  {
    id: 'stock-movements',
    title: 'Stock Movements',
    value: 248,
    description: 'Entry and exit movements recorded',
    icon: 'swap_vert',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    valueColor: 'text-purple-600',
  },
  {
    id: 'total-deliveries',
    title: 'Total Deliveries',
    value: 248,
    description: 'Deliveries processed by logistics',
    icon: 'local_shipping',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    valueColor: 'text-indigo-600',
  },
  {
    id: 'delayed-shipments',
    title: 'Delayed Shipments',
    value: 18,
    description: 'Shipments currently beyond expected date',
    icon: 'warning',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    valueColor: 'text-orange-600',
    status: 'Attention',
    statusClass: 'bg-orange-50 text-orange-700',
  },
  {
    id: 'faulty-materials',
    title: 'Faulty Materials',
    value: 7,
    description: 'Materials currently under faulty status',
    icon: 'report_problem',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    valueColor: 'text-red-600',
    status: 'Review',
    statusClass: 'bg-red-50 text-red-700',
  },
];

