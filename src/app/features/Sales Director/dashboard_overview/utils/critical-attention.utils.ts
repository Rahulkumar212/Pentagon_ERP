// =====================================================
// CRITICAL ATTENTION TYPE
// =====================================================

export interface CriticalAttentionItem {
  title: string;
  description: string;
  category: 'deal' | 'target' | 'customer' | 'collection';
  priority: 'high' | 'medium';
  value?: number;
  actionLabel: string;
}


// =====================================================
// SALES DIRECTOR CRITICAL ATTENTION DATA
// =====================================================

export const SALES_DIRECTOR_CRITICAL_ATTENTION: CriticalAttentionItem[] = [
  {
    title: 'ABC Industries deal is delayed',

    description:
      'High-value opportunity has been in negotiation for more than 30 days.',

    category: 'deal',

    priority: 'high',

    value: 4500000,

    actionLabel: 'Review Deal',
  },

  {
    title: 'North Region below monthly target',

    description:
      'Regional sales achievement is currently below the expected monthly target.',

    category: 'target',

    priority: 'high',

    value: 2800000,

    actionLabel: 'View Region',
  },

  // {
  //   title: 'Customer renewal requires attention',

  //   description:
  //     'A key customer renewal is pending and requires management follow-up.',

  //   category: 'customer',

  //   priority: 'medium',

  //   value: 1900000,

  //   actionLabel: 'View Customer',
  // },

  // {
  //   title: 'Outstanding collection pending',

  //   description:
  //     'Payment from a major customer is overdue and may impact cash flow.',

  //   category: 'collection',

  //   priority: 'medium',

  //   value: 1250000,

  //   actionLabel: 'View Collection',
  // },
];