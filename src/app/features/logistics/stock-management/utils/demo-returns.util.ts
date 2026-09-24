export type DemoReturnStatus =
  | 'RETURN_REQUESTED'
  | 'IN_TRANSIT'
  | 'RECEIVED'
  | 'PENDING_INSPECTION'
  | 'INSPECTED'
  | 'CLOSED'
  | 'REJECTED';


export type DemoReturnCondition =
  | 'GOOD'
  | 'DAMAGED'
  | 'FAULTY'
  | 'PARTIALLY_DAMAGED'
  | 'PENDING_CHECK';


export interface DemoReturnItem {
  id: string;

  returnNumber: string;

  returnDate: string;

  demoReference: string;

  itemName: string;

  category: string;

  icon: string;

  quantity: number;

  unit: string;

  customerName: string;

  siteName: string;

  siteLocation: string;

  condition: DemoReturnCondition;

  status: DemoReturnStatus;

  issuedDate: string;

  expectedReturnDate: string;

  returnedBy: string;

  receivedBy?: string;

  inspectionBy?: string;

  notes?: string;
}


export const DEMO_RETURNS_DATA: DemoReturnItem[] = [

  {
    id: 'DR-001',

    returnNumber: 'DR-2026-001',

    returnDate: '23 Sep 2026',

    demoReference: 'DEMO-2026-014',

    itemName: 'Interactive Display 65 Inch',

    category: 'Display',

    icon: 'tv',

    quantity: 1,

    unit: 'Unit',

    customerName: 'Green Valley School',

    siteName: 'Green Valley School Lucknow',

    siteLocation: 'Lucknow, Uttar Pradesh',

    condition: 'GOOD',

    status: 'CLOSED',

    issuedDate: '15 Sep 2026',

    expectedReturnDate: '23 Sep 2026',

    returnedBy: 'Demo Team',

    receivedBy: 'Rahul Sharma',

    inspectionBy: 'SCM Manager',

    notes:
      'Display returned in good working condition. Added back to available demo inventory.',
  },


  {
    id: 'DR-002',

    returnNumber: 'DR-2026-002',

    returnDate: '22 Sep 2026',

    demoReference: 'DEMO-2026-016',

    itemName: 'Interactive Display 75 Inch',

    category: 'Display',

    icon: 'tv',

    quantity: 1,

    unit: 'Unit',

    customerName: 'Modern Academy',

    siteName: 'Modern Academy Kanpur',

    siteLocation: 'Kanpur, Uttar Pradesh',

    condition: 'PENDING_CHECK',

    status: 'PENDING_INSPECTION',

    issuedDate: '16 Sep 2026',

    expectedReturnDate: '22 Sep 2026',

    returnedBy: 'Demo Team',

    receivedBy: 'Amit Kumar',

    notes:
      'Unit received. Physical and functional inspection is pending.',
  },


  {
    id: 'DR-003',

    returnNumber: 'DR-2026-003',

    returnDate: '21 Sep 2026',

    demoReference: 'DEMO-2026-011',

    itemName: 'Mini PC',

    category: 'Computer',

    icon: 'computer',

    quantity: 2,

    unit: 'Units',

    customerName: 'Delhi Public School',

    siteName: 'Delhi Public School Noida',

    siteLocation: 'Noida, Uttar Pradesh',

    condition: 'GOOD',

    status: 'INSPECTED',

    issuedDate: '12 Sep 2026',

    expectedReturnDate: '21 Sep 2026',

    returnedBy: 'Demo Team',

    receivedBy: 'Neha Singh',

    inspectionBy: 'SCM Executive',

    notes:
      'Both Mini PCs passed the inspection and are ready for allocation.',
  },


  {
    id: 'DR-004',

    returnNumber: 'DR-2026-004',

    returnDate: '20 Sep 2026',

    demoReference: 'DEMO-2026-009',

    itemName: 'Wireless Keyboard & Mouse',

    category: 'Accessories',

    icon: 'keyboard',

    quantity: 5,

    unit: 'Sets',

    customerName: 'Sunrise International School',

    siteName: 'Sunrise International School Jaipur',

    siteLocation: 'Jaipur, Rajasthan',

    condition: 'GOOD',

    status: 'CLOSED',

    issuedDate: '10 Sep 2026',

    expectedReturnDate: '20 Sep 2026',

    returnedBy: 'Demo Team',

    receivedBy: 'Rahul Sharma',

    inspectionBy: 'SCM Manager',

    notes:
      'All five sets returned and verified successfully.',
  },


  {
    id: 'DR-005',

    returnNumber: 'DR-2026-005',

    returnDate: '19 Sep 2026',

    demoReference: 'DEMO-2026-008',

    itemName: 'Wi-Fi Router',

    category: 'Networking',

    icon: 'router',

    quantity: 2,

    unit: 'Units',

    customerName: 'St. Xavier School',

    siteName: 'St. Xavier School Lucknow',

    siteLocation: 'Lucknow, Uttar Pradesh',

    condition: 'PARTIALLY_DAMAGED',

    status: 'INSPECTED',

    issuedDate: '08 Sep 2026',

    expectedReturnDate: '19 Sep 2026',

    returnedBy: 'Demo Team',

    receivedBy: 'Amit Kumar',

    inspectionBy: 'SCM Executive',

    notes:
      'One router has minor physical damage. Sent for further technical inspection.',
  },


  {
    id: 'DR-006',

    returnNumber: 'DR-2026-006',

    returnDate: '18 Sep 2026',

    demoReference: 'DEMO-2026-006',

    itemName: 'Display Stand',

    category: 'Furniture',

    icon: 'table_restaurant',

    quantity: 1,

    unit: 'Unit',

    customerName: 'National Public School',

    siteName: 'National Public School Gurugram',

    siteLocation: 'Gurugram, Haryana',

    condition: 'DAMAGED',

    status: 'RECEIVED',

    issuedDate: '05 Sep 2026',

    expectedReturnDate: '18 Sep 2026',

    returnedBy: 'Demo Team',

    receivedBy: 'SCM Team',

    notes:
      'Stand received with visible scratches. Inspection decision is pending.',
  },


  {
    id: 'DR-007',

    returnNumber: 'DR-2026-007',

    returnDate: '17 Sep 2026',

    demoReference: 'DEMO-2026-004',

    itemName: 'Laptop',

    category: 'Computer',

    icon: 'laptop_mac',

    quantity: 2,

    unit: 'Units',

    customerName: 'ABC Technologies',

    siteName: 'ABC Technologies New Delhi',

    siteLocation: 'New Delhi, Delhi',

    condition: 'GOOD',

    status: 'CLOSED',

    issuedDate: '03 Sep 2026',

    expectedReturnDate: '17 Sep 2026',

    returnedBy: 'Demo Team',

    receivedBy: 'Rahul Sharma',

    inspectionBy: 'SCM Manager',

    notes:
      'Both laptops were returned in good condition and moved to available stock.',
  },


  {
    id: 'DR-008',

    returnNumber: 'DR-2026-008',

    returnDate: '16 Sep 2026',

    demoReference: 'DEMO-2026-003',

    itemName: 'Network Switch 24 Port',

    category: 'Networking',

    icon: 'hub',

    quantity: 1,

    unit: 'Unit',

    customerName: 'Modern Academy',

    siteName: 'Modern Academy Kanpur',

    siteLocation: 'Kanpur, Uttar Pradesh',

    condition: 'FAULTY',

    status: 'INSPECTED',

    issuedDate: '01 Sep 2026',

    expectedReturnDate: '16 Sep 2026',

    returnedBy: 'Demo Team',

    receivedBy: 'Neha Singh',

    inspectionBy: 'Technical Team',

    notes:
      'Device failed functional testing and has been moved to faulty materials.',
  },


  {
    id: 'DR-009',

    returnNumber: 'DR-2026-009',

    returnDate: '15 Sep 2026',

    demoReference: 'DEMO-2026-002',

    itemName: 'HDMI Cable',

    category: 'Accessories',

    icon: 'cable',

    quantity: 8,

    unit: 'Pieces',

    customerName: 'Green Valley School',

    siteName: 'Green Valley School Lucknow',

    siteLocation: 'Lucknow, Uttar Pradesh',

    condition: 'GOOD',

    status: 'CLOSED',

    issuedDate: '28 Aug 2026',

    expectedReturnDate: '15 Sep 2026',

    returnedBy: 'Demo Team',

    receivedBy: 'Amit Kumar',

    inspectionBy: 'SCM Executive',

    notes:
      'All cables returned in usable condition.',
  },


  {
    id: 'DR-010',

    returnNumber: 'DR-2026-010',

    returnDate: '14 Sep 2026',

    demoReference: 'DEMO-2026-001',

    itemName: 'Power Extension Board',

    category: 'Accessories',

    icon: 'power',

    quantity: 4,

    unit: 'Pieces',

    customerName: 'Delhi Public School',

    siteName: 'Delhi Public School Noida',

    siteLocation: 'Noida, Uttar Pradesh',

    condition: 'PENDING_CHECK',

    status: 'IN_TRANSIT',

    issuedDate: '27 Aug 2026',

    expectedReturnDate: '14 Sep 2026',

    returnedBy: 'Demo Team',

    notes:
      'Return shipment is currently in transit to the main warehouse.',
  },

];