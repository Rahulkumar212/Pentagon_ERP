export type PreparationCheckStatus =
  | 'PENDING'
  | 'VERIFIED'
  | 'WARNING';

export type PreparationItemStatus =
  | 'PENDING'
  | 'VERIFIED'
  | 'SHORT';

export interface DispatchPreparationItem {
  id: string;
  productName: string;
  sku: string;
  orderedQuantity: number;
  availableQuantity: number;
  verifiedQuantity: number;
  status: PreparationItemStatus;
}

export interface DispatchPreparationChecklist {
  id: string;
  label: string;
  description: string;
  status: PreparationCheckStatus;
  required: boolean;
}

export interface DispatchPreparation {
  orderNumber: string;
  customerName: string;
  customerCode: string;

  source: 'SALES' | 'GEM' | 'SALES_DIRECTOR';

  destination: string;
  deliveryAddress: string;

  carrier: string;
  trackingNumber: string;

  warehouse: string;

  expectedDispatchDate: string;

  totalItems: number;
  totalUnits: number;

  paymentStatus: 'PAID' | 'PENDING' | 'PARTIAL';

  items: DispatchPreparationItem[];

  checklist: DispatchPreparationChecklist[];

  notes: string;
}

export const DEFAULT_DISPATCH_PREPARATION: DispatchPreparation = {
  orderNumber: 'ORD-10245',

  customerName: 'ABC Technologies Pvt. Ltd.',

  customerCode: 'CUS-1001',

  source: 'SALES',

  destination: 'Lucknow',

  deliveryAddress:
    'ABC Technologies Pvt. Ltd., Gomti Nagar, Lucknow, Uttar Pradesh',

  carrier: 'Blue Dart',

  trackingNumber: 'BD458721963',

  warehouse: 'Delhi Warehouse',

  expectedDispatchDate: '2026-09-23',

  totalItems: 8,

  totalUnits: 42,

  paymentStatus: 'PAID',

  items: [
    {
      id: 'ITEM-001',
      productName: 'Interactive Display 65 Inch',
      sku: 'DISP-65-001',
      orderedQuantity: 4,
      availableQuantity: 4,
      verifiedQuantity: 4,
      status: 'VERIFIED',
    },
    {
      id: 'ITEM-002',
      productName: 'Mini PC',
      sku: 'MINIPC-I5-002',
      orderedQuantity: 4,
      availableQuantity: 4,
      verifiedQuantity: 4,
      status: 'VERIFIED',
    },
    {
      id: 'ITEM-003',
      productName: 'Wireless Keyboard & Mouse',
      sku: 'KBM-WL-003',
      orderedQuantity: 4,
      availableQuantity: 4,
      verifiedQuantity: 4,
      status: 'VERIFIED',
    },
    {
      id: 'ITEM-004',
      productName: 'HDMI Cable',
      sku: 'HDMI-2M-004',
      orderedQuantity: 8,
      availableQuantity: 8,
      verifiedQuantity: 8,
      status: 'VERIFIED',
    },
  ],

  checklist: [
    {
      id: 'CHECK-001',
      label: 'Items Verified',
      description: 'Verify products against the order',
      status: 'VERIFIED',
      required: true,
    },
    {
      id: 'CHECK-002',
      label: 'Quantity Verified',
      description: 'Confirm ordered and packed quantities',
      status: 'VERIFIED',
      required: true,
    },
    {
      id: 'CHECK-003',
      label: 'Packing Completed',
      description: 'Confirm all items are properly packed',
      status: 'VERIFIED',
      required: true,
    },
    {
      id: 'CHECK-004',
      label: 'Delivery Address Verified',
      description: 'Confirm customer delivery address',
      status: 'VERIFIED',
      required: true,
    },
    {
      id: 'CHECK-005',
      label: 'Carrier Confirmed',
      description: 'Confirm carrier before dispatch',
      status: 'VERIFIED',
      required: true,
    },
    {
      id: 'CHECK-006',
      label: 'Dispatch Documents',
      description: 'Verify required dispatch documents',
      status: 'PENDING',
      required: true,
    },
  ],

  notes:
    'Handle equipment carefully. Customer requested priority delivery.',
};