export type OfficeUseStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'ISSUED'
  | 'COMPLETED'
  | 'RETURNED'
  | 'CANCELLED';

export type OfficeUsePurpose =
  | 'IT_USE'
  | 'ADMIN_USE'
  | 'OPERATIONS'
  | 'TRAINING'
  | 'HR_USE'
  | 'MAINTENANCE'
  | 'INTERNAL_PROJECT'
  | 'OTHER';

export interface OfficeUseItem {
  id: string;
  issueNumber: string;
  issueDate: string;

  itemName: string;
  category: string;
  icon: string;

  quantity: number;
  unit: string;

  department: string;
  employeeName: string;
  employeeCode?: string;

  purpose: OfficeUsePurpose;
  status: OfficeUseStatus;

  referenceNumber: string;

  warehouse: string;
  issuedFrom: string;

  requestedBy: string;
  approvedBy?: string;
  issuedBy?: string;

  expectedReturnDate?: string;
  actualReturnDate?: string;

  notes?: string;
}

export const OFFICE_USE_DATA: OfficeUseItem[] = [
  {
    id: 'OU-001',
    issueNumber: 'OU-2026-001',
    issueDate: '2026-09-05',

    itemName: 'Laptop',
    category: 'Computer',
    icon: 'laptop',

    quantity: 3,
    unit: 'Units',

    department: 'IT Department',
    employeeName: 'IT Support Team',
    employeeCode: 'IT-TEAM',

    purpose: 'IT_USE',
    status: 'ISSUED',

    referenceNumber: 'REQ-IT-2026-014',

    warehouse: 'Main Warehouse',
    issuedFrom: 'Rack B-01',

    requestedBy: 'IT Manager',
    approvedBy: 'Operations Director',
    issuedBy: 'SCM Executive',

    notes: 'Issued for internal IT support activities.'
  },

  {
    id: 'OU-002',
    issueNumber: 'OU-2026-002',
    issueDate: '2026-09-07',

    itemName: 'Power Extension Board',
    category: 'Accessories',
    icon: 'power',

    quantity: 8,
    unit: 'Pieces',

    department: 'Operations',
    employeeName: 'Operations Team',
    employeeCode: 'OPS-TEAM',

    purpose: 'OPERATIONS',
    status: 'ISSUED',

    referenceNumber: 'REQ-OPS-2026-021',

    warehouse: 'Main Warehouse',
    issuedFrom: 'Rack C-02',

    requestedBy: 'Operations Manager',
    approvedBy: 'Operations Director',
    issuedBy: 'SCM Executive',

    notes: 'Used for office equipment and operational setup.'
  },

  {
    id: 'OU-003',
    issueNumber: 'OU-2026-003',
    issueDate: '2026-09-09',

    itemName: 'Wireless Keyboard & Mouse',
    category: 'Accessories',
    icon: 'keyboard',

    quantity: 12,
    unit: 'Sets',

    department: 'HR',
    employeeName: 'New Employee Setup',
    employeeCode: 'HR-SETUP',

    purpose: 'HR_USE',
    status: 'ISSUED',

    referenceNumber: 'REQ-HR-2026-018',

    warehouse: 'Main Warehouse',
    issuedFrom: 'Rack C-01',

    requestedBy: 'HR Manager',
    approvedBy: 'HR Head',
    issuedBy: 'SCM Executive',

    notes: 'Issued for new employee workstation setup.'
  },

  {
    id: 'OU-2026-004',
    issueNumber: 'OU-2026-004',
    issueDate: '2026-09-10',

    itemName: 'Interactive Display',
    category: 'Display',
    icon: 'desktop_windows',

    quantity: 1,
    unit: 'Unit',

    department: 'Training',
    employeeName: 'Training Team',
    employeeCode: 'TRN-TEAM',

    purpose: 'TRAINING',
    status: 'ISSUED',

    referenceNumber: 'REQ-TRN-2026-007',

    warehouse: 'Main Warehouse',
    issuedFrom: 'Demo Area',

    requestedBy: 'Training Manager',
    approvedBy: 'Director',
    issuedBy: 'SCM Executive',

    expectedReturnDate: '2026-10-05',

    notes: 'Used for internal employee training sessions.'
  },

  {
    id: 'OU-005',
    issueNumber: 'OU-2026-005',
    issueDate: '2026-09-12',

    itemName: 'HDMI Cable',
    category: 'Accessories',
    icon: 'cable',

    quantity: 15,
    unit: 'Pieces',

    department: 'Administration',
    employeeName: 'Admin Team',
    employeeCode: 'ADM-TEAM',

    purpose: 'ADMIN_USE',
    status: 'COMPLETED',

    referenceNumber: 'REQ-ADM-2026-011',

    warehouse: 'Main Warehouse',
    issuedFrom: 'Rack C-03',

    requestedBy: 'Admin Manager',
    approvedBy: 'Admin Head',
    issuedBy: 'SCM Executive',

    notes: 'Used for conference room and meeting setup.'
  },

  {
    id: 'OU-006',
    issueNumber: 'OU-2026-006',
    issueDate: '2026-09-14',

    itemName: 'Network Switch 24 Port',
    category: 'Networking',
    icon: 'lan',

    quantity: 2,
    unit: 'Units',

    department: 'IT Department',
    employeeName: 'Network Team',
    employeeCode: 'IT-NET',

    purpose: 'MAINTENANCE',
    status: 'APPROVED',

    referenceNumber: 'REQ-IT-2026-025',

    warehouse: 'Main Warehouse',
    issuedFrom: 'Rack D-01',

    requestedBy: 'IT Manager',
    approvedBy: 'IT Head',

    notes: 'Required for internal network infrastructure maintenance.'
  },

  {
    id: 'OU-007',
    issueNumber: 'OU-2026-007',
    issueDate: '2026-09-16',

    itemName: 'Mini PC',
    category: 'Computer',
    icon: 'computer',

    quantity: 4,
    unit: 'Units',

    department: 'Internal Project',
    employeeName: 'ERP Development Team',
    employeeCode: 'ERP-TEAM',

    purpose: 'INTERNAL_PROJECT',
    status: 'ISSUED',

    referenceNumber: 'REQ-ERP-2026-009',

    warehouse: 'Main Warehouse',
    issuedFrom: 'Rack B-02',

    requestedBy: 'Project Manager',
    approvedBy: 'Director',
    issuedBy: 'SCM Executive',

    notes: 'Temporary systems for internal ERP development/testing.'
  },

  {
    id: 'OU-008',
    issueNumber: 'OU-2026-008',
    issueDate: '2026-09-18',

    itemName: 'Display Stand',
    category: 'Furniture',
    icon: 'table_restaurant',

    quantity: 2,
    unit: 'Units',

    department: 'Administration',
    employeeName: 'Office Setup Team',
    employeeCode: 'ADM-SETUP',

    purpose: 'ADMIN_USE',
    status: 'PENDING',

    referenceNumber: 'REQ-ADM-2026-019',

    warehouse: 'Main Warehouse',
    issuedFrom: 'Inspection Area',

    requestedBy: 'Admin Manager',

    notes: 'Waiting for approval before issue.'
  },

  {
    id: 'OU-009',
    issueNumber: 'OU-2026-009',
    issueDate: '2026-09-19',

    itemName: 'Wi-Fi Router',
    category: 'Networking',
    icon: 'router',

    quantity: 2,
    unit: 'Units',

    department: 'IT Department',
    employeeName: 'IT Infrastructure Team',
    employeeCode: 'IT-INFRA',

    purpose: 'MAINTENANCE',
    status: 'RETURNED',

    referenceNumber: 'REQ-IT-2026-029',

    warehouse: 'Main Warehouse',
    issuedFrom: 'Rack D-03',

    requestedBy: 'IT Manager',
    approvedBy: 'IT Head',
    issuedBy: 'SCM Executive',

    expectedReturnDate: '2026-09-22',
    actualReturnDate: '2026-09-22',

    notes: 'Returned after temporary network maintenance.'
  },

  {
    id: 'OU-010',
    issueNumber: 'OU-2026-010',
    issueDate: '2026-09-21',

    itemName: 'Office Chair',
    category: 'Furniture',
    icon: 'chair',

    quantity: 5,
    unit: 'Units',

    department: 'HR',
    employeeName: 'HR Department',
    employeeCode: 'HR-TEAM',

    purpose: 'HR_USE',
    status: 'APPROVED',

    referenceNumber: 'REQ-HR-2026-026',

    warehouse: 'Main Warehouse',
    issuedFrom: 'Furniture Area',

    requestedBy: 'HR Manager',
    approvedBy: 'HR Head',

    notes: 'Approved for new employee seating arrangement.'
  }
];