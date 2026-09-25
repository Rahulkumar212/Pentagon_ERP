
export type StockMovementReportType =
  | 'ENTRY'
  | 'EXIT';

export type StockMovementReportStatus =
  | 'PENDING'
  | 'COMPLETED'
  | 'REJECTED';

export type StockMovementReportReferenceType =
  | 'PROCUREMENT'
  | 'PURCHASE_ORDER'
  | 'SALES_ORDER'
  | 'GEM_ORDER'
  | 'DEMO'
  | 'OFFICE_USE'
  | 'REPLACEMENT'
  | 'DIRECT_RECEIPT'
  | 'OTHER';

export interface StockMovementReportItem {
  id: string;
  movementNumber: string;
  movementDate: string;

  movementType: StockMovementReportType;

  stockCode: string;
  itemName: string;
  category: string;
  icon: string;

  quantity: number;
  unit: string;

  referenceNumber: string;
  referenceType: StockMovementReportReferenceType;

  status: StockMovementReportStatus;

  performedBy: string;

  warehouse: string;
  location: string;

  remarks?: string;
}

export const STOCK_MOVEMENT_REPORT_DATA: StockMovementReportItem[] = [
  {
    id: 'SMR-001',
    movementNumber: 'SM-2026-001',
    movementDate: '2026-09-24',
    movementType: 'ENTRY',
    stockCode: 'LAP-001',
    itemName: 'Dell Latitude 5440',
    category: 'Computer',
    icon: 'laptop_mac',
    quantity: 25,
    unit: 'Units',
    referenceNumber: 'PO-2026-084',
    referenceType: 'PURCHASE_ORDER',
    status: 'COMPLETED',
    performedBy: 'Rahul Sharma',
    warehouse: 'Main Warehouse',
    location: 'Rack A-01',
    remarks: 'Received against purchase order',
  },

  {
    id: 'SMR-002',
    movementNumber: 'SM-2026-002',
    movementDate: '2026-09-24',
    movementType: 'EXIT',
    stockCode: 'MON-002',
    itemName: '24" LED Monitor',
    category: 'Display',
    icon: 'desktop_windows',
    quantity: 12,
    unit: 'Units',
    referenceNumber: 'SO-2026-142',
    referenceType: 'SALES_ORDER',
    status: 'COMPLETED',
    performedBy: 'Amit Kumar',
    warehouse: 'Main Warehouse',
    location: 'Rack B-02',
    remarks: 'Issued for sales order',
  },

  {
    id: 'SMR-003',
    movementNumber: 'SM-2026-003',
    movementDate: '2026-09-23',
    movementType: 'ENTRY',
    stockCode: 'KBD-003',
    itemName: 'Wireless Keyboard',
    category: 'Accessories',
    icon: 'keyboard',
    quantity: 50,
    unit: 'Units',
    referenceNumber: 'PR-2026-067',
    referenceType: 'PROCUREMENT',
    status: 'COMPLETED',
    performedBy: 'Neeraj Singh',
    warehouse: 'Main Warehouse',
    location: 'Rack C-01',
    remarks: 'Procurement stock received',
  },

  {
    id: 'SMR-004',
    movementNumber: 'SM-2026-004',
    movementDate: '2026-09-23',
    movementType: 'EXIT',
    stockCode: 'NET-004',
    itemName: 'Network Switch 24 Port',
    category: 'Networking',
    icon: 'lan',
    quantity: 8,
    unit: 'Units',
    referenceNumber: 'GEM-2026-051',
    referenceType: 'GEM_ORDER',
    status: 'COMPLETED',
    performedBy: 'Vikas Verma',
    warehouse: 'Main Warehouse',
    location: 'Rack D-01',
    remarks: 'GEM order dispatch',
  },

  {
    id: 'SMR-005',
    movementNumber: 'SM-2026-005',
    movementDate: '2026-09-22',
    movementType: 'EXIT',
    stockCode: 'PRO-005',
    itemName: 'Projector',
    category: 'Display',
    icon: 'videocam',
    quantity: 3,
    unit: 'Units',
    referenceNumber: 'DEMO-2026-018',
    referenceType: 'DEMO',
    status: 'PENDING',
    performedBy: 'Ankit Verma',
    warehouse: 'Main Warehouse',
    location: 'Demo Rack',
    remarks: 'Demo unit issue pending approval',
  },

  {
    id: 'SMR-006',
    movementNumber: 'SM-2026-006',
    movementDate: '2026-09-22',
    movementType: 'EXIT',
    stockCode: 'CPU-006',
    itemName: 'Desktop Computer',
    category: 'Computer',
    icon: 'computer',
    quantity: 5,
    unit: 'Units',
    referenceNumber: 'OFF-2026-023',
    referenceType: 'OFFICE_USE',
    status: 'COMPLETED',
    performedBy: 'Rohit Gupta',
    warehouse: 'Main Warehouse',
    location: 'Rack A-03',
    remarks: 'Issued for internal office use',
  },

  {
    id: 'SMR-007',
    movementNumber: 'SM-2026-007',
    movementDate: '2026-09-21',
    movementType: 'ENTRY',
    stockCode: 'CAB-007',
    itemName: 'CAT6 Network Cable',
    category: 'Networking',
    icon: 'cable',
    quantity: 100,
    unit: 'Meters',
    referenceNumber: 'GRN-2026-045',
    referenceType: 'DIRECT_RECEIPT',
    status: 'PENDING',
    performedBy: 'Suresh Kumar',
    warehouse: 'Main Warehouse',
    location: 'Rack D-03',
    remarks: 'Awaiting quantity verification',
  },

  {
    id: 'SMR-008',
    movementNumber: 'SM-2026-008',
    movementDate: '2026-09-20',
    movementType: 'EXIT',
    stockCode: 'TAB-008',
    itemName: 'Android Tablet',
    category: 'Computer',
    icon: 'tablet_android',
    quantity: 10,
    unit: 'Units',
    referenceNumber: 'SO-2026-136',
    referenceType: 'SALES_ORDER',
    status: 'REJECTED',
    performedBy: 'Aman Singh',
    warehouse: 'Main Warehouse',
    location: 'Rack A-05',
    remarks: 'Quantity mismatch during verification',
  },

  {
    id: 'SMR-009',
    movementNumber: 'SM-2026-009',
    movementDate: '2026-09-20',
    movementType: 'ENTRY',
    stockCode: 'MOU-009',
    itemName: 'Wireless Mouse',
    category: 'Accessories',
    icon: 'mouse',
    quantity: 40,
    unit: 'Units',
    referenceNumber: 'PO-2026-079',
    referenceType: 'PURCHASE_ORDER',
    status: 'COMPLETED',
    performedBy: 'Deepak Sharma',
    warehouse: 'Main Warehouse',
    location: 'Rack C-02',
    remarks: 'Stock received and verified',
  },

  {
    id: 'SMR-010',
    movementNumber: 'SM-2026-010',
    movementDate: '2026-09-19',
    movementType: 'EXIT',
    stockCode: 'CAM-010',
    itemName: 'IP Camera',
    category: 'Networking',
    icon: 'videocam',
    quantity: 15,
    unit: 'Units',
    referenceNumber: 'REP-2026-012',
    referenceType: 'REPLACEMENT',
    status: 'COMPLETED',
    performedBy: 'Manish Yadav',
    warehouse: 'Main Warehouse',
    location: 'Rack D-02',
    remarks: 'Replacement units issued',
  },
];

