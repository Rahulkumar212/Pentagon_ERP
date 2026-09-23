export type DeliveryStatus =
  | 'IN_TRANSIT'
  | 'OUT_FOR_DELIVERY'
  | 'DELIVERED'
  | 'DELAYED'
  | 'RETURNED';

export type DeliveryPriority =
  | 'HIGH'
  | 'MEDIUM'
  | 'LOW';

export interface DeliveryListItem {
  id: string;
  orderNumber: string;
  trackingNumber: string;
  customerName: string;
  customerCode: string;
  source: 'SALES' | 'GEM' | 'SALES_DIRECTOR';
  destination: string;
  carrier: string;
  status: DeliveryStatus;
  priority: DeliveryPriority;
  dispatchDate: string;
  expectedDeliveryDate: string;
  actualDeliveryDate?: string;
  totalItems: number;
  totalUnits: number;
  contactPerson: string;
}

export const DELIVERY_LIST_DATA: DeliveryListItem[] = [
  {
    id: 'DEL-001',
    orderNumber: 'ORD-10245',
    trackingNumber: 'BD123456789',
    customerName: 'ABC Technologies',
    customerCode: 'CUS-001',
    source: 'SALES',
    destination: 'Delhi',
    carrier: 'Blue Dart',
    status: 'IN_TRANSIT',
    priority: 'HIGH',
    dispatchDate: '2026-09-21',
    expectedDeliveryDate: '2026-09-24',
    totalItems: 4,
    totalUnits: 12,
    contactPerson: 'Amit Sharma',
  },

  {
    id: 'DEL-002',
    orderNumber: 'ORD-10246',
    trackingNumber: 'DL987654321',
    customerName: 'Delhi Public School',
    customerCode: 'CUS-002',
    source: 'GEM',
    destination: 'Noida',
    carrier: 'Delhivery',
    status: 'OUT_FOR_DELIVERY',
    priority: 'MEDIUM',
    dispatchDate: '2026-09-22',
    expectedDeliveryDate: '2026-09-23',
    totalItems: 3,
    totalUnits: 8,
    contactPerson: 'Rahul Verma',
  },

  {
    id: 'DEL-003',
    orderNumber: 'ORD-10247',
    trackingNumber: 'DT456789123',
    customerName: 'Green Valley School',
    customerCode: 'CUS-003',
    source: 'SALES_DIRECTOR',
    destination: 'Lucknow',
    carrier: 'DTDC',
    status: 'DELIVERED',
    priority: 'LOW',
    dispatchDate: '2026-09-18',
    expectedDeliveryDate: '2026-09-21',
    actualDeliveryDate: '2026-09-21',
    totalItems: 5,
    totalUnits: 16,
    contactPerson: 'Neha Singh',
  },

  {
    id: 'DEL-004',
    orderNumber: 'ORD-10248',
    trackingNumber: 'FD789456123',
    customerName: 'Modern Academy',
    customerCode: 'CUS-004',
    source: 'SALES',
    destination: 'Kanpur',
    carrier: 'FedEx',
    status: 'DELAYED',
    priority: 'HIGH',
    dispatchDate: '2026-09-19',
    expectedDeliveryDate: '2026-09-22',
    totalItems: 6,
    totalUnits: 20,
    contactPerson: 'Sanjay Kumar',
  },

  {
    id: 'DEL-005',
    orderNumber: 'ORD-10249',
    trackingNumber: 'DH321654987',
    customerName: 'Sunrise International School',
    customerCode: 'CUS-005',
    source: 'GEM',
    destination: 'Jaipur',
    carrier: 'DHL',
    status: 'IN_TRANSIT',
    priority: 'MEDIUM',
    dispatchDate: '2026-09-22',
    expectedDeliveryDate: '2026-09-25',
    totalItems: 4,
    totalUnits: 11,
    contactPerson: 'Priya Mehta',
  },

  {
    id: 'DEL-006',
    orderNumber: 'ORD-10250',
    trackingNumber: 'BD654321789',
    customerName: 'National Public School',
    customerCode: 'CUS-006',
    source: 'SALES',
    destination: 'Gurugram',
    carrier: 'Blue Dart',
    status: 'RETURNED',
    priority: 'HIGH',
    dispatchDate: '2026-09-17',
    expectedDeliveryDate: '2026-09-20',
    totalItems: 2,
    totalUnits: 5,
    contactPerson: 'Vikas Gupta',
  },
];