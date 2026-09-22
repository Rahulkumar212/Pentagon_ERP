import { SidebarModule } from './sidebar.types';

export const LOGISTICS_SIDEBAR: SidebarModule = {
  consoleTitle: 'Logistics Console',

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
          route: '/logistics/dashboard-overview',
        },
        {
          label: 'Pending Actions',
          icon: '⚠️',
          route: '/logistics/pending-actions',
        },
      ],
    },

    // =====================================================
    // ORDERS & SHIPMENTS
    // =====================================================
    {
      heading: 'Orders & Shipments',
      items: [
        {
          label: 'Orders',
          icon: '📦',
          route: '/logistics/orders',
        },
        {
          label: 'Shipments',
          icon: '🚚',
          route: '/logistics/shipments',
        },
        {
          label: 'Dispatch',
          icon: '📤',
          route: '/logistics/dispatch',
        },
        {
          label: 'Delivery Tracking',
          icon: '📍',
          route: '/logistics/delivery-tracking',
        },
      ],
    },

    // =====================================================
    // STOCK
    // =====================================================
    {
      heading: 'Stock',
      items: [
        {
          label: 'Stock Management',
          icon: '📦',
          route: '/logistics/stock-management',
        },
        {
          label: 'Stock Movement',
          icon: '🔄',
          route: '/logistics/stock-movement',
        },
      ],
    },

    // =====================================================
    // PERFORMANCE
    // =====================================================
    {
      heading: 'Performance',
      items: [
        {
          label: 'Delivery Performance',
          icon: '📈',
          route: '/logistics/delivery-performance',
        },
      ],
    },

    // =====================================================
    // REPORTS
    // =====================================================
    {
      heading: 'Reports',
      items: [
        {
          label: 'Logistics Reports',
          icon: '📋',
          route: '/logistics/reports',
        },
      ],
    },
  ],
};