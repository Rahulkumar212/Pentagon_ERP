
export type ShipmentKpiType =
  | 'TOTAL'
  | 'DISPATCHED'
  | 'TRANSIT'
  | 'DELIVERY'
  | 'DELIVERED'
  | 'DELAYED'
  | 'RETURNED';

export type ShipmentKpiTrendType =
  | 'POSITIVE'
  | 'WARNING'
  | 'NEUTRAL';

export interface ShipmentKpiItem {
  key: string;
  title: string;
  value: number;
  description: string;
  icon: string;

  type: ShipmentKpiType;

  trend: string;
  trendType: ShipmentKpiTrendType;
}

export const SHIPMENT_KPI_ITEMS: ShipmentKpiItem[] = [

  {
    key: 'total',
    title: 'Total Shipments',
    value: 84,
    description: 'All active and completed shipments',
    icon: '📦',
    type: 'TOTAL',
    trend: 'This Month',
    trendType: 'NEUTRAL',
  },

  {
    key: 'dispatched',
    title: 'Dispatched',
    value: 12,
    description: 'Recently dispatched from warehouse',
    icon: '📤',
    type: 'DISPATCHED',
    trend: '+8%',
    trendType: 'POSITIVE',
  },

  {
    key: 'transit',
    title: 'In Transit',
    value: 24,
    description: 'Shipments currently on the way',
    icon: '🚚',
    type: 'TRANSIT',
    trend: '29%',
    trendType: 'NEUTRAL',
  },

  {
    key: 'delivery',
    title: 'Out for Delivery',
    value: 7,
    description: 'Shipments arriving at destination',
    icon: '📍',
    type: 'DELIVERY',
    trend: 'Today',
    trendType: 'NEUTRAL',
  },

  {
    key: 'delivered',
    title: 'Delivered',
    value: 41,
    description: 'Successfully delivered shipments',
    icon: '✓',
    type: 'DELIVERED',
    trend: '+14%',
    trendType: 'POSITIVE',
  },

  {
    key: 'delayed',
    title: 'Delayed',
    value: 6,
    description: 'Shipments requiring attention',
    icon: '⚠',
    type: 'DELAYED',
    trend: '7.1%',
    trendType: 'WARNING',
  },

  {
    key: 'returned',
    title: 'Returned',
    value: 2,
    description: 'Shipments returned to warehouse',
    icon: '↩',
    type: 'RETURNED',
    trend: 'This Month',
    trendType: 'NEUTRAL',
  },
];

