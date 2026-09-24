export type StockExitType =
  | 'SALES_ORDER'
  | 'GEM_ORDER'
  | 'DEMO'
  | 'OFFICE_USE'
  | 'REPLACEMENT'
  | 'INSTALLATION'
  | 'OTHER';

export type StockExitStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'COMPLETED'
  | 'REJECTED'
  | 'CANCELLED';

export interface StockExitItem {
  id: string;

  exitNumber: string;
  exitDate: string;

  itemName: string;
  category: string;
  icon: string;

  quantity: number;
  unit: string;

  exitType: StockExitType;
  status: StockExitStatus;

  destination: string;

  referenceNumber: string;
  referenceType: string;

  requestedBy: string;
  approvedBy?: string;

  notes?: string;
}


export const STOCK_EXIT_DATA: StockExitItem[] = [

  {
    id: 'EXIT-001',

    exitNumber: 'SE-2026-001',
    exitDate: '20 Sep 2026',

    itemName: 'Interactive Display 65 Inch',
    category: 'Display',
    icon: 'display_settings',

    quantity: 8,
    unit: 'Units',

    exitType: 'SALES_ORDER',
    status: 'COMPLETED',

    destination: 'ABC Technologies, New Delhi',

    referenceNumber: 'ORD-10245',
    referenceType: 'Sales Order',

    requestedBy: 'Sales Team',
    approvedBy: 'SCM Manager',

    notes: 'Dispatch completed for customer order.',
  },


  {
    id: 'EXIT-002',

    exitNumber: 'SE-2026-002',
    exitDate: '21 Sep 2026',

    itemName: 'Mini PC',
    category: 'Computer',
    icon: 'computer',

    quantity: 10,
    unit: 'Units',

    exitType: 'GEM_ORDER',
    status: 'APPROVED',

    destination: 'Delhi Public School, Noida',

    referenceNumber: 'GEM-2026-45821',
    referenceType: 'GEM Order',

    requestedBy: 'GEM Team',
    approvedBy: 'SCM Manager',

    notes: 'Approved for GEM order dispatch.',
  },


  {
    id: 'EXIT-003',

    exitNumber: 'SE-2026-003',
    exitDate: '21 Sep 2026',

    itemName: 'Interactive Display 65 Inch',
    category: 'Display',
    icon: 'display_settings',

    quantity: 2,
    unit: 'Units',

    exitType: 'DEMO',
    status: 'COMPLETED',

    destination: 'Green Valley School, Lucknow',

    referenceNumber: 'DEMO-2026-014',
    referenceType: 'Demo Request',

    requestedBy: 'Sales Executive',
    approvedBy: 'SCM Manager',

    notes: 'Demo units issued to customer.',
  },


  {
    id: 'EXIT-004',

    exitNumber: 'SE-2026-004',
    exitDate: '22 Sep 2026',

    itemName: 'Wireless Keyboard & Mouse',
    category: 'Accessories',
    icon: 'keyboard',

    quantity: 20,
    unit: 'Sets',

    exitType: 'SALES_ORDER',
    status: 'COMPLETED',

    destination: 'Modern Academy, Kanpur',

    referenceNumber: 'ORD-10248',
    referenceType: 'Sales Order',

    requestedBy: 'Sales Team',
    approvedBy: 'SCM Manager',

    notes: 'Accessories issued along with display order.',
  },


  {
    id: 'EXIT-005',

    exitNumber: 'SE-2026-005',
    exitDate: '22 Sep 2026',

    itemName: 'HDMI Cable',
    category: 'Accessories',
    icon: 'cable',

    quantity: 30,
    unit: 'Pieces',

    exitType: 'INSTALLATION',
    status: 'APPROVED',

    destination: 'Sunrise International School, Jaipur',

    referenceNumber: 'INST-2026-031',
    referenceType: 'Installation Request',

    requestedBy: 'Installation Team',
    approvedBy: 'SCM Manager',

    notes: 'Installation accessories approved.',
  },


  {
    id: 'EXIT-006',

    exitNumber: 'SE-2026-006',
    exitDate: '23 Sep 2026',

    itemName: 'Laptop',
    category: 'Computer',
    icon: 'laptop_mac',

    quantity: 3,
    unit: 'Units',

    exitType: 'OFFICE_USE',
    status: 'COMPLETED',

    destination: 'Corporate Office - IT Department',

    referenceNumber: 'OFFICE-2026-012',
    referenceType: 'Office Use Request',

    requestedBy: 'IT Department',
    approvedBy: 'Operations Manager',

    notes: 'Laptops issued for internal office use.',
  },


  {
    id: 'EXIT-007',

    exitNumber: 'SE-2026-007',
    exitDate: '23 Sep 2026',

    itemName: 'Interactive Display 65 Inch',
    category: 'Display',
    icon: 'display_settings',

    quantity: 1,
    unit: 'Unit',

    exitType: 'REPLACEMENT',
    status: 'PENDING',

    destination: 'National Public School, Gurugram',

    referenceNumber: 'REP-2026-008',
    referenceType: 'Replacement Request',

    requestedBy: 'Customer Support',

    notes: 'Replacement pending final approval.',
  },


  {
    id: 'EXIT-008',

    exitNumber: 'SE-2026-008',
    exitDate: '24 Sep 2026',

    itemName: 'Network Switch 24 Port',
    category: 'Networking',
    icon: 'lan',

    quantity: 4,
    unit: 'Units',

    exitType: 'INSTALLATION',
    status: 'PENDING',

    destination: 'St. Xavier School, Lucknow',

    referenceNumber: 'INST-2026-034',
    referenceType: 'Installation Request',

    requestedBy: 'Installation Team',

    notes: 'Awaiting dispatch confirmation.',
  },


  {
    id: 'EXIT-009',

    exitNumber: 'SE-2026-009',
    exitDate: '24 Sep 2026',

    itemName: 'Display Stand',
    category: 'Furniture',
    icon: 'chair',

    quantity: 5,
    unit: 'Units',

    exitType: 'SALES_ORDER',
    status: 'APPROVED',

    destination: 'Modern Academy, Kanpur',

    referenceNumber: 'ORD-10248',
    referenceType: 'Sales Order',

    requestedBy: 'Sales Team',
    approvedBy: 'SCM Manager',

    notes: 'Stands approved for upcoming dispatch.',
  },


  {
    id: 'EXIT-010',

    exitNumber: 'SE-2026-010',
    exitDate: '24 Sep 2026',

    itemName: 'Power Extension Board',
    category: 'Other Materials',
    icon: 'power',

    quantity: 12,
    unit: 'Pieces',

    exitType: 'OFFICE_USE',
    status: 'COMPLETED',

    destination: 'Corporate Office - Operations',

    referenceNumber: 'OFFICE-2026-015',
    referenceType: 'Office Use Request',

    requestedBy: 'Operations Team',
    approvedBy: 'Operations Manager',

    notes: 'Issued for office equipment setup.',
  },

];