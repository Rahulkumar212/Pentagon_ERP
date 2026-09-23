export interface DeliveryDetailItem {
  id: string;
  productName: string;
  sku: string;
  quantity: number;
  unit: string;
}

export interface DeliveryDetail {
  id: string;
  orderNumber: string;
  trackingNumber: string;

  customerName: string;
  customerCode: string;
  contactPerson: string;
  contactNumber: string;

  source: 'SALES' | 'GEM' | 'SALES_DIRECTOR';

  status:
    | 'IN_TRANSIT'
    | 'OUT_FOR_DELIVERY'
    | 'DELIVERED'
    | 'DELAYED'
    | 'RETURNED';

  priority: 'HIGH' | 'MEDIUM' | 'LOW';

  destination: string;
  deliveryAddress: string;

  carrier: string;
  driverName: string;
  driverContact: string;

  currentLocation: string;

  dispatchDate: string;
  expectedDeliveryDate: string;
  actualDeliveryDate?: string;

  totalItems: number;
  totalUnits: number;

  paymentStatus: 'PAID' | 'PENDING' | 'PARTIAL';

  notes: string;

  items: DeliveryDetailItem[];
}

export const DEFAULT_DELIVERY_DETAIL: DeliveryDetail = {
  id: 'DEL-001',

  orderNumber: 'ORD-10245',

  trackingNumber: 'BD123456789',

  customerName: 'ABC Technologies',

  customerCode: 'CUS-001',

  contactPerson: 'Amit Sharma',

  contactNumber: '+91 98765 43210',

  source: 'SALES',

  status: 'IN_TRANSIT',

  priority: 'HIGH',

  destination: 'New Delhi',

  deliveryAddress:
    'Plot 24, Sector 18, Rohini, New Delhi, Delhi - 110085',

  carrier: 'Blue Dart',

  driverName: 'Rajesh Kumar',

  driverContact: '+91 98765 43210',

  currentLocation: 'Agra Transit Hub',

  dispatchDate: '2026-09-21',

  expectedDeliveryDate: '2026-09-24',

  totalItems: 4,

  totalUnits: 12,

  paymentStatus: 'PAID',

  notes:
    'Customer requested delivery during business hours. Handle equipment carefully.',

  items: [
    {
      id: 'ITEM-001',
      productName: 'Interactive Display 65 Inch',
      sku: 'ID-65-001',
      quantity: 2,
      unit: 'Units',
    },

    {
      id: 'ITEM-002',
      productName: 'Mini PC',
      sku: 'MPC-001',
      quantity: 2,
      unit: 'Units',
    },

    {
      id: 'ITEM-003',
      productName: 'Wireless Keyboard & Mouse',
      sku: 'KBM-001',
      quantity: 4,
      unit: 'Sets',
    },

    {
      id: 'ITEM-004',
      productName: 'HDMI Cable',
      sku: 'HDMI-002',
      quantity: 4,
      unit: 'Pieces',
    },
  ],
};