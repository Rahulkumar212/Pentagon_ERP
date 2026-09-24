export type StockDetailStatus =
  | 'AVAILABLE'
  | 'LOW_STOCK'
  | 'OUT_OF_STOCK'
  | 'RESERVED';

export type StockDetailCondition =
  | 'NEW'
  | 'GOOD'
  | 'DAMAGED'
  | 'FAULTY';

export type StockMovementType =
  | 'ENTRY'
  | 'EXIT';

export type StockMovementStatus =
  | 'COMPLETED'
  | 'PENDING'
  | 'REJECTED';


export interface StockMovement {
  id: string;

  type: StockMovementType;

  referenceNumber: string;

  referenceType: string;

  quantity: number;

  date: string;

  performedBy: string;

  status: StockMovementStatus;
}


export interface StockDetail {
  id: string;

  stockCode: string;

  itemName: string;

  category: string;

  icon: string;

  totalQuantity: number;

  availableQuantity: number;

  reservedQuantity: number;

  faultyQuantity: number;

  unit: string;

  condition: StockDetailCondition;

  status: StockDetailStatus;

  warehouse: string;

  location: string;

  lastUpdated: string;

  updatedBy: string;

  minimumStockLevel: number;

  reorderLevel: number;

  procurementReference: string;

  purchaseOrder: string;

  supplier: string;

  lastEntryDate: string;

  availablePercentage: number;

  reservedPercentage: number;

  faultyPercentage: number;

  notes: string;

  movements: StockMovement[];
}


export const DEFAULT_STOCK_DETAIL: StockDetail = {
  id: 'STK-001',

  stockCode: 'STK-DSP-001',

  itemName: 'Interactive Display 65 Inch',

  category: 'Display',

  icon: 'tv',

  totalQuantity: 48,

  availableQuantity: 38,

  reservedQuantity: 8,

  faultyQuantity: 2,

  unit: 'Units',

  condition: 'NEW',

  status: 'AVAILABLE',

  warehouse: 'Main Warehouse',

  location: 'Rack A-01',

  lastUpdated: '23 Sep 2026',

  updatedBy: 'SCM Manager',

  minimumStockLevel: 10,

  reorderLevel: 15,

  procurementReference: 'PR-2026-001',

  purchaseOrder: 'PO-2026-011',

  supplier: 'Samsung India',

  lastEntryDate: '18 Sep 2026',

  availablePercentage: 79.17,

  reservedPercentage: 16.67,

  faultyPercentage: 4.16,

  notes:
    'Stock is currently available for upcoming Sales and GEM orders. Reserved units are allocated against confirmed orders.',

  movements: [
    {
      id: 'MOV-001',

      type: 'ENTRY',

      referenceNumber: 'SE-2026-001',

      referenceType: 'Stock Entry',

      quantity: 20,

      date: '18 Sep 2026',

      performedBy: 'Rahul Sharma',

      status: 'COMPLETED',
    },

    {
      id: 'MOV-002',

      type: 'EXIT',

      referenceNumber: 'EXIT-2026-014',

      referenceType: 'Sales Order',

      quantity: 8,

      date: '20 Sep 2026',

      performedBy: 'Amit Kumar',

      status: 'COMPLETED',
    },

    {
      id: 'MOV-003',

      type: 'EXIT',

      referenceNumber: 'EXIT-2026-018',

      referenceType: 'GEM Order',

      quantity: 2,

      date: '21 Sep 2026',

      performedBy: 'Neha Singh',

      status: 'COMPLETED',
    },

    {
      id: 'MOV-004',

      type: 'ENTRY',

      referenceNumber: 'SE-2026-009',

      referenceType: 'Stock Entry',

      quantity: 18,

      date: '22 Sep 2026',

      performedBy: 'SCM Team',

      status: 'COMPLETED',
    },

    {
      id: 'MOV-005',

      type: 'EXIT',

      referenceNumber: 'EXIT-2026-022',

      referenceType: 'Demo Unit',

      quantity: 1,

      date: '23 Sep 2026',

      performedBy: 'Operations Team',

      status: 'PENDING',
    },
  ],
};