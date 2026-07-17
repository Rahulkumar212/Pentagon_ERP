export interface FinanceSummaryCard {

  id: number;

  title: string;

  value: number;

  change: number;

  positive: boolean;

  icon: string;

  color: string;

}

export const FinanceSummaryCards: FinanceSummaryCard[] = [

  {
    id: 1,
    title: 'Total Revenue',
    value: 2450000,
    change: 12.5,
    positive: true,
    icon: 'payments',
    color: 'text-green-600'
  },

  {
    id: 2,
    title: 'Total Expenses',
    value: 1680000,
    change: 4.2,
    positive: false,
    icon: 'account_balance_wallet',
    color: 'text-red-600'
  },

  {
    id: 3,
    title: 'Net Profit',
    value: 770000,
    change: 8.7,
    positive: true,
    icon: 'trending_up',
    color: 'text-blue-600'
  },

  {
    id: 4,
    title: 'Pending Payments',
    value: 315000,
    change: 2.1,
    positive: false,
    icon: 'schedule',
    color: 'text-orange-600'
  }

];