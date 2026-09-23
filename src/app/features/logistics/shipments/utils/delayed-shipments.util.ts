
export type DelayedShipmentSeverity =
  | 'CRITICAL'
  | 'HIGH'
  | 'MEDIUM';

export interface DelayedShipment {

  id: string;

  shipmentNumber: string;

  orderNumber: string;

  customerName: string;

  destination: string;

  currentLocation: string;

  carrier: string;

  expectedDelivery: string;

  daysLate: number;

  severity: DelayedShipmentSeverity;

  reason: string;

  lastUpdated: string;
}

export const DELAYED_SHIPMENTS:
  DelayedShipment[] = [

  {
    id: 'DLY-001',

    shipmentNumber: 'SHP-00569',

    orderNumber: 'ORD-10242',

    customerName: 'National Learning Center',

    destination: 'Jaipur',

    currentLocation: 'Gurugram Hub',

    carrier: 'Blue Dart',

    expectedDelivery: '2026-09-21',

    daysLate: 2,

    severity: 'CRITICAL',

    reason: 'Vehicle movement delayed at transit hub',

    lastUpdated: '23 Sep 2026, 09:35 AM',
  },

  {
    id: 'DLY-002',

    shipmentNumber: 'SHP-00561',

    orderNumber: 'ORD-10235',

    customerName: 'Delhi Education Group',

    destination: 'Lucknow',

    currentLocation: 'Kanpur',

    carrier: 'Delhivery',

    expectedDelivery: '2026-09-22',

    daysLate: 1,

    severity: 'HIGH',

    reason: 'Delivery attempt could not be completed',

    lastUpdated: '23 Sep 2026, 08:50 AM',
  },

  {
    id: 'DLY-003',

    shipmentNumber: 'SHP-00548',

    orderNumber: 'ORD-10218',

    customerName: 'Bright Future Academy',

    destination: 'Agra',

    currentLocation: 'Mathura',

    carrier: 'DTDC',

    expectedDelivery: '2026-09-22',

    daysLate: 1,

    severity: 'HIGH',

    reason: 'Transport delay due to route disruption',

    lastUpdated: '23 Sep 2026, 08:15 AM',
  },

  {
    id: 'DLY-004',

    shipmentNumber: 'SHP-00542',

    orderNumber: 'ORD-10211',

    customerName: 'Modern Public School',

    destination: 'Meerut',

    currentLocation: 'Ghaziabad',

    carrier: 'Blue Dart',

    expectedDelivery: '2026-09-23',

    daysLate: 0,

    severity: 'MEDIUM',

    reason: 'Shipment approaching expected delivery window',

    lastUpdated: '23 Sep 2026, 10:20 AM',
  },
];

