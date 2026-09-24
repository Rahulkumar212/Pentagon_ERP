export type StockListStatus =
  | 'AVAILABLE'
  | 'LOW_STOCK'
  | 'OUT_OF_STOCK'
  | 'RESERVED';

export type StockListCondition =
  | 'NEW'
  | 'GOOD'
  | 'DAMAGED'
  | 'FAULTY';

export type StockCategoryCode =
  | 'DISPLAY'
  | 'COMPUTER'
  | 'ACCESSORIES'
  | 'NETWORKING'
  | 'FURNITURE'
  | 'OTHER';

export interface StockListItem {
  id: string;

  stockCode: string;

  itemName: string;

  category: string;

  categoryCode: StockCategoryCode;

  icon: string;

  totalQuantity: number;

  availableQuantity: number;

  reservedQuantity: number;

  unit: string;

  condition: StockListCondition;

  status: StockListStatus;

  location: string;

  warehouse: string;

  lastUpdated: string;
}


export const STOCK_LIST_DATA: StockListItem[] = [

  {
    id: 'STK-001',
    stockCode: 'STK-DSP-001',
    itemName: 'Interactive Display 65 Inch',
    category: 'Display',
    categoryCode: 'DISPLAY',
    icon: 'tv',
    totalQuantity: 48,
    availableQuantity: 38,
    reservedQuantity: 10,
    unit: 'Units',
    condition: 'NEW',
    status: 'AVAILABLE',
    location: 'Rack A-01',
    warehouse: 'Main Warehouse',
    lastUpdated: '2026-09-23',
  },

  {
    id: 'STK-002',
    stockCode: 'STK-CMP-001',
    itemName: 'Mini PC',
    category: 'Computer',
    categoryCode: 'COMPUTER',
    icon: 'computer',
    totalQuantity: 42,
    availableQuantity: 12,
    reservedQuantity: 30,
    unit: 'Units',
    condition: 'NEW',
    status: 'RESERVED',
    location: 'Rack B-02',
    warehouse: 'Main Warehouse',
    lastUpdated: '2026-09-23',
  },

  {
    id: 'STK-003',
    stockCode: 'STK-ACC-001',
    itemName: 'Wireless Keyboard & Mouse',
    category: 'Accessories',
    categoryCode: 'ACCESSORIES',
    icon: 'keyboard',
    totalQuantity: 180,
    availableQuantity: 145,
    reservedQuantity: 35,
    unit: 'Sets',
    condition: 'GOOD',
    status: 'AVAILABLE',
    location: 'Rack C-01',
    warehouse: 'Main Warehouse',
    lastUpdated: '2026-09-22',
  },

  {
    id: 'STK-004',
    stockCode: 'STK-ACC-002',
    itemName: 'HDMI Cable',
    category: 'Accessories',
    categoryCode: 'ACCESSORIES',
    icon: 'cable',
    totalQuantity: 320,
    availableQuantity: 285,
    reservedQuantity: 35,
    unit: 'Pieces',
    condition: 'GOOD',
    status: 'AVAILABLE',
    location: 'Rack C-03',
    warehouse: 'Main Warehouse',
    lastUpdated: '2026-09-22',
  },

  {
    id: 'STK-005',
    stockCode: 'STK-NET-001',
    itemName: 'Network Switch 24 Port',
    category: 'Networking',
    categoryCode: 'NETWORKING',
    icon: 'hub',
    totalQuantity: 28,
    availableQuantity: 6,
    reservedQuantity: 22,
    unit: 'Units',
    condition: 'NEW',
    status: 'LOW_STOCK',
    location: 'Rack D-01',
    warehouse: 'Main Warehouse',
    lastUpdated: '2026-09-21',
  },

  {
    id: 'STK-006',
    stockCode: 'STK-NET-002',
    itemName: 'Wi-Fi Router',
    category: 'Networking',
    categoryCode: 'NETWORKING',
    icon: 'router',
    totalQuantity: 35,
    availableQuantity: 27,
    reservedQuantity: 8,
    unit: 'Units',
    condition: 'NEW',
    status: 'AVAILABLE',
    location: 'Rack D-03',
    warehouse: 'Main Warehouse',
    lastUpdated: '2026-09-22',
  },

  {
    id: 'STK-007',
    stockCode: 'STK-FUR-001',
    itemName: 'Display Stand',
    category: 'Furniture',
    categoryCode: 'FURNITURE',
    icon: 'table_restaurant',
    totalQuantity: 32,
    availableQuantity: 19,
    reservedQuantity: 8,
    unit: 'Units',
    condition: 'GOOD',
    status: 'AVAILABLE',
    location: 'Rack E-01',
    warehouse: 'Main Warehouse',
    lastUpdated: '2026-09-20',
  },

  {
    id: 'STK-008',
    stockCode: 'STK-ACC-003',
    itemName: 'Power Extension Board',
    category: 'Accessories',
    categoryCode: 'ACCESSORIES',
    icon: 'power',
    totalQuantity: 95,
    availableQuantity: 58,
    reservedQuantity: 25,
    unit: 'Pieces',
    condition: 'GOOD',
    status: 'AVAILABLE',
    location: 'Rack C-05',
    warehouse: 'Main Warehouse',
    lastUpdated: '2026-09-21',
  },

  {
    id: 'STK-009',
    stockCode: 'STK-CMP-002',
    itemName: 'Laptop',
    category: 'Computer',
    categoryCode: 'COMPUTER',
    icon: 'laptop_mac',
    totalQuantity: 24,
    availableQuantity: 4,
    reservedQuantity: 20,
    unit: 'Units',
    condition: 'NEW',
    status: 'LOW_STOCK',
    location: 'Rack B-04',
    warehouse: 'Main Warehouse',
    lastUpdated: '2026-09-23',
  },

  {
    id: 'STK-010',
    stockCode: 'STK-NET-003',
    itemName: 'LAN Cable Cat6',
    category: 'Networking',
    categoryCode: 'NETWORKING',
    icon: 'lan',
    totalQuantity: 250,
    availableQuantity: 0,
    reservedQuantity: 250,
    unit: 'Pieces',
    condition: 'GOOD',
    status: 'OUT_OF_STOCK',
    location: 'Rack D-05',
    warehouse: 'Main Warehouse',
    lastUpdated: '2026-09-23',
  },

  {
    id: 'STK-011',
    stockCode: 'STK-OTH-001',
    itemName: 'USB Hub',
    category: 'Other',
    categoryCode: 'OTHER',
    icon: 'usb',
    totalQuantity: 40,
    availableQuantity: 32,
    reservedQuantity: 8,
    unit: 'Units',
    condition: 'GOOD',
    status: 'AVAILABLE',
    location: 'Rack C-07',
    warehouse: 'Main Warehouse',
    lastUpdated: '2026-09-19',
  },

  {
    id: 'STK-012',
    stockCode: 'STK-DSP-002',
    itemName: 'Interactive Display 75 Inch',
    category: 'Display',
    categoryCode: 'DISPLAY',
    icon: 'tv',
    totalQuantity: 18,
    availableQuantity: 11,
    reservedQuantity: 7,
    unit: 'Units',
    condition: 'NEW',
    status: 'AVAILABLE',
    location: 'Rack A-03',
    warehouse: 'Main Warehouse',
    lastUpdated: '2026-09-23',
  },

  {
    id: 'STK-013',
    stockCode: 'STK-ACC-004',
    itemName: 'Wireless Presenter',
    category: 'Accessories',
    categoryCode: 'ACCESSORIES',
    icon: 'present_to_all',
    totalQuantity: 16,
    availableQuantity: 5,
    reservedQuantity: 11,
    unit: 'Units',
    condition: 'GOOD',
    status: 'LOW_STOCK',
    location: 'Rack C-08',
    warehouse: 'Main Warehouse',
    lastUpdated: '2026-09-22',
  },

  {
    id: 'STK-014',
    stockCode: 'STK-OTH-002',
    itemName: 'UPS',
    category: 'Other',
    categoryCode: 'OTHER',
    icon: 'battery_charging_full',
    totalQuantity: 14,
    availableQuantity: 9,
    reservedQuantity: 5,
    unit: 'Units',
    condition: 'GOOD',
    status: 'AVAILABLE',
    location: 'Rack E-03',
    warehouse: 'Main Warehouse',
    lastUpdated: '2026-09-20',
  },

  {
    id: 'STK-015',
    stockCode: 'STK-DSP-003',
    itemName: 'Display Wall Mount',
    category: 'Display',
    categoryCode: 'DISPLAY',
    icon: 'wallpaper',
    totalQuantity: 22,
    availableQuantity: 3,
    reservedQuantity: 19,
    unit: 'Units',
    condition: 'DAMAGED',
    status: 'LOW_STOCK',
    location: 'Inspection Area',
    warehouse: 'Main Warehouse',
    lastUpdated: '2026-09-18',
  },

];