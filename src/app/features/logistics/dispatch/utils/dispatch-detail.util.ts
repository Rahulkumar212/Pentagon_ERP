export type DispatchDetailStatus =
  | 'READY'
  | 'PACKING'
  | 'READY_TO_DISPATCH'
  | 'DISPATCHED'
  | 'ON_HOLD';

export interface DispatchDetailItem {
  id: string;
  productName: string;
  sku: string;
  quantity: number;
  unit: string;
}

export interface DispatchDetailActivity {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  status: 'COMPLETED' | 'CURRENT' | 'PENDING';
  icon: string;
}

export interface DispatchDetail {
  id: string;

  orderNumber: string;

  customerName: string;
  customerCode: string;

  source: 'SALES' | 'GEM' | 'SALES_DIRECTOR';

  status: DispatchDetailStatus;

  priority: 'HIGH' | 'MEDIUM' | 'LOW';

  destination: string;

  deliveryAddress: string;

  carrier: string;

  trackingNumber: string;

  warehouse: string;

  orderDate: string;

  expectedDispatchDate: string;

  totalItems: number;

  totalUnits: number;

  paymentStatus: 'PAID' | 'PENDING' | 'PARTIAL';

  paymentReference: string;

  contactPerson: string;

  contactNumber: string;

  notes: string;

  items: DispatchDetailItem[];

  activities: DispatchDetailActivity[];
}

export const DEFAULT_DISPATCH_DETAIL: DispatchDetail = {
  id: 'DSP-001',

  orderNumber: 'ORD-10245',

  customerName: 'ABC Technologies Pvt. Ltd.',

  customerCode: 'CUS-1001',

  source: 'SALES',

  status: 'READY_TO_DISPATCH',

  priority: 'HIGH',

  destination: 'Lucknow',

  deliveryAddress:
    'ABC Technologies Pvt. Ltd., Gomti Nagar, Lucknow, Uttar Pradesh',

  carrier: 'Blue Dart',

  trackingNumber: 'BD458721963',

  warehouse: 'Delhi Warehouse',

  orderDate: '2026-09-21',

  expectedDispatchDate: '2026-09-23',

  totalItems: 8,

  totalUnits: 42,

  paymentStatus: 'PAID',

  paymentReference: 'PAY-784521',

  contactPerson: 'Amit Sharma',

  contactNumber: '+91 98765 43210',

  notes:
    'Priority delivery requested. Handle interactive display equipment carefully.',

  items: [
    {
      id: 'ITEM-001',
      productName: 'Interactive Display 65 Inch',
      sku: 'DISP-65-001',
      quantity: 4,
      unit: 'Nos',
    },
    {
      id: 'ITEM-002',
      productName: 'Mini PC',
      sku: 'MINIPC-I5-002',
      quantity: 4,
      unit: 'Nos',
    },
    {
      id: 'ITEM-003',
      productName: 'Wireless Keyboard & Mouse',
      sku: 'KBM-WL-003',
      quantity: 4,
      unit: 'Sets',
    },
    {
      id: 'ITEM-004',
      productName: 'HDMI Cable',
      sku: 'HDMI-2M-004',
      quantity: 8,
      unit: 'Nos',
    },
  ],

  activities: [
    {
      id: 'ACT-001',
      title: 'Order Received',
      description: 'Order received from Sales',
      date: '21 Sep 2026',
      time: '10:20 AM',
      status: 'COMPLETED',
      icon: '📥',
    },
    {
      id: 'ACT-002',
      title: 'Items Verified',
      description: 'Warehouse verified ordered quantities',
      date: '22 Sep 2026',
      time: '02:15 PM',
      status: 'COMPLETED',
      icon: '✓',
    },
    {
      id: 'ACT-003',
      title: 'Packing Completed',
      description: 'All items packed and ready',
      date: '23 Sep 2026',
      time: '09:10 AM',
      status: 'COMPLETED',
      icon: '📦',
    },
    {
      id: 'ACT-004',
      title: 'Ready for Dispatch',
      description: 'Order is waiting for final dispatch confirmation',
      date: '23 Sep 2026',
      time: '10:05 AM',
      status: 'CURRENT',
      icon: '📤',
    },
    {
      id: 'ACT-005',
      title: 'Dispatched',
      description: 'Shipment will be handed over to carrier',
      date: 'Expected',
      time: '--',
      status: 'PENDING',
      icon: '🚚',
    },
  ],
};