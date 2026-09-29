
export interface OrderSummaryItem {
  label: string;
  value: number;
  icon: string;
  description?: string;
}

export const ORDER_SUMMARY_DATA: OrderSummaryItem[] = [

  {
    label: 'Total Orders',
    value: 248,
    icon: '🛒',
    description: 'All sales orders'
  },

  {
    label: 'Pending Orders',
    value: 32,
    icon: '⏳',
    description: 'Waiting for processing'
  },

  {
    label: 'Processing',
    value: 24,
    icon: '⚙️',
    description: 'Currently being processed'
  },

  {
    label: 'Ready for Dispatch',
    value: 18,
    icon: '📦',
    description: 'Ready to hand over'
  },

  {
    label: 'Dispatched',
    value: 43,
    icon: '🚚',
    description: 'Orders dispatched'
  },

  {
    label: 'Delivered',
    value: 123,
    icon: '✅',
    description: 'Successfully delivered'
  },

  {
    label: 'Cancelled',
    value: 8,
    icon: '❌',
    description: 'Cancelled orders'
  }

];

