// =====================================================
// SALES KPI TYPE
// =====================================================

export interface SalesKpi {
  title: string;
  value: string;
  change: string;
  changeLabel: string;
  trend: 'up' | 'down';
  icon: 'revenue' | 'target' | 'pipeline' | 'conversion';
}


// =====================================================
// SALES DIRECTOR KPI DATA
// =====================================================

export const SALES_DIRECTOR_KPIS: SalesKpi[] = [
  {
    title: 'Total Revenue',
    value: '₹24.8 Cr',
    change: '12.4%',
    changeLabel: 'vs previous period',
    trend: 'up',
    icon: 'revenue',
  },

  {
    title: 'Sales Target',
    value: '₹30.0 Cr',
    change: '82.6%',
    changeLabel: 'target achieved',
    trend: 'up',
    icon: 'target',
  },

  {
    title: 'Active Pipeline',
    value: '₹18.4 Cr',
    change: '9.2%',
    changeLabel: 'vs previous period',
    trend: 'up',
    icon: 'pipeline',
  },

  {
    title: 'Conversion Rate',
    value: '11.8%',
    change: '2.4%',
    changeLabel: 'vs previous period',
    trend: 'up',
    icon: 'conversion',
  },
];