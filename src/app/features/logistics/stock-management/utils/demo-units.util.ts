export type DemoUnitStatus =
  | 'AVAILABLE'
  | 'RESERVED'
  | 'ISSUED'
  | 'RETURN_REQUESTED'
  | 'RETURNED'
  | 'OVERDUE'
  | 'DAMAGED';


export type DemoType =
  | 'CUSTOMER_DEMO'
  | 'SITE_DEMO'
  | 'EXHIBITION'
  | 'TRIAL'
  | 'INTERNAL_DEMO';


export interface DemoUnitItem {
  id: string;

  demoNumber: string;

  issueDate: string;

  itemName: string;

  category: string;

  icon: string;

  quantity: number;

  unit: string;

  demoType: DemoType;

  status: DemoUnitStatus;

  customerName: string;

  siteName: string;

  siteLocation: string;

  referenceNumber: string;

  referenceType: string;

  issuedBy: string;

  assignedTo: string;

  expectedReturnDate: string;

  actualReturnDate?: string;

  notes?: string;
}


export const DEMO_UNITS_DATA: DemoUnitItem[] = [

  {
    id: 'DU-001',

    demoNumber: 'DEMO-2026-014',

    issueDate: '15 Sep 2026',

    itemName: 'Interactive Display 65 Inch',

    category: 'Display',

    icon: 'tv',

    quantity: 1,

    unit: 'Unit',

    demoType: 'CUSTOMER_DEMO',

    status: 'RETURN_REQUESTED',

    customerName: 'Green Valley School',

    siteName: 'Green Valley School Lucknow',

    siteLocation: 'Lucknow, Uttar Pradesh',

    referenceNumber: 'CRM-2026-084',

    referenceType: 'Customer Demo Request',

    issuedBy: 'Demo Team',

    assignedTo: 'Rahul Sharma',

    expectedReturnDate: '23 Sep 2026',

    notes:
      'Customer demo completed. Return requested from the site.',
  },


  {
    id: 'DU-002',

    demoNumber: 'DEMO-2026-016',

    issueDate: '16 Sep 2026',

    itemName: 'Interactive Display 75 Inch',

    category: 'Display',

    icon: 'tv',

    quantity: 1,

    unit: 'Unit',

    demoType: 'SITE_DEMO',

    status: 'ISSUED',

    customerName: 'Modern Academy',

    siteName: 'Modern Academy Kanpur',

    siteLocation: 'Kanpur, Uttar Pradesh',

    referenceNumber: 'CRM-2026-091',

    referenceType: 'Site Demo',

    issuedBy: 'Demo Team',

    assignedTo: 'Amit Kumar',

    expectedReturnDate: '28 Sep 2026',

    notes:
      'Display currently installed at customer site for evaluation.',
  },


  {
    id: 'DU-003',

    demoNumber: 'DEMO-2026-011',

    issueDate: '12 Sep 2026',

    itemName: 'Mini PC',

    category: 'Computer',

    icon: 'computer',

    quantity: 2,

    unit: 'Units',

    demoType: 'CUSTOMER_DEMO',

    status: 'ISSUED',

    customerName: 'Delhi Public School',

    siteName: 'Delhi Public School Noida',

    siteLocation: 'Noida, Uttar Pradesh',

    referenceNumber: 'CRM-2026-077',

    referenceType: 'Customer Demo Request',

    issuedBy: 'Demo Team',

    assignedTo: 'Neha Singh',

    expectedReturnDate: '26 Sep 2026',

    notes:
      'Two Mini PCs are being used for the current customer evaluation.',
  },


  {
    id: 'DU-004',

    demoNumber: 'DEMO-2026-009',

    issueDate: '10 Sep 2026',

    itemName: 'Wireless Keyboard & Mouse',

    category: 'Accessories',

    icon: 'keyboard',

    quantity: 5,

    unit: 'Sets',

    demoType: 'SITE_DEMO',

    status: 'RETURNED',

    customerName: 'Sunrise International School',

    siteName: 'Sunrise International School Jaipur',

    siteLocation: 'Jaipur, Rajasthan',

    referenceNumber: 'CRM-2026-069',

    referenceType: 'Site Demo',

    issuedBy: 'Demo Team',

    assignedTo: 'Demo Team',

    expectedReturnDate: '20 Sep 2026',

    actualReturnDate: '20 Sep 2026',

    notes:
      'All demo accessories have been returned and verified.',
  },


  {
    id: 'DU-005',

    demoNumber: 'DEMO-2026-008',

    issueDate: '08 Sep 2026',

    itemName: 'Wi-Fi Router',

    category: 'Networking',

    icon: 'router',

    quantity: 2,

    unit: 'Units',

    demoType: 'TRIAL',

    status: 'ISSUED',

    customerName: 'St. Xavier School',

    siteName: 'St. Xavier School Lucknow',

    siteLocation: 'Lucknow, Uttar Pradesh',

    referenceNumber: 'TRIAL-2026-018',

    referenceType: 'Technical Trial',

    issuedBy: 'SCM Team',

    assignedTo: 'Amit Kumar',

    expectedReturnDate: '30 Sep 2026',

    notes:
      'Networking trial is currently active at customer location.',
  },


  {
    id: 'DU-006',

    demoNumber: 'DEMO-2026-006',

    issueDate: '05 Sep 2026',

    itemName: 'Display Stand',

    category: 'Furniture',

    icon: 'table_restaurant',

    quantity: 1,

    unit: 'Unit',

    demoType: 'SITE_DEMO',

    status: 'DAMAGED',

    customerName: 'National Public School',

    siteName: 'National Public School Gurugram',

    siteLocation: 'Gurugram, Haryana',

    referenceNumber: 'CRM-2026-052',

    referenceType: 'Site Demo',

    issuedBy: 'Demo Team',

    assignedTo: 'Demo Team',

    expectedReturnDate: '18 Sep 2026',

    notes:
      'Display stand returned with physical damage and moved for inspection.',
  },


  {
    id: 'DU-007',

    demoNumber: 'DEMO-2026-004',

    issueDate: '03 Sep 2026',

    itemName: 'Laptop',

    category: 'Computer',

    icon: 'laptop_mac',

    quantity: 2,

    unit: 'Units',

    demoType: 'CUSTOMER_DEMO',

    status: 'AVAILABLE',

    customerName: 'ABC Technologies',

    siteName: 'ABC Technologies New Delhi',

    siteLocation: 'New Delhi, Delhi',

    referenceNumber: 'CRM-2026-041',

    referenceType: 'Customer Demo',

    issuedBy: 'Demo Team',

    assignedTo: 'Demo Team',

    expectedReturnDate: '17 Sep 2026',

    actualReturnDate: '17 Sep 2026',

    notes:
      'Returned laptops passed inspection and are available for the next demo.',
  },


  {
    id: 'DU-008',

    demoNumber: 'DEMO-2026-003',

    issueDate: '01 Sep 2026',

    itemName: 'Network Switch 24 Port',

    category: 'Networking',

    icon: 'hub',

    quantity: 1,

    unit: 'Unit',

    demoType: 'TRIAL',

    status: 'DAMAGED',

    customerName: 'Modern Academy',

    siteName: 'Modern Academy Kanpur',

    siteLocation: 'Kanpur, Uttar Pradesh',

    referenceNumber: 'TRIAL-2026-011',

    referenceType: 'Technical Trial',

    issuedBy: 'Technical Team',

    assignedTo: 'Technical Team',

    expectedReturnDate: '16 Sep 2026',

    actualReturnDate: '16 Sep 2026',

    notes:
      'Unit returned with functional issue and moved to faulty materials.',
  },


  {
    id: 'DU-009',

    demoNumber: 'DEMO-2026-002',

    issueDate: '28 Aug 2026',

    itemName: 'HDMI Cable',

    category: 'Accessories',

    icon: 'cable',

    quantity: 8,

    unit: 'Pieces',

    demoType: 'CUSTOMER_DEMO',

    status: 'AVAILABLE',

    customerName: 'Green Valley School',

    siteName: 'Green Valley School Lucknow',

    siteLocation: 'Lucknow, Uttar Pradesh',

    referenceNumber: 'CRM-2026-022',

    referenceType: 'Customer Demo',

    issuedBy: 'Demo Team',

    assignedTo: 'Demo Team',

    expectedReturnDate: '15 Sep 2026',

    actualReturnDate: '15 Sep 2026',

    notes:
      'Returned cables are available for future demo requirements.',
  },


  {
    id: 'DU-010',

    demoNumber: 'DEMO-2026-001',

    issueDate: '27 Aug 2026',

    itemName: 'Power Extension Board',

    category: 'Accessories',

    icon: 'power',

    quantity: 4,

    unit: 'Pieces',

    demoType: 'INTERNAL_DEMO',

    status: 'OVERDUE',

    customerName: 'Corporate Office',

    siteName: 'Corporate Office Operations',

    siteLocation: 'New Delhi, Delhi',

    referenceNumber: 'INTERNAL-2026-007',

    referenceType: 'Internal Demo',

    issuedBy: 'Operations Team',

    assignedTo: 'Operations Team',

    expectedReturnDate: '14 Sep 2026',

    notes:
      'Internal demo equipment has crossed the expected return date.',
  },

];