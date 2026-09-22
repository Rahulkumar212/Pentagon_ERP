export type OrderSource =
  | 'SALES'
  | 'GEM'
  | 'SALES_DIRECTOR';

export type OrderStatus =
  | 'PENDING'
  | 'PROCESSING'
  | 'READY_FOR_DISPATCH'
  | 'DISPATCHED'
  | 'IN_TRANSIT'
  | 'DELIVERED'
  | 'DELAYED'
  | 'CANCELLED';

export type PaymentStatus =
  | 'PENDING'
  | 'PARTIAL'
  | 'PAID';

export interface Order {
  id: string;
  orderNumber: string;

  source: OrderSource;

  customerName: string;
  customerCode: string;

  orderDate: string;

  items: number;
  quantity: number;

  amount: number;

  status: OrderStatus;
  paymentStatus: PaymentStatus;

  expectedDelivery: string;

  reference: string;
}

export const ORDERS: Order[] = [
  {
    id: 'ORD-001',
    orderNumber: 'ORD-10248',
    source: 'SALES',

    customerName: 'ABC Technologies Pvt. Ltd.',
    customerCode: 'CUS-0042',

    orderDate: '2026-09-22',

    items: 4,
    quantity: 18,

    amount: 245000,

    status: 'PENDING',
    paymentStatus: 'PENDING',

    expectedDelivery: '2026-09-28',

    reference: 'SO-78421',
  },

  {
    id: 'ORD-002',
    orderNumber: 'ORD-10247',
    source: 'GEM',

    customerName: 'Government School Division',
    customerCode: 'GEM-0198',

    orderDate: '2026-09-22',

    items: 6,
    quantity: 32,

    amount: 385000,

    status: 'PROCESSING',
    paymentStatus: 'PAID',

    expectedDelivery: '2026-09-30',

    reference: 'GEM-ORD-55821',
  },

  {
    id: 'ORD-003',
    orderNumber: 'ORD-10246',
    source: 'SALES_DIRECTOR',

    customerName: 'Delhi Education Group',
    customerCode: 'CUS-0087',

    orderDate: '2026-09-21',

    items: 3,
    quantity: 12,

    amount: 175000,

    status: 'READY_FOR_DISPATCH',
    paymentStatus: 'PAID',

    expectedDelivery: '2026-09-27',

    reference: 'SD-45218',
  },

  {
    id: 'ORD-004',
    orderNumber: 'ORD-10245',
    source: 'SALES',

    customerName: 'Bright Future Academy',
    customerCode: 'CUS-0064',

    orderDate: '2026-09-21',

    items: 5,
    quantity: 24,

    amount: 310000,

    status: 'DISPATCHED',
    paymentStatus: 'PARTIAL',

    expectedDelivery: '2026-09-26',

    reference: 'SO-78394',
  },

  {
    id: 'ORD-005',
    orderNumber: 'ORD-10244',
    source: 'GEM',

    customerName: 'State Education Department',
    customerCode: 'GEM-0174',

    orderDate: '2026-09-20',

    items: 8,
    quantity: 45,

    amount: 520000,

    status: 'IN_TRANSIT',
    paymentStatus: 'PAID',

    expectedDelivery: '2026-09-25',

    reference: 'GEM-ORD-55792',
  },

  {
    id: 'ORD-006',
    orderNumber: 'ORD-10243',
    source: 'SALES_DIRECTOR',

    customerName: 'Modern Public School',
    customerCode: 'CUS-0031',

    orderDate: '2026-09-19',

    items: 2,
    quantity: 8,

    amount: 95000,

    status: 'DELIVERED',
    paymentStatus: 'PAID',

    expectedDelivery: '2026-09-24',

    reference: 'SD-45196',
  },

  {
    id: 'ORD-007',
    orderNumber: 'ORD-10242',
    source: 'SALES',

    customerName: 'National Learning Center',
    customerCode: 'CUS-0091',

    orderDate: '2026-09-18',

    items: 7,
    quantity: 38,

    amount: 460000,

    status: 'DELAYED',
    paymentStatus: 'PARTIAL',

    expectedDelivery: '2026-09-22',

    reference: 'SO-78281',
  },

  {
    id: 'ORD-008',
    orderNumber: 'ORD-10241',
    source: 'GEM',

    customerName: 'Central Government Institute',
    customerCode: 'GEM-0152',

    orderDate: '2026-09-18',

    items: 4,
    quantity: 16,

    amount: 210000,

    status: 'DELIVERED',
    paymentStatus: 'PAID',

    expectedDelivery: '2026-09-23',

    reference: 'GEM-ORD-55731',
  },
];