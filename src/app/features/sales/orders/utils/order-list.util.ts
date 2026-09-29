
export type SalesOrderStatus =
  | 'PENDING'
  | 'PROCESSING'
  | 'READY_FOR_DISPATCH'
  | 'DISPATCHED'
  | 'DELIVERED'
  | 'CANCELLED';

export type SalesOrderPaymentStatus =
  | 'PENDING'
  | 'PARTIAL'
  | 'PAID';

export type SalesOrderPriority =
  | 'HIGH'
  | 'MEDIUM'
  | 'LOW';

export interface SalesOrder {

  id: string;

  orderNumber: string;

  customerName: string;

  customerCode: string;

  orderDate: string;

  items: number;

  quantity: number;

  amount: number;

  status: SalesOrderStatus;

  paymentStatus: SalesOrderPaymentStatus;

  priority: SalesOrderPriority;

  expectedDelivery: string;

  reference: string;

}


export const SALES_ORDER_DATA: SalesOrder[] = [

  {
    id: 'SO-001',
    orderNumber: 'SO-10248',
    customerName: 'ABC Technologies',
    customerCode: 'CUS-1042',
    orderDate: '2026-09-28',
    items: 8,
    quantity: 42,
    amount: 485000,
    status: 'PENDING',
    paymentStatus: 'PENDING',
    priority: 'HIGH',
    expectedDelivery: '2026-10-08',
    reference: 'LEAD-2048'
  },

  {
    id: 'SO-002',
    orderNumber: 'SO-10247',
    customerName: 'Government School Division',
    customerCode: 'CUS-1038',
    orderDate: '2026-09-27',
    items: 12,
    quantity: 86,
    amount: 720000,
    status: 'PROCESSING',
    paymentStatus: 'PAID',
    priority: 'HIGH',
    expectedDelivery: '2026-10-10',
    reference: 'LEAD-2045'
  },

  {
    id: 'SO-003',
    orderNumber: 'SO-10246',
    customerName: 'Delhi Education Group',
    customerCode: 'CUS-1031',
    orderDate: '2026-09-26',
    items: 6,
    quantity: 35,
    amount: 315000,
    status: 'READY_FOR_DISPATCH',
    paymentStatus: 'PAID',
    priority: 'MEDIUM',
    expectedDelivery: '2026-10-04',
    reference: 'LEAD-2039'
  },

  {
    id: 'SO-004',
    orderNumber: 'SO-10245',
    customerName: 'Bright Future Academy',
    customerCode: 'CUS-1027',
    orderDate: '2026-09-25',
    items: 10,
    quantity: 64,
    amount: 560000,
    status: 'DISPATCHED',
    paymentStatus: 'PARTIAL',
    priority: 'MEDIUM',
    expectedDelivery: '2026-10-02',
    reference: 'LEAD-2034'
  },

  {
    id: 'SO-005',
    orderNumber: 'SO-10244',
    customerName: 'State Education Department',
    customerCode: 'CUS-1021',
    orderDate: '2026-09-24',
    items: 15,
    quantity: 120,
    amount: 980000,
    status: 'DELIVERED',
    paymentStatus: 'PAID',
    priority: 'LOW',
    expectedDelivery: '2026-09-30',
    reference: 'LEAD-2028'
  },

  {
    id: 'SO-006',
    orderNumber: 'SO-10243',
    customerName: 'Modern Public School',
    customerCode: 'CUS-1018',
    orderDate: '2026-09-23',
    items: 5,
    quantity: 28,
    amount: 245000,
    status: 'DELIVERED',
    paymentStatus: 'PAID',
    priority: 'LOW',
    expectedDelivery: '2026-09-29',
    reference: 'LEAD-2022'
  },

  {
    id: 'SO-007',
    orderNumber: 'SO-10242',
    customerName: 'National Learning Center',
    customerCode: 'CUS-1014',
    orderDate: '2026-09-22',
    items: 9,
    quantity: 52,
    amount: 430000,
    status: 'CANCELLED',
    paymentStatus: 'PARTIAL',
    priority: 'LOW',
    expectedDelivery: '2026-10-01',
    reference: 'LEAD-2019'
  },

  {
    id: 'SO-008',
    orderNumber: 'SO-10241',
    customerName: 'Central Government Institute',
    customerCode: 'CUS-1009',
    orderDate: '2026-09-21',
    items: 11,
    quantity: 74,
    amount: 675000,
    status: 'DELIVERED',
    paymentStatus: 'PAID',
    priority: 'MEDIUM',
    expectedDelivery: '2026-09-28',
    reference: 'LEAD-2015'
  }

];

