export type StockOverviewStatus =
  | 'HEALTHY'
  | 'LOW_STOCK'
  | 'OUT_OF_STOCK';

export interface StockOverviewItem {
  id: string;
  category: string;
  description: string;
  icon: string;

  totalUnits: number;
  availableUnits: number;
  reservedUnits: number;

  status: StockOverviewStatus;

  iconBg: string;
  iconColor: string;
}

export const STOCK_OVERVIEW_DATA: StockOverviewItem[] = [
  {
    id: 'display',
    category: 'Display & Interactive Panels',
    description: 'Interactive displays and smart panels',
    icon: 'display_settings',
    totalUnits: 842,
    availableUnits: 768,
    reservedUnits: 74,
    status: 'HEALTHY',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },

  {
    id: 'computer',
    category: 'Computers & Mini PCs',
    description: 'Mini PCs, desktops and computing devices',
    icon: 'computer',
    totalUnits: 624,
    availableUnits: 548,
    reservedUnits: 76,
    status: 'HEALTHY',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },

  {
    id: 'accessories',
    category: 'Accessories',
    description: 'Keyboard, mouse, HDMI cables and accessories',
    icon: 'devices_other',
    totalUnits: 986,
    availableUnits: 914,
    reservedUnits: 72,
    status: 'HEALTHY',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },

  {
    id: 'networking',
    category: 'Networking',
    description: 'Routers, switches and network equipment',
    icon: 'lan',
    totalUnits: 386,
    availableUnits: 342,
    reservedUnits: 44,
    status: 'HEALTHY',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },

  {
    id: 'furniture',
    category: 'Furniture',
    description: 'Stands, tables and installation furniture',
    icon: 'chair',
    totalUnits: 284,
    availableUnits: 226,
    reservedUnits: 58,
    status: 'LOW_STOCK',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },

  {
    id: 'other',
    category: 'Other Materials',
    description: 'Installation and miscellaneous materials',
    icon: 'category',
    totalUnits: 126,
    availableUnits: 66,
    reservedUnits: 60,
    status: 'LOW_STOCK',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
  },
];