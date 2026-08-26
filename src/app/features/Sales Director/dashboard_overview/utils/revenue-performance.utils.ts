// =====================================================
// REVENUE PERFORMANCE TYPE
// =====================================================

export interface RevenuePerformanceItem {
  month: string;
  actual: number;
  target: number;
}


// =====================================================
// SALES DIRECTOR REVENUE PERFORMANCE DATA
// =====================================================

export const SALES_DIRECTOR_REVENUE_PERFORMANCE: RevenuePerformanceItem[] = [
  {
    month: 'Apr',
    actual: 18000000,
    target: 20000000,
  },

  {
    month: 'May',
    actual: 21000000,
    target: 22000000,
  },

  {
    month: 'Jun',
    actual: 19500000,
    target: 21000000,
  },

  {
    month: 'Jul',
    actual: 24000000,
    target: 23000000,
  },

  {
    month: 'Aug',
    actual: 26000000,
    target: 25000000,
  },
];