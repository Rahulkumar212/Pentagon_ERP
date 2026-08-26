// =====================================================
// SALES FUNNEL TYPE
// =====================================================

export interface SalesFunnelItem {
  stage: string;
  count: number;
  value: number;
  percentage: number;
}


// =====================================================
// SALES DIRECTOR SALES FUNNEL DATA
// =====================================================

export const SALES_DIRECTOR_SALES_FUNNEL: SalesFunnelItem[] = [
  {
    stage: 'Leads',
    count: 248,
    value: 42000000,
    percentage: 100,
  },

  {
    stage: 'Qualified',
    count: 156,
    value: 31500000,
    percentage: 75,
  },

  {
    stage: 'Opportunities',
    count: 92,
    value: 22400000,
    percentage: 53,
  },

  {
    stage: 'Proposals',
    count: 54,
    value: 14800000,
    percentage: 35,
  },

  {
    stage: 'Negotiation',
    count: 28,
    value: 9200000,
    percentage: 22,
  },

  {
    stage: 'Won',
    count: 16,
    value: 5800000,
    percentage: 14,
  },
];