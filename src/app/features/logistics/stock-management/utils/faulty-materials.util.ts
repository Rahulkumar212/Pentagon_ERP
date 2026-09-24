export type FaultyMaterialStatus =
  | 'PENDING_INSPECTION'
  | 'UNDER_REPAIR'
  | 'REPAIRABLE'
  | 'NON_REPAIRABLE'
  | 'REPLACEMENT_PENDING'
  | 'SCRAPPED'
  | 'RETURNED_TO_STOCK';

export type FaultyMaterialSource =
  | 'STOCK_ENTRY'
  | 'DEMO_RETURN'
  | 'STOCK_EXIT_RETURN'
  | 'INTERNAL_USE'
  | 'QUALITY_CHECK';

export type FaultyMaterialCondition =
  | 'DAMAGED'
  | 'FAULTY'
  | 'BROKEN'
  | 'DEFECTIVE'
  | 'MISSING_PARTS';

export interface FaultyMaterialItem {
  id: string;
  faultNumber: string;
  reportedDate: string;

  itemName: string;
  category: string;
  icon: string;

  quantity: number;
  unit: string;

  condition: FaultyMaterialCondition;
  status: FaultyMaterialStatus;

  source: FaultyMaterialSource;
  referenceNumber: string;

  warehouse: string;
  storageLocation: string;

  reportedBy: string;
  inspectedBy?: string;

  issueDescription: string;
  actionTaken?: string;

  repairCost?: number;
  estimatedResolutionDate?: string;

  notes?: string;
}

export const FAULTY_MATERIALS_DATA: FaultyMaterialItem[] = [
  {
    id: 'FM-001',
    faultNumber: 'FM-2026-001',
    reportedDate: '2026-09-18',

    itemName: 'Interactive Display 65 Inch',
    category: 'Display',
    icon: 'desktop_windows',

    quantity: 2,
    unit: 'Units',

    condition: 'FAULTY',
    status: 'UNDER_REPAIR',

    source: 'DEMO_RETURN',
    referenceNumber: 'DR-2026-006',

    warehouse: 'Main Warehouse',
    storageLocation: 'Faulty Area A-01',

    reportedBy: 'SCM Executive',
    inspectedBy: 'Technical Team',

    issueDescription:
      'Display is powering on but touch functionality is not responding.',

    actionTaken:
      'Touch panel diagnosis and replacement initiated.',

    repairCost: 8500,
    estimatedResolutionDate: '2026-09-27',

    notes: 'Returned from school demo.'
  },

  {
    id: 'FM-002',
    faultNumber: 'FM-2026-002',
    reportedDate: '2026-09-19',

    itemName: 'Display Stand',
    category: 'Furniture',
    icon: 'table_restaurant',

    quantity: 5,
    unit: 'Units',

    condition: 'DAMAGED',
    status: 'NON_REPAIRABLE',

    source: 'DEMO_RETURN',
    referenceNumber: 'DR-2026-006',

    warehouse: 'Main Warehouse',
    storageLocation: 'Faulty Area A-02',

    reportedBy: 'SCM Executive',
    inspectedBy: 'SCM Manager',

    issueDescription:
      'Stand frame is bent and cannot safely support the display.',

    actionTaken:
      'Marked as non-repairable after physical inspection.',

    estimatedResolutionDate: '2026-09-25',

    notes: 'Replacement required.'
  },

  {
    id: 'FM-003',
    faultNumber: 'FM-2026-003',
    reportedDate: '2026-09-20',

    itemName: 'Network Switch 24 Port',
    category: 'Networking',
    icon: 'lan',

    quantity: 4,
    unit: 'Units',

    condition: 'FAULTY',
    status: 'REPAIRABLE',

    source: 'STOCK_ENTRY',
    referenceNumber: 'SE-2026-005',

    warehouse: 'Main Warehouse',
    storageLocation: 'Inspection Area D-01',

    reportedBy: 'Warehouse Executive',
    inspectedBy: 'Technical Team',

    issueDescription:
      'Two ports are not detecting connected network devices.',

    actionTaken:
      'Sent for technical diagnosis and port-level repair.',

    repairCost: 4200,
    estimatedResolutionDate: '2026-09-28'
  },

  {
    id: 'FM-004',
    faultNumber: 'FM-2026-004',
    reportedDate: '2026-09-20',

    itemName: 'Wi-Fi Router',
    category: 'Networking',
    icon: 'router',

    quantity: 2,
    unit: 'Units',

    condition: 'BROKEN',
    status: 'SCRAPPED',

    source: 'DEMO_RETURN',
    referenceNumber: 'DR-2026-008',

    warehouse: 'Main Warehouse',
    storageLocation: 'Scrap Area',

    reportedBy: 'SCM Executive',
    inspectedBy: 'Technical Team',

    issueDescription:
      'Device casing is broken and internal board is physically damaged.',

    actionTaken:
      'Material approved for scrap disposal.',

    estimatedResolutionDate: '2026-09-24',

    notes: 'Not economically repairable.'
  },

  {
    id: 'FM-005',
    faultNumber: 'FM-2026-005',
    reportedDate: '2026-09-21',

    itemName: 'Wireless Keyboard & Mouse',
    category: 'Accessories',
    icon: 'keyboard',

    quantity: 12,
    unit: 'Sets',

    condition: 'DEFECTIVE',
    status: 'REPLACEMENT_PENDING',

    source: 'QUALITY_CHECK',
    referenceNumber: 'QC-2026-021',

    warehouse: 'Main Warehouse',
    storageLocation: 'Faulty Area C-01',

    reportedBy: 'Quality Team',
    inspectedBy: 'SCM Executive',

    issueDescription:
      'Keyboard keys are intermittently failing and mouse connectivity is unstable.',

    actionTaken:
      'Replacement request raised with supplier.',

    estimatedResolutionDate: '2026-09-30',

    notes: 'Supplier replacement under discussion.'
  },

  {
    id: 'FM-006',
    faultNumber: 'FM-2026-006',
    reportedDate: '2026-09-21',

    itemName: 'HDMI Cable',
    category: 'Accessories',
    icon: 'cable',

    quantity: 18,
    unit: 'Pieces',

    condition: 'DAMAGED',
    status: 'RETURNED_TO_STOCK',

    source: 'STOCK_EXIT_RETURN',
    referenceNumber: 'EXIT-2026-014',

    warehouse: 'Main Warehouse',
    storageLocation: 'Rack C-03',

    reportedBy: 'Installation Team',
    inspectedBy: 'SCM Executive',

    issueDescription:
      'Outer cable damage was found but connection was tested successfully.',

    actionTaken:
      'Inspected and returned usable pieces to available stock.',

    estimatedResolutionDate: '2026-09-22',

    notes: 'Usable after inspection.'
  },

  {
    id: 'FM-007',
    faultNumber: 'FM-2026-007',
    reportedDate: '2026-09-22',

    itemName: 'Mini PC',
    category: 'Computer',
    icon: 'computer',

    quantity: 3,
    unit: 'Units',

    condition: 'MISSING_PARTS',
    status: 'PENDING_INSPECTION',

    source: 'STOCK_ENTRY',
    referenceNumber: 'SE-2026-002',

    warehouse: 'Main Warehouse',
    storageLocation: 'Inspection Area B-02',

    reportedBy: 'Warehouse Executive',

    issueDescription:
      'Power adapters were missing during quantity and material verification.',

    estimatedResolutionDate: '2026-09-26',

    notes: 'Supplier verification pending.'
  },

  {
    id: 'FM-008',
    faultNumber: 'FM-2026-008',
    reportedDate: '2026-09-22',

    itemName: 'Power Extension Board',
    category: 'Accessories',
    icon: 'power',

    quantity: 7,
    unit: 'Pieces',

    condition: 'DEFECTIVE',
    status: 'UNDER_REPAIR',

    source: 'QUALITY_CHECK',
    referenceNumber: 'QC-2026-024',

    warehouse: 'Main Warehouse',
    storageLocation: 'Faulty Area C-02',

    reportedBy: 'Quality Team',
    inspectedBy: 'Technical Team',

    issueDescription:
      'Power switch is not functioning correctly on multiple units.',

    actionTaken:
      'Electrical inspection and switch replacement in progress.',

    repairCost: 1800,
    estimatedResolutionDate: '2026-09-26'
  },

  {
    id: 'FM-009',
    faultNumber: 'FM-2026-009',
    reportedDate: '2026-09-23',

    itemName: 'Interactive Display 75 Inch',
    category: 'Display',
    icon: 'tv',

    quantity: 1,
    unit: 'Unit',

    condition: 'FAULTY',
    status: 'REPAIRABLE',

    source: 'DEMO_RETURN',
    referenceNumber: 'DR-2026-002',

    warehouse: 'Main Warehouse',
    storageLocation: 'Faulty Area A-03',

    reportedBy: 'SCM Executive',
    inspectedBy: 'Technical Team',

    issueDescription:
      'Display has intermittent screen flickering during operation.',

    actionTaken:
      'Panel and power board diagnosis scheduled.',

    repairCost: 6500,
    estimatedResolutionDate: '2026-09-29'
  },

  {
    id: 'FM-010',
    faultNumber: 'FM-2026-010',
    reportedDate: '2026-09-23',

    itemName: 'Laptop',
    category: 'Computer',
    icon: 'laptop',

    quantity: 2,
    unit: 'Units',

    condition: 'BROKEN',
    status: 'PENDING_INSPECTION',

    source: 'INTERNAL_USE',
    referenceNumber: 'OFFICE-2026-012',

    warehouse: 'Main Warehouse',
    storageLocation: 'Inspection Area B-03',

    reportedBy: 'IT Department',

    issueDescription:
      'Laptop casing is damaged after accidental physical impact.',

    estimatedResolutionDate: '2026-09-28',

    notes: 'Technical inspection required.'
  }
];