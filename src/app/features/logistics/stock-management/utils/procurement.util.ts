export type ProcurementStatus =
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'APPROVED'
  | 'ORDERED'
  | 'RECEIVED'
  | 'CANCELLED';

export type ProcurementPriority =
  | 'HIGH'
  | 'MEDIUM'
  | 'LOW';

export interface ProcurementItem {
  id: string;

  requestNumber: string;
  requestDate: string;

  itemName: string;
  category: string;
  icon: string;

  quantity: number;
  unit: string;

  supplier: string;

  priority: ProcurementPriority;
  status: ProcurementStatus;

  expectedDate: string;

  requestedBy: string;
  department: string;

  estimatedCost: number;

  notes?: string;
}


export const PROCUREMENT_DATA: ProcurementItem[] = [

  {
    id: 'PROC-001',

    requestNumber: 'PR-2026-001',
    requestDate: '20 Sep 2026',

    itemName: 'Interactive Display 65 Inch',
    category: 'Display',
    icon: 'display_settings',

    quantity: 25,
    unit: 'Units',

    supplier: 'Samsung India',

    priority: 'HIGH',
    status: 'APPROVED',

    expectedDate: '28 Sep 2026',

    requestedBy: 'SCM Team',
    department: 'Logistics',

    estimatedCost: 1875000,

    notes: 'Required for upcoming school orders.',
  },


  {
    id: 'PROC-002',

    requestNumber: 'PR-2026-002',
    requestDate: '21 Sep 2026',

    itemName: 'Mini PC',
    category: 'Computer',
    icon: 'computer',

    quantity: 40,
    unit: 'Units',

    supplier: 'Lenovo India',

    priority: 'HIGH',
    status: 'IN_PROGRESS',

    expectedDate: '30 Sep 2026',

    requestedBy: 'SCM Team',
    department: 'Logistics',

    estimatedCost: 1280000,

    notes: 'Stock level below required allocation quantity.',
  },


  {
    id: 'PROC-003',

    requestNumber: 'PR-2026-003',
    requestDate: '21 Sep 2026',

    itemName: 'Wireless Keyboard & Mouse',
    category: 'Accessories',
    icon: 'keyboard',

    quantity: 100,
    unit: 'Sets',

    supplier: 'Logitech India',

    priority: 'MEDIUM',
    status: 'ORDERED',

    expectedDate: '27 Sep 2026',

    requestedBy: 'SCM Team',
    department: 'Logistics',

    estimatedCost: 275000,

    notes: 'Regular stock replenishment.',
  },


  {
    id: 'PROC-004',

    requestNumber: 'PR-2026-004',
    requestDate: '22 Sep 2026',

    itemName: 'HDMI Cable',
    category: 'Accessories',
    icon: 'cable',

    quantity: 250,
    unit: 'Pieces',

    supplier: 'Belkin India',

    priority: 'MEDIUM',
    status: 'PENDING',

    expectedDate: '02 Oct 2026',

    requestedBy: 'SCM Team',
    department: 'Logistics',

    estimatedCost: 112500,

    notes: 'Procurement required for installation kits.',
  },


  {
    id: 'PROC-005',

    requestNumber: 'PR-2026-005',
    requestDate: '22 Sep 2026',

    itemName: 'Network Switch 24 Port',
    category: 'Networking',
    icon: 'lan',

    quantity: 15,
    unit: 'Units',

    supplier: 'TP-Link India',

    priority: 'LOW',
    status: 'RECEIVED',

    expectedDate: '24 Sep 2026',

    requestedBy: 'SCM Team',
    department: 'Logistics',

    estimatedCost: 82500,

    notes: 'Received and pending stock entry.',
  },


  {
    id: 'PROC-006',

    requestNumber: 'PR-2026-006',
    requestDate: '23 Sep 2026',

    itemName: 'Display Stand',
    category: 'Furniture',
    icon: 'chair',

    quantity: 30,
    unit: 'Units',

    supplier: 'Urban Office Solutions',

    priority: 'MEDIUM',
    status: 'PENDING',

    expectedDate: '05 Oct 2026',

    requestedBy: 'SCM Team',
    department: 'Logistics',

    estimatedCost: 210000,

    notes: 'Required for upcoming display installations.',
  },


  {
    id: 'PROC-007',

    requestNumber: 'PR-2026-007',
    requestDate: '23 Sep 2026',

    itemName: 'Wi-Fi Router',
    category: 'Networking',
    icon: 'router',

    quantity: 20,
    unit: 'Units',

    supplier: 'Cisco India',

    priority: 'HIGH',
    status: 'APPROVED',

    expectedDate: '29 Sep 2026',

    requestedBy: 'SCM Team',
    department: 'Logistics',

    estimatedCost: 190000,

    notes: 'Reserved for priority customer deployments.',
  },


  {
    id: 'PROC-008',

    requestNumber: 'PR-2026-008',
    requestDate: '23 Sep 2026',

    itemName: 'Power Extension Board',
    category: 'Other Materials',
    icon: 'power',

    quantity: 80,
    unit: 'Pieces',

    supplier: 'Havells India',

    priority: 'LOW',
    status: 'IN_PROGRESS',

    expectedDate: '01 Oct 2026',

    requestedBy: 'SCM Team',
    department: 'Logistics',

    estimatedCost: 68000,

    notes: 'General installation material.',
  },

];