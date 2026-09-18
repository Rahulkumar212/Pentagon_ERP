import { SidebarModule } from './sidebar.types';

export const SALES_DIRECTOR_SIDEBAR: SidebarModule = {

  consoleTitle: 'Sales Director Console',

  sections: [

    // =====================================================
    // MAIN
    // =====================================================
    {
      heading: 'Main',

      items: [

        {
          label: 'Dashboard Overview',
          icon: '📊',
          route: '/sales-director/dashboard-overview',
        },

        {
          label: 'Approval Center',
          icon: '✅',
          route: '/approvals',
        },

        {
          label: 'Audit Logs',
          icon: '📋',
          route: '/sales-director/audit-logs',
        },

        {
          label: 'Order Tracking',
          icon: '📦',
          route: '/sales-director/order-tracking',
        },

      ],
    },


    // =====================================================
    // SALES MANAGEMENT
    // =====================================================
    {
      heading: 'Sales Management',

      items: [

        {
          label: 'Pipeline',
          icon: '📈',
          route: '/sales-director/pipeline',
        },
    //     {
    //       label: 'Opportunities',
    //       icon: '🎯',
    //       route: '/sales-director/opportunities',
    //     },

    //     {
    //       label: 'Customers',
    //       icon: '👥',
    //       route: '/sales-director/customers',
    //     },

    //     {
    //       label: 'Sales Orders',
    //       icon: '🛒',
    //       route: '/sales-director/sales-orders',
    //     },

    //     {
    //       label: 'Quotations',
    //       icon: '📄',
    //       route: '/sales-director/quotations',
    //     },

      ],
    },


    // =====================================================
    // PERFORMANCE & CONTROL
    // =====================================================
    // {
    //   heading: 'Performance & Control',

    //   items: [

    //     {
    //       label: 'Team Performance',
    //       icon: '📊',
    //       route: '/sales-director/team-performance',
    //     },

    //     {
    //       label: 'Regional Performance',
    //       icon: '🌍',
    //       route: '/sales-director/regional-performance',
    //     },

    //     {
    //       label: 'Targets',
    //       icon: '🎯',
    //       route: '/sales-director/targets',
    //     },

    //     {
    //       label: 'Revenue Performance',
    //       icon: '💰',
    //       route: '/sales-director/revenue-performance',
    //     },

    //   ],
    // },


    // =====================================================
    // STRATEGIC CONTROL
    // =====================================================
    // {
    //   heading: 'Strategic Control',

    //   items: [

    //     {
    //       label: 'Pricing',
    //       icon: '💲',
    //       route: '/sales-director/pricing',
    //     },

    //     {
    //       label: 'Key Accounts',
    //       icon: '🏢',
    //       route: '/sales-director/key-accounts',
    //     },

    //     {
    //       label: 'Forecast',
    //       icon: '📈',
    //       route: '/sales-director/forecast',
    //     },

    //     {
    //       label: 'Critical Attention',
    //       icon: '⚠️',
    //       route: '/sales-director/critical-attention',
    //     },

    //   ],
    // },


    // =====================================================
    // CROSS-FUNCTIONAL OVERSIGHT
    // =====================================================
    // {
    //   heading: 'Cross-Functional Oversight',

    //   items: [

    //     {
    //       label: 'IT',
    //       icon: '💻',
    //       route: '/sales-director/it',
    //     },

    //     {
    //       label: 'HR',
    //       icon: '👤',
    //       route: '/sales-director/hr',
    //     },

    //     {
    //       label: 'Finance',
    //       icon: '💰',
    //       route: '/sales-director/finance',
    //     },

    //     {
    //       label: 'Supply Chain',
    //       icon: '🚚',
    //       route: '/sales-director/supply-chain',
    //     },

    //   ],
    // },


    // =====================================================
    // REPORTS & ANALYTICS
    // =====================================================
    // {
    //   heading: 'Reports & Analytics',

    //   items: [

    //     {
    //       label: 'Sales Reports',
    //       icon: '📊',
    //       route: '/sales-director/reports/sales',
    //     },

    //     {
    //       label: 'Revenue Reports',
    //       icon: '💰',
    //       route: '/sales-director/reports/revenue',
    //     },

    //     {
    //       label: 'Customer Reports',
    //       icon: '👥',
    //       route: '/sales-director/reports/customers',
    //     },

    //     {
    //       label: 'Management Reports',
    //       icon: '📋',
    //       route: '/sales-director/reports/management',
    //     },

    //   ],
    // },

  ],
};