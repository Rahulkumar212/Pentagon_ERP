export type DispatchSummaryType =
  | 'READY'
  | 'PACKING'
  | 'READY_TO_DISPATCH'
  | 'DISPATCHED'
  | 'ON_HOLD'
  | 'HIGH_PRIORITY';

export interface DispatchSummaryItem {
  key: string;
  title: string;
  value: number;
  description: string;
  icon: string;
  type: DispatchSummaryType;
  trend: string;
  trendType: 'POSITIVE' | 'WARNING' | 'NEUTRAL';
}

export const DISPATCH_SUMMARY_ITEMS: DispatchSummaryItem[] = [
  {
    key: 'ready',
    title: 'Ready for Dispatch',
    value: 18,
    description: 'Orders waiting for dispatch processing',
    icon: '📦',
    type: 'READY',
    trend: 'Pending',
    trendType: 'WARNING',
  },
  {
    key: 'packing',
    title: 'Packing in Progress',
    value: 7,
    description: 'Orders currently being packed',
    icon: '📋',
    type: 'PACKING',
    trend: 'Processing',
    trendType: 'NEUTRAL',
  },
  {
    key: 'ready-to-dispatch',
    title: 'Ready to Dispatch',
    value: 11,
    description: 'Packed orders awaiting final dispatch',
    icon: '📤',
    type: 'READY_TO_DISPATCH',
    trend: 'Action Required',
    trendType: 'WARNING',
  },
  {
    key: 'dispatched',
    title: 'Dispatched Today',
    value: 24,
    description: 'Orders dispatched from warehouse today',
    icon: '🚚',
    type: 'DISPATCHED',
    trend: '+12%',
    trendType: 'POSITIVE',
  },
  {
    key: 'on-hold',
    title: 'On Hold',
    value: 3,
    description: 'Orders blocked from dispatch',
    icon: '⏸',
    type: 'ON_HOLD',
    trend: 'Attention',
    trendType: 'WARNING',
  },
  {
    key: 'high-priority',
    title: 'High Priority',
    value: 5,
    description: 'Priority orders requiring fast dispatch',
    icon: '⚡',
    type: 'HIGH_PRIORITY',
    trend: 'Urgent',
    trendType: 'WARNING',
  },
];