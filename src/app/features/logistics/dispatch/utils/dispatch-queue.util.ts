export type DispatchQueueStatus =
  | 'READY'
  | 'PACKING'
  | 'READY_TO_DISPATCH'
  | 'DISPATCHED'
  | 'ON_HOLD';

export type DispatchQueuePriority =
  | 'HIGH'
  | 'MEDIUM'
  | 'LOW';

export type DispatchQueueSource =
  | 'SALES'
  | 'GEM'
  | 'SALES_DIRECTOR';

export interface DispatchQueueItem {
  id: string;
  orderNumber: string;
  customerName: string;
  customerCode: string;

  source: DispatchQueueSource;

  destination: string;

  totalItems: number;
  totalUnits: number;

  status: DispatchQueueStatus;
  priority: DispatchQueuePriority;

  carrier: string;

  expectedDispatchDate: string;

  paymentStatus:
    | 'PAID'
    | 'PENDING'
    | 'PARTIAL';

  warehouse: string;

  createdDate: string;

  notes: string;
}

export const DISPATCH_QUEUE_DATA: DispatchQueueItem[] = [
  {
    id: 'DSP-001',
    orderNumber: 'ORD-10245',
    customerName: 'ABC Technologies Pvt. Ltd.',
    customerCode: 'CUS-1001',
    source: 'SALES',
    destination: 'Lucknow',
    totalItems: 8,
    totalUnits: 42,
    status: 'READY_TO_DISPATCH',
    priority: 'HIGH',
    carrier: 'Blue Dart',
    expectedDispatchDate: '2026-09-23',
    paymentStatus: 'PAID',
    warehouse: 'Delhi Warehouse',
    createdDate: '2026-09-21',
    notes: 'Priority education equipment order.',
  },
  {
    id: 'DSP-002',
    orderNumber: 'ORD-10244',
    customerName: 'Bright Future Academy',
    customerCode: 'CUS-1002',
    source: 'GEM',
    destination: 'Noida',
    totalItems: 5,
    totalUnits: 28,
    status: 'PACKING',
    priority: 'MEDIUM',
    carrier: 'Delhivery',
    expectedDispatchDate: '2026-09-23',
    paymentStatus: 'PAID',
    warehouse: 'Delhi Warehouse',
    createdDate: '2026-09-21',
    notes: 'Packing verification in progress.',
  },
  {
    id: 'DSP-003',
    orderNumber: 'ORD-10243',
    customerName: 'Modern Public School',
    customerCode: 'CUS-1003',
    source: 'SALES_DIRECTOR',
    destination: 'Gurugram',
    totalItems: 6,
    totalUnits: 35,
    status: 'READY',
    priority: 'HIGH',
    carrier: 'DTDC',
    expectedDispatchDate: '2026-09-24',
    paymentStatus: 'PAID',
    warehouse: 'Delhi Warehouse',
    createdDate: '2026-09-22',
    notes: 'Dispatch approval received from Sales Director.',
  },
  {
    id: 'DSP-004',
    orderNumber: 'ORD-10242',
    customerName: 'National Learning Center',
    customerCode: 'CUS-1004',
    source: 'SALES',
    destination: 'Jaipur',
    totalItems: 10,
    totalUnits: 56,
    status: 'ON_HOLD',
    priority: 'HIGH',
    carrier: 'Blue Dart',
    expectedDispatchDate: '2026-09-23',
    paymentStatus: 'PENDING',
    warehouse: 'Delhi Warehouse',
    createdDate: '2026-09-20',
    notes: 'Dispatch blocked due to pending payment.',
  },
  {
    id: 'DSP-005',
    orderNumber: 'ORD-10241',
    customerName: 'Central Government Institute',
    customerCode: 'CUS-1005',
    source: 'GEM',
    destination: 'Agra',
    totalItems: 4,
    totalUnits: 22,
    status: 'DISPATCHED',
    priority: 'MEDIUM',
    carrier: 'Delhivery',
    expectedDispatchDate: '2026-09-22',
    paymentStatus: 'PAID',
    warehouse: 'Delhi Warehouse',
    createdDate: '2026-09-18',
    notes: 'Successfully dispatched.',
  },
  {
    id: 'DSP-006',
    orderNumber: 'ORD-10240',
    customerName: 'State Education Department',
    customerCode: 'CUS-1006',
    source: 'SALES',
    destination: 'Meerut',
    totalItems: 7,
    totalUnits: 31,
    status: 'READY_TO_DISPATCH',
    priority: 'MEDIUM',
    carrier: 'DTDC',
    expectedDispatchDate: '2026-09-23',
    paymentStatus: 'PAID',
    warehouse: 'Delhi Warehouse',
    createdDate: '2026-09-21',
    notes: 'All items verified and packed.',
  },
  {
    id: 'DSP-007',
    orderNumber: 'ORD-10239',
    customerName: 'Sunrise Education Group',
    customerCode: 'CUS-1007',
    source: 'SALES_DIRECTOR',
    destination: 'Mathura',
    totalItems: 3,
    totalUnits: 18,
    status: 'READY',
    priority: 'LOW',
    carrier: 'Blue Dart',
    expectedDispatchDate: '2026-09-24',
    paymentStatus: 'PARTIAL',
    warehouse: 'Delhi Warehouse',
    createdDate: '2026-09-22',
    notes: 'Partial payment received.',
  },
];