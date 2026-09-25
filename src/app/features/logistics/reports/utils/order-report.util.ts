export type OrderReportSource =
  | 'GEM'
  | 'SALES'
  | 'DIRECTOR';

export type OrderReportStatus =
  | 'PENDING'
  | 'PROCESSING'
  | 'DISPATCHED'
  | 'DELIVERED'
  | 'CANCELLED';

export interface OrderReportItem {
  id: string;
  orderNumber: string;
  orderDate: string;
  source: OrderReportSource;
  customerName: string;
  itemCount: number;
  totalQuantity: number;
  amount: number;
  status: OrderReportStatus;
  deliveryDate: string;
  warehouse: string;
  createdBy: string;
}

export interface OrderReportSummary {
  totalOrders: number;
  pendingOrders: number;
  processingOrders: number;
  dispatchedOrders: number;
  deliveredOrders: number;
  cancelledOrders: number;
  totalQuantity: number;
  totalValue: number;
}

export const ORDER_REPORT_SUMMARY: OrderReportSummary = {
  totalOrders: 248,
  pendingOrders: 32,
  processingOrders: 24,
  dispatchedOrders: 43,
  deliveredOrders: 141,
  cancelledOrders: 8,
  totalQuantity: 684,
  totalValue: 4285000,
};

export const ORDER_REPORT_DATA: OrderReportItem[] = [
  {
    id: 'ORD-001',
    orderNumber: 'SO-2026-142',
    orderDate: '2026-09-24',
    source: 'SALES',
    customerName: 'ABC Technologies Pvt. Ltd.',
    itemCount: 4,
    totalQuantity: 28,
    amount: 485000,
    status: 'DELIVERED',
    deliveryDate: '2026-09-25',
    warehouse: 'Main Warehouse',
    createdBy: 'Rahul Sharma',
  },
  {
    id: 'ORD-002',
    orderNumber: 'GEM-2026-051',
    orderDate: '2026-09-23',
    source: 'GEM',
    customerName: 'Government Department',
    itemCount: 3,
    totalQuantity: 18,
    amount: 325000,
    status: 'DISPATCHED',
    deliveryDate: '2026-09-27',
    warehouse: 'Main Warehouse',
    createdBy: 'Vikas Verma',
  },
  {
    id: 'ORD-003',
    orderNumber: 'SO-2026-136',
    orderDate: '2026-09-22',
    source: 'SALES',
    customerName: 'XYZ Solutions',
    itemCount: 6,
    totalQuantity: 42,
    amount: 678000,
    status: 'PROCESSING',
    deliveryDate: '2026-09-29',
    warehouse: 'Main Warehouse',
    createdBy: 'Amit Kumar',
  },
  {
    id: 'ORD-004',
    orderNumber: 'DIR-2026-018',
    orderDate: '2026-09-21',
    source: 'DIRECTOR',
    customerName: 'Internal Business Order',
    itemCount: 2,
    totalQuantity: 10,
    amount: 185000,
    status: 'PENDING',
    deliveryDate: '2026-09-30',
    warehouse: 'Main Warehouse',
    createdBy: 'Neeraj Singh',
  },
  {
    id: 'ORD-005',
    orderNumber: 'GEM-2026-047',
    orderDate: '2026-09-20',
    source: 'GEM',
    customerName: 'Government Institution',
    itemCount: 5,
    totalQuantity: 35,
    amount: 540000,
    status: 'DELIVERED',
    deliveryDate: '2026-09-24',
    warehouse: 'Main Warehouse',
    createdBy: 'Suresh Kumar',
  },
  {
    id: 'ORD-006',
    orderNumber: 'SO-2026-129',
    orderDate: '2026-09-19',
    source: 'SALES',
    customerName: 'PQR Enterprises',
    itemCount: 3,
    totalQuantity: 16,
    amount: 275000,
    status: 'DISPATCHED',
    deliveryDate: '2026-09-26',
    warehouse: 'Main Warehouse',
    createdBy: 'Rohit Gupta',
  },
  {
    id: 'ORD-007',
    orderNumber: 'DIR-2026-014',
    orderDate: '2026-09-18',
    source: 'DIRECTOR',
    customerName: 'Strategic Client',
    itemCount: 7,
    totalQuantity: 52,
    amount: 825000,
    status: 'PROCESSING',
    deliveryDate: '2026-09-28',
    warehouse: 'Main Warehouse',
    createdBy: 'Manish Yadav',
  },
  {
    id: 'ORD-008',
    orderNumber: 'SO-2026-121',
    orderDate: '2026-09-17',
    source: 'SALES',
    customerName: 'LMN Industries',
    itemCount: 2,
    totalQuantity: 12,
    amount: 165000,
    status: 'CANCELLED',
    deliveryDate: '-',
    warehouse: 'Main Warehouse',
    createdBy: 'Aman Singh',
  },
  {
    id: 'ORD-009',
    orderNumber: 'GEM-2026-039',
    orderDate: '2026-09-16',
    source: 'GEM',
    customerName: 'Government Department',
    itemCount: 4,
    totalQuantity: 26,
    amount: 395000,
    status: 'DELIVERED',
    deliveryDate: '2026-09-22',
    warehouse: 'Main Warehouse',
    createdBy: 'Deepak Sharma',
  },
  {
    id: 'ORD-010',
    orderNumber: 'SO-2026-115',
    orderDate: '2026-09-15',
    source: 'SALES',
    customerName: 'RST Technologies',
    itemCount: 5,
    totalQuantity: 31,
    amount: 412000,
    status: 'PENDING',
    deliveryDate: '2026-09-30',
    warehouse: 'Main Warehouse',
    createdBy: 'Vivek Kumar',
  },
];