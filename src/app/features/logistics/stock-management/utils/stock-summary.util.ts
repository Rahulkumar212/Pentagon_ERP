export interface StockSummaryCard {
  id: string;
  title: string;
  value: number;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  valueColor: string;
  status?: string;
  statusClass?: string;
}

export const STOCK_SUMMARY_DATA: StockSummaryCard[] = [
  {
    id: 'total-stock',
    title: 'Total Stock',
    value: 3248,
    description: 'Total units in warehouse',
    icon: 'inventory_2',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    valueColor: 'text-gray-900',
  },
  {
    id: 'available-stock',
    title: 'Available Stock',
    value: 2864,
    description: 'Ready for allocation',
    icon: 'check_circle',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    valueColor: 'text-green-600',
  },
  {
    id: 'low-stock',
    title: 'Low Stock',
    value: 24,
    description: 'Items requiring procurement',
    icon: 'warning',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    valueColor: 'text-orange-600',
    status: 'Attention',
    statusClass: 'bg-orange-50 text-orange-700',
  },
  {
    id: 'procurement',
    title: 'Procurement',
    value: 24,
    description: 'Items currently being procured',
    icon: 'shopping_cart',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    valueColor: 'text-indigo-600',
  },
  {
    id: 'demo-units',
    title: 'Demo Units',
    value: 18,
    description: 'Units currently with customers',
    icon: 'display_settings',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    valueColor: 'text-purple-600',
  },
  {
    id: 'faulty-materials',
    title: 'Faulty Materials',
    value: 7,
    description: 'Units requiring inspection',
    icon: 'build_circle',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    valueColor: 'text-red-600',
    status: 'Review',
    statusClass: 'bg-red-50 text-red-700',
  },
];