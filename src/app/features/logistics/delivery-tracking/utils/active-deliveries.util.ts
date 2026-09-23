export interface ActiveDelivery {
  id: string;
  orderNumber: string;
  trackingNumber: string;
  customerName: string;
  destination: string;
  carrier: string;
  status: 'IN_TRANSIT' | 'OUT_FOR_DELIVERY' | 'DELAYED';
  progress: number;
  currentLocation: string;
  lastUpdated: string;
  expectedDelivery: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  driverName: string;
  driverContact: string;
}

export const ACTIVE_DELIVERIES_DATA: ActiveDelivery[] = [
  {
    id: 'ACTIVE-001',
    orderNumber: 'ORD-10245',
    trackingNumber: 'BD123456789',
    customerName: 'ABC Technologies',
    destination: 'New Delhi',
    carrier: 'Blue Dart',
    status: 'IN_TRANSIT',
    progress: 68,
    currentLocation: 'Agra Transit Hub',
    lastUpdated: '10 min ago',
    expectedDelivery: '24 Sep 2026',
    priority: 'HIGH',
    driverName: 'Rajesh Kumar',
    driverContact: '+91 98765 43210',
  },

  {
    id: 'ACTIVE-002',
    orderNumber: 'ORD-10246',
    trackingNumber: 'DL987654321',
    customerName: 'Delhi Public School',
    destination: 'Noida',
    carrier: 'Delhivery',
    status: 'OUT_FOR_DELIVERY',
    progress: 88,
    currentLocation: 'Noida Sector 62',
    lastUpdated: '5 min ago',
    expectedDelivery: '23 Sep 2026',
    priority: 'MEDIUM',
    driverName: 'Amit Verma',
    driverContact: '+91 98765 12345',
  },

  {
    id: 'ACTIVE-003',
    orderNumber: 'ORD-10248',
    trackingNumber: 'FD789456123',
    customerName: 'Modern Academy',
    destination: 'Kanpur',
    carrier: 'FedEx',
    status: 'DELAYED',
    progress: 54,
    currentLocation: 'Kanpur Transit Hub',
    lastUpdated: '35 min ago',
    expectedDelivery: '25 Sep 2026',
    priority: 'HIGH',
    driverName: 'Suresh Yadav',
    driverContact: '+91 98123 45678',
  },

  {
    id: 'ACTIVE-004',
    orderNumber: 'ORD-10249',
    trackingNumber: 'DH321654987',
    customerName: 'Sunrise International School',
    destination: 'Jaipur',
    carrier: 'DHL',
    status: 'IN_TRANSIT',
    progress: 42,
    currentLocation: 'Gurugram Hub',
    lastUpdated: '18 min ago',
    expectedDelivery: '25 Sep 2026',
    priority: 'MEDIUM',
    driverName: 'Vivek Sharma',
    driverContact: '+91 98989 12345',
  },

  {
    id: 'ACTIVE-005',
    orderNumber: 'ORD-10251',
    trackingNumber: 'DT654789321',
    customerName: 'St. Xavier School',
    destination: 'Lucknow',
    carrier: 'DTDC',
    status: 'OUT_FOR_DELIVERY',
    progress: 91,
    currentLocation: 'Lucknow City Hub',
    lastUpdated: '7 min ago',
    expectedDelivery: '23 Sep 2026',
    priority: 'LOW',
    driverName: 'Mohit Singh',
    driverContact: '+91 97654 32109',
  },
];