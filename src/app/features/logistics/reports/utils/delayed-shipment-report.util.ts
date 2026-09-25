
export type DelayedShipmentReportStatus =
  | 'DELAYED'
  | 'CRITICAL'
  | 'RESOLVING';

export type DelayedShipmentReportReason =
  | 'CARRIER_DELAY'
  | 'ADDRESS_ISSUE'
  | 'CUSTOMS'
  | 'STOCK_ISSUE'
  | 'WEATHER'
  | 'CUSTOMER_UNAVAILABLE'
  | 'OTHER';

export type DelayedShipmentReportPriority =
  | 'HIGH'
  | 'MEDIUM'
  | 'LOW';

export interface DelayedShipmentReportItem {
  id: string;
  trackingNumber: string;
  orderNumber: string;
  customerName: string;
  destination: string;
  carrier: string;
  delayDays: number;
  expectedDate: string;
  currentDate: string;
  reason: DelayedShipmentReportReason;
  status: DelayedShipmentReportStatus;
  priority: DelayedShipmentReportPriority;
}

export const DELAYED_SHIPMENT_REPORT_DATA: DelayedShipmentReportItem[] = [
  {
    id: 'DSR-001',
    trackingNumber: 'TRK-2026-0841',
    orderNumber: 'SO-2026-142',
    customerName: 'ABC Technologies Pvt. Ltd.',
    destination: 'Delhi',
    carrier: 'BlueDart',
    delayDays: 2,
    expectedDate: '2026-09-22',
    currentDate: '2026-09-24',
    reason: 'CARRIER_DELAY',
    status: 'DELAYED',
    priority: 'HIGH',
  },
  {
    id: 'DSR-002',
    trackingNumber: 'TRK-2026-0835',
    orderNumber: 'GEM-2026-051',
    customerName: 'Government Project Site',
    destination: 'Lucknow',
    carrier: 'Delhivery',
    delayDays: 3,
    expectedDate: '2026-09-21',
    currentDate: '2026-09-24',
    reason: 'ADDRESS_ISSUE',
    status: 'CRITICAL',
    priority: 'HIGH',
  },
  {
    id: 'DSR-003',
    trackingNumber: 'TRK-2026-0828',
    orderNumber: 'SO-2026-136',
    customerName: 'Digital Solutions Ltd.',
    destination: 'Jaipur',
    carrier: 'DTDC',
    delayDays: 1,
    expectedDate: '2026-09-23',
    currentDate: '2026-09-24',
    reason: 'CUSTOMER_UNAVAILABLE',
    status: 'RESOLVING',
    priority: 'MEDIUM',
  },
  {
    id: 'DSR-004',
    trackingNumber: 'TRK-2026-0819',
    orderNumber: 'SO-2026-129',
    customerName: 'Smart Education Systems',
    destination: 'Chandigarh',
    carrier: 'BlueDart',
    delayDays: 4,
    expectedDate: '2026-09-20',
    currentDate: '2026-09-24',
    reason: 'STOCK_ISSUE',
    status: 'CRITICAL',
    priority: 'HIGH',
  },
  {
    id: 'DSR-005',
    trackingNumber: 'TRK-2026-0812',
    orderNumber: 'GEM-2026-044',
    customerName: 'State Education Department',
    destination: 'Bhopal',
    carrier: 'Delhivery',
    delayDays: 2,
    expectedDate: '2026-09-22',
    currentDate: '2026-09-24',
    reason: 'OTHER',
    status: 'DELAYED',
    priority: 'MEDIUM',
  },
  {
    id: 'DSR-006',
    trackingNumber: 'TRK-2026-0804',
    orderNumber: 'SO-2026-118',
    customerName: 'Tech Infrastructure Pvt. Ltd.',
    destination: 'Noida',
    carrier: 'DTDC',
    delayDays: 1,
    expectedDate: '2026-09-23',
    currentDate: '2026-09-24',
    reason: 'CARRIER_DELAY',
    status: 'RESOLVING',
    priority: 'LOW',
  },
  {
    id: 'DSR-007',
    trackingNumber: 'TRK-2026-0798',
    orderNumber: 'SO-2026-112',
    customerName: 'Digital Learning Center',
    destination: 'Gurugram',
    carrier: 'BlueDart',
    delayDays: 2,
    expectedDate: '2026-09-22',
    currentDate: '2026-09-24',
    reason: 'WEATHER',
    status: 'DELAYED',
    priority: 'MEDIUM',
  },
  {
    id: 'DSR-008',
    trackingNumber: 'TRK-2026-0789',
    orderNumber: 'GEM-2026-038',
    customerName: 'District Education Office',
    destination: 'Kanpur',
    carrier: 'Delhivery',
    delayDays: 5,
    expectedDate: '2026-09-19',
    currentDate: '2026-09-24',
    reason: 'CUSTOMS',
    status: 'CRITICAL',
    priority: 'HIGH',
  },
];

