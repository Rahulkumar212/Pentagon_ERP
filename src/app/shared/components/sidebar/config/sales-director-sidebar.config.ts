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
          route: '/sales-director/approvals',
        },
        {
          label: 'Order Tracking',
          icon: '📦',
          route: '/sales-director/order-tracking',
        },
      ],
    },
   ],
};