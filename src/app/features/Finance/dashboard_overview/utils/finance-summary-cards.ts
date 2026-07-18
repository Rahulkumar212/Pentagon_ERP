export interface FinanceSummaryCard {

  id: number;

  title: string;

  value: number;

  change: number;

  positive: boolean;

  icon: string;

  color: string;

  bgColor: string;

  subtitle: string;

}

export const FinanceSummaryCards: FinanceSummaryCard[] = [

  {
    id: 1,
    title: 'TOTAL REVENUE',
    value: 51250,
    change: 18.4,
    positive: true,
    icon: 'trending_up',
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    subtitle: 'from last month'
  },

  {
    id: 2,
    title: 'TOTAL EXPENSES',
    value: 21750,
    change: 6.2,
    positive: false,
    icon: 'trending_down',
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    subtitle: 'from last month'
  },

  {
    id: 3,
    title: 'NET PROFIT',
    value: 29500,
    change: 57.6,
    positive: true,
    icon: 'currency_rupee',
    color: 'text-white',
    bgColor: 'bg-red-900',
    subtitle: 'Margin : 57.6%'
  },

  {
    id: 4,
    title: 'CASH IN BANK',
    value: 541700,
    change: 0,
    positive: true,
    icon: 'account_balance',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    subtitle: '4 Connected Accounts'
  },

  {
    id: 5,
    title: 'PENDING PAYMENTS',
    value: 17050,
    change: 0,
    positive: false,
    icon: 'schedule',
    color: 'text-orange-700',
    bgColor: 'bg-orange-50',
    subtitle: 'Accounts Payable Outstanding'
  },

  {
    id: 6,
    title: 'OUTSTANDING INVOICES',
    value: 65800,
    change: 0,
    positive: false,
    icon: 'request_quote',
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    subtitle: 'Accounts Receivable Unpaid'
  }

];