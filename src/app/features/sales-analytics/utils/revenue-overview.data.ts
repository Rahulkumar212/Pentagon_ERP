export interface RevenueOverview {

  month: string;

  revenue: string;

  progress: number;

}

export const REVENUE_OVERVIEW_DATA: RevenueOverview[] = [

  {
    month: 'Jan',
    revenue: '₹24 L',
    progress: 45
  },

  {
    month: 'Feb',
    revenue: '₹28 L',
    progress: 58
  },

  {
    month: 'Mar',
    revenue: '₹34 L',
    progress: 70
  },

  {
    month: 'Apr',
    revenue: '₹41 L',
    progress: 82
  },

  {
    month: 'May',
    revenue: '₹48 L',
    progress: 96
  },

  {
    month: 'Jun',
    revenue: '₹52 L',
    progress: 100
  }

];