export interface PendingActionSummaryCard {
  key: string;
  title: string;
  value: number;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  valueColor: string;
}

export const PENDING_ACTION_SUMMARY: PendingActionSummaryCard[] = [
  {
    key: 'total-pending',
    title: 'Total Pending',
    value: 18,
    description: 'Actions requiring attention',
    icon: '⏳',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    valueColor: 'text-gray-900',
  },
  {
    key: 'high-priority',
    title: 'High Priority',
    value: 6,
    description: 'Requires immediate action',
    icon: '⚠',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    valueColor: 'text-red-600',
  },
  {
    key: 'medium-priority',
    title: 'Medium Priority',
    value: 8,
    description: 'Needs attention soon',
    icon: '!',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    valueColor: 'text-orange-600',
  },
  {
    key: 'low-priority',
    title: 'Low Priority',
    value: 4,
    description: 'Can be handled later',
    icon: '✓',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    valueColor: 'text-blue-600',
  },
];