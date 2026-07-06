export interface KPIItem {

  title: string;

  value: string;

  subtitle: string;

  icon: string;

  badge: string;

  badgeColor: string;

}

export const SALES_KPI_DATA: KPIItem[] = [

  {
    title: 'Total Organizations',
    value: '324',
    subtitle: 'Registered Clients',
    icon: '🏢',
    badge: '+18',
    badgeColor: 'bg-green-100 text-green-700'
  },

  {
    title: 'Institution Visits',
    value: '178',
    subtitle: 'Completed This Month',
    icon: '🏫',
    badge: '+12%',
    badgeColor: 'bg-blue-100 text-blue-700'
  },

  {
    title: 'Billing Orders',
    value: '142',
    subtitle: 'Generated Orders',
    icon: '🧾',
    badge: '+9%',
    badgeColor: 'bg-yellow-100 text-yellow-700'
  },

  {
    title: 'Revenue',
    value: '₹2.48 Cr',
    subtitle: 'Monthly Collection',
    icon: '💰',
    badge: '+22%',
    badgeColor: 'bg-green-100 text-green-700'
  },

  {
    title: 'Sales Executives',
    value: '16',
    subtitle: 'Active Workforce',
    icon: '👨‍💼',
    badge: '100%',
    badgeColor: 'bg-purple-100 text-purple-700'
  },

  {
    title: 'Conversion Rate',
    value: '82%',
    subtitle: 'Visit to Billing',
    icon: '📈',
    badge: '+5%',
    badgeColor: 'bg-red-100 text-red-700'
  }

];