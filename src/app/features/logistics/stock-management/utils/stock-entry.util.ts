export type StockEntryStatus =
  | 'PENDING_VERIFICATION'
  | 'VERIFIED'
  | 'PARTIAL'
  | 'REJECTED';

export type StockEntryCondition =
  | 'NEW'
  | 'GOOD'
  | 'DAMAGED'
  | 'FAULTY'
  | 'MIXED';

export interface StockEntryItem {
  id: string;

  entryNumber: string;
  entryDate: string;

  itemName: string;
  category: string;
  icon: string;

  quantity: number;
  unit: string;

  referenceNumber: string;
  referenceType: 'PROCUREMENT' | 'PURCHASE_ORDER' | 'DIRECT_RECEIPT';

  supplier: string;

  condition: StockEntryCondition;
  status: StockEntryStatus;

  warehouse: string;
  storageLocation: string;

  receivedBy: string;

  notes?: string;
}


export const STOCK_ENTRY_DATA: StockEntryItem[] = [

  {
    id: 'SE-001',

    entryNumber: 'SE-2026-001',
    entryDate: '20 Sep 2026',

    itemName: 'Interactive Display 65 Inch',
    category: 'Display',
    icon: 'display_settings',

    quantity: 20,
    unit: 'Units',

    referenceNumber: 'PR-2026-001',
    referenceType: 'PROCUREMENT',

    supplier: 'Samsung India',

    condition: 'NEW',
    status: 'VERIFIED',

    warehouse: 'Main Warehouse',
    storageLocation: 'Rack A-01',

    receivedBy: 'SCM Team',

    notes: 'All units received and verified.',
  },


  {
    id: 'SE-002',

    entryNumber: 'SE-2026-002',
    entryDate: '21 Sep 2026',

    itemName: 'Mini PC',
    category: 'Computer',
    icon: 'computer',

    quantity: 30,
    unit: 'Units',

    referenceNumber: 'PR-2026-002',
    referenceType: 'PROCUREMENT',

    supplier: 'Lenovo India',

    condition: 'NEW',
    status: 'PENDING_VERIFICATION',

    warehouse: 'Main Warehouse',
    storageLocation: 'Rack B-02',

    receivedBy: 'SCM Team',

    notes: 'Awaiting technical verification.',
  },


  {
    id: 'SE-003',

    entryNumber: 'SE-2026-003',
    entryDate: '21 Sep 2026',

    itemName: 'Wireless Keyboard & Mouse',
    category: 'Accessories',
    icon: 'keyboard',

    quantity: 100,
    unit: 'Sets',

    referenceNumber: 'PO-2026-018',
    referenceType: 'PURCHASE_ORDER',

    supplier: 'Logitech India',

    condition: 'GOOD',
    status: 'VERIFIED',

    warehouse: 'Main Warehouse',
    storageLocation: 'Rack C-01',

    receivedBy: 'SCM Team',

    notes: 'Received in good condition.',
  },


  {
    id: 'SE-004',

    entryNumber: 'SE-2026-004',
    entryDate: '22 Sep 2026',

    itemName: 'HDMI Cable',
    category: 'Accessories',
    icon: 'cable',

    quantity: 180,
    unit: 'Pieces',

    referenceNumber: 'PO-2026-019',
    referenceType: 'PURCHASE_ORDER',

    supplier: 'Belkin India',

    condition: 'GOOD',
    status: 'VERIFIED',

    warehouse: 'Main Warehouse',
    storageLocation: 'Rack C-03',

    receivedBy: 'SCM Team',

    notes: 'Quantity and packaging verified.',
  },


  {
    id: 'SE-005',

    entryNumber: 'SE-2026-005',
    entryDate: '22 Sep 2026',

    itemName: 'Network Switch 24 Port',
    category: 'Networking',
    icon: 'lan',

    quantity: 15,
    unit: 'Units',

    referenceNumber: 'PR-2026-005',
    referenceType: 'PROCUREMENT',

    supplier: 'TP-Link India',

    condition: 'NEW',
    status: 'PENDING_VERIFICATION',

    warehouse: 'Main Warehouse',
    storageLocation: 'Rack D-01',

    receivedBy: 'SCM Team',

    notes: 'Technical inspection pending.',
  },


  {
    id: 'SE-006',

    entryNumber: 'SE-2026-006',
    entryDate: '23 Sep 2026',

    itemName: 'Display Stand',
    category: 'Furniture',
    icon: 'chair',

    quantity: 25,
    unit: 'Units',

    referenceNumber: 'PO-2026-021',
    referenceType: 'PURCHASE_ORDER',

    supplier: 'Urban Office Solutions',

    condition: 'DAMAGED',
    status: 'PARTIAL',

    warehouse: 'Main Warehouse',
    storageLocation: 'Inspection Area',

    receivedBy: 'SCM Team',

    notes: '5 units received with visible damage.',
  },


  {
    id: 'SE-007',

    entryNumber: 'SE-2026-007',
    entryDate: '23 Sep 2026',

    itemName: 'Wi-Fi Router',
    category: 'Networking',
    icon: 'router',

    quantity: 20,
    unit: 'Units',

    referenceNumber: 'PR-2026-007',
    referenceType: 'PROCUREMENT',

    supplier: 'Cisco India',

    condition: 'NEW',
    status: 'VERIFIED',

    warehouse: 'Main Warehouse',
    storageLocation: 'Rack D-03',

    receivedBy: 'SCM Team',

    notes: 'All units verified and ready for allocation.',
  },


  {
    id: 'SE-008',

    entryNumber: 'SE-2026-008',
    entryDate: '24 Sep 2026',

    itemName: 'Power Extension Board',
    category: 'Other Materials',
    icon: 'power',

    quantity: 60,
    unit: 'Pieces',

    referenceNumber: 'PO-2026-022',
    referenceType: 'PURCHASE_ORDER',

    supplier: 'Havells India',

    condition: 'MIXED',
    status: 'PENDING_VERIFICATION',

    warehouse: 'Main Warehouse',
    storageLocation: 'Inspection Area',

    receivedBy: 'SCM Team',

    notes: 'Final quality inspection pending.',
  },

];