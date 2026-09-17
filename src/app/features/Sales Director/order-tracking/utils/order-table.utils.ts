export type OrderStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'PROCESSING'
  | 'DISPATCHED'
  | 'DELIVERED'
  | 'DELAYED'
  | 'CANCELLED';

export interface Order {
  id: number;
  orderNumber: string;
  customerName: string;
  salesExecutive: string;
  orderDate: string;
  expectedDelivery: string;
  amount: number;
  status: OrderStatus;
}

export const ORDER_TABLE_DATA: Order[] = [
  {
    id: 1,
    orderNumber: 'ORD-2026-001',
    customerName: 'ABC Industries',
    salesExecutive: 'Rahul Sharma',
    orderDate: '2026-09-12',
    expectedDelivery: '2026-09-20',
    amount: 185000,
    status: 'PROCESSING'
  },
  {
    id: 2,
    orderNumber: 'ORD-2026-002',
    customerName: 'Global Tech Pvt Ltd',
    salesExecutive: 'Amit Kumar',
    orderDate: '2026-09-11',
    expectedDelivery: '2026-09-18',
    amount: 245000,
    status: 'APPROVED'
  },
  {
    id: 3,
    orderNumber: 'ORD-2026-003',
    customerName: 'Shree Enterprises',
    salesExecutive: 'Priya Singh',
    orderDate: '2026-09-09',
    expectedDelivery: '2026-09-16',
    amount: 98000,
    status: 'DISPATCHED'
  },
  {
    id: 4,
    orderNumber: 'ORD-2026-004',
    customerName: 'Vertex Solutions',
    salesExecutive: 'Rohit Verma',
    orderDate: '2026-09-07',
    expectedDelivery: '2026-09-14',
    amount: 320000,
    status: 'DELAYED'
  },
  {
    id: 5,
    orderNumber: 'ORD-2026-005',
    customerName: 'Nova Systems',
    salesExecutive: 'Anjali Gupta',
    orderDate: '2026-09-05',
    expectedDelivery: '2026-09-12',
    amount: 150000,
    status: 'DELIVERED'
  },
  {
    id: 6,
    orderNumber: 'ORD-2026-006',
    customerName: 'Prime Manufacturing',
    salesExecutive: 'Vikas Yadav',
    orderDate: '2026-09-13',
    expectedDelivery: '2026-09-22',
    amount: 275000,
    status: 'PENDING'
  }
];