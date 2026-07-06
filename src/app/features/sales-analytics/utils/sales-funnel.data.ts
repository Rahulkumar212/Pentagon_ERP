export interface SalesFunnel {

  stage: string;

  count: number;

  value: string;

  progress: number;

}

export const SALES_FUNNEL_DATA: SalesFunnel[] = [

  {
    stage: 'Leads Generated',
    count: 420,
    value: '₹8.5 Cr',
    progress: 100
  },

  {
    stage: 'Qualified Leads',
    count: 305,
    value: '₹6.9 Cr',
    progress: 73
  },

  {
    stage: 'Institution Visits',
    count: 210,
    value: '₹5.4 Cr',
    progress: 50
  },

  {
    stage: 'Proposal Submitted',
    count: 145,
    value: '₹4.2 Cr',
    progress: 35
  },

  {
    stage: 'Billing Generated',
    count: 96,
    value: '₹2.8 Cr',
    progress: 23
  },

  {
    stage: 'Payment Received',
    count: 82,
    value: '₹2.4 Cr',
    progress: 20
  }

];