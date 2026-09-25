export type ReportDetailType =
  | 'INVENTORY'
  | 'DELIVERY'
  | 'DELAYED_SHIPMENT'
  | 'STOCK_MOVEMENT'
  | 'ORDER';

export type ReportDetailStatus =
  | 'COMPLETED'
  | 'IN_PROGRESS'
  | 'PENDING'
  | 'DELAYED'
  | 'CANCELLED';

export interface ReportDetailItem {
  id: string;
  label: string;
  value: string | number;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
}

export interface ReportDetailRecord {
  id: string;
  referenceNumber: string;
  reportType: ReportDetailType;
  title: string;
  date: string;
  status: ReportDetailStatus;
  description: string;
  createdBy: string;
  warehouse: string;
  location: string;
  items: number;
  quantity: number;
  amount: number;
}

export const REPORT_DETAIL_DATA: ReportDetailRecord[] = [
  {
    id: 'REP-001',
    referenceNumber: 'SO-2026-142',
    reportType: 'ORDER',
    title: 'Sales Order Report',
    date: '2026-09-24',
    status: 'COMPLETED',
    description: 'Order successfully processed and delivered.',
    createdBy: 'Rahul Sharma',
    warehouse: 'Main Warehouse',
    location: 'Rack A-01',
    items: 4,
    quantity: 28,
    amount: 485000,
  },
  {
    id: 'REP-002',
    referenceNumber: 'GEM-2026-051',
    reportType: 'DELIVERY',
    title: 'GEM Delivery Report',
    date: '2026-09-23',
    status: 'IN_PROGRESS',
    description: 'Shipment dispatched and currently in transit.',
    createdBy: 'Vikas Verma',
    warehouse: 'Main Warehouse',
    location: 'Dispatch Area',
    items: 3,
    quantity: 18,
    amount: 325000,
  },
  {
    id: 'REP-003',
    referenceNumber: 'SM-2026-007',
    reportType: 'STOCK_MOVEMENT',
    title: 'Stock Movement Report',
    date: '2026-09-21',
    status: 'PENDING',
    description: 'Stock entry is awaiting quantity verification.',
    createdBy: 'Suresh Kumar',
    warehouse: 'Main Warehouse',
    location: 'Rack D-03',
    items: 1,
    quantity: 100,
    amount: 0,
  },
  {
    id: 'REP-004',
    referenceNumber: 'DS-2026-018',
    reportType: 'DELAYED_SHIPMENT',
    title: 'Delayed Shipment Report',
    date: '2026-09-20',
    status: 'DELAYED',
    description: 'Shipment has exceeded the expected delivery date.',
    createdBy: 'Amit Kumar',
    warehouse: 'Main Warehouse',
    location: 'Dispatch Area',
    items: 5,
    quantity: 24,
    amount: 275000,
  },
  {
    id: 'REP-005',
    referenceNumber: 'INV-2026-011',
    reportType: 'INVENTORY',
    title: 'Inventory Report',
    date: '2026-09-19',
    status: 'COMPLETED',
    description: 'Inventory successfully verified.',
    createdBy: 'Neeraj Singh',
    warehouse: 'Main Warehouse',
    location: 'Rack C-01',
    items: 12,
    quantity: 356,
    amount: 1245000,
  },
];

export const REPORT_DETAIL_SUMMARY: ReportDetailItem[] = [
  {
    id: 'total-reports',
    label: 'Total Reports',
    value: 248,
    description: 'Generated reports',
    icon: 'description',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: 'completed-reports',
    label: 'Completed',
    value: 198,
    description: 'Successfully completed',
    icon: 'check_circle',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    id: 'pending-reports',
    label: 'Pending',
    value: 32,
    description: 'Awaiting action',
    icon: 'pending_actions',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    id: 'delayed-reports',
    label: 'Delayed',
    value: 18,
    description: 'Require attention',
    icon: 'warning',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
];