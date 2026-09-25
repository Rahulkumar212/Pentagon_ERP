
export type InventoryReportStatus =
  | 'HEALTHY'
  | 'LOW_STOCK'
  | 'OUT_OF_STOCK';

export interface InventoryReportItem {
  id: string;
  category: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  itemCount: number;
  totalStock: number;
  availableStock: number;
  demoStock: number;
  faultyStock: number;
  stockValue: number;
  status: InventoryReportStatus;
}

export const INVENTORY_REPORT_DATA: InventoryReportItem[] = [
  {
    id: 'INV-001',
    category: 'Computers',
    icon: 'computer',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    itemCount: 42,
    totalStock: 820,
    availableStock: 748,
    demoStock: 48,
    faultyStock: 7,
    stockValue: 4920000,
    status: 'HEALTHY',
  },
  {
    id: 'INV-002',
    category: 'Displays',
    icon: 'desktop_windows',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    itemCount: 28,
    totalStock: 612,
    availableStock: 558,
    demoStock: 32,
    faultyStock: 4,
    stockValue: 2142000,
    status: 'HEALTHY',
  },
  {
    id: 'INV-003',
    category: 'Networking',
    icon: 'lan',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    itemCount: 36,
    totalStock: 734,
    availableStock: 682,
    demoStock: 18,
    faultyStock: 3,
    stockValue: 1875000,
    status: 'HEALTHY',
  },
  {
    id: 'INV-004',
    category: 'Accessories',
    icon: 'keyboard',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    itemCount: 54,
    totalStock: 904,
    availableStock: 798,
    demoStock: 34,
    faultyStock: 9,
    stockValue: 864000,
    status: 'HEALTHY',
  },
  {
    id: 'INV-005',
    category: 'Projectors',
    icon: 'slideshow',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    itemCount: 12,
    totalStock: 96,
    availableStock: 54,
    demoStock: 18,
    faultyStock: 2,
    stockValue: 768000,
    status: 'LOW_STOCK',
  },
  {
    id: 'INV-006',
    category: 'Tablets',
    icon: 'tablet_android',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    itemCount: 16,
    totalStock: 82,
    availableStock: 24,
    demoStock: 8,
    faultyStock: 1,
    stockValue: 492000,
    status: 'LOW_STOCK',
  },
];

