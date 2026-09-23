export type ShipmentListStatus =
  | 'DISPATCHED'
  | 'IN_TRANSIT'
  | 'OUT_FOR_DELIVERY'
  | 'DELIVERED'
  | 'DELAYED'
  | 'RETURNED';

export interface ShipmentListItem {
  id: string;
  shipmentNumber: string;
  orderNumber: string;
  customerName: string;
  origin: string;
  destination: string;
  carrier: string;
  trackingNumber: string;
  status: ShipmentListStatus;
  dispatchDate: string;
  expectedDelivery: string;
  currentLocation: string;
  lastUpdated: string;
}

export const SHIPMENT_LIST_DATA: ShipmentListItem[] = [
  {
    id: 'SHP-001',
    shipmentNumber: 'SHP-00572',
    orderNumber: 'ORD-10245',
    customerName: 'ABC Technologies Pvt. Ltd.',
    origin: 'Delhi Warehouse',
    destination: 'Lucknow',
    carrier: 'Blue Dart',
    trackingNumber: 'BD458721963',
    status: 'IN_TRANSIT',
    dispatchDate: '2026-09-21',
    expectedDelivery: '2026-09-25',
    currentLocation: 'Kanpur',
    lastUpdated: '23 Sep 2026, 10:45 AM',
  },
  {
    id: 'SHP-002',
    shipmentNumber: 'SHP-00571',
    orderNumber: 'ORD-10244',
    customerName: 'Bright Future Academy',
    origin: 'Delhi Warehouse',
    destination: 'Noida',
    carrier: 'Delhivery',
    trackingNumber: 'DLV784521369',
    status: 'OUT_FOR_DELIVERY',
    dispatchDate: '2026-09-21',
    expectedDelivery: '2026-09-23',
    currentLocation: 'Noida Sector 62',
    lastUpdated: '23 Sep 2026, 11:10 AM',
  },
  {
    id: 'SHP-003',
    shipmentNumber: 'SHP-00570',
    orderNumber: 'ORD-10243',
    customerName: 'Modern Public School',
    origin: 'Delhi Warehouse',
    destination: 'Gurugram',
    carrier: 'DTDC',
    trackingNumber: 'DT458963214',
    status: 'DISPATCHED',
    dispatchDate: '2026-09-22',
    expectedDelivery: '2026-09-24',
    currentLocation: 'Delhi',
    lastUpdated: '23 Sep 2026, 09:20 AM',
  },
  {
    id: 'SHP-004',
    shipmentNumber: 'SHP-00569',
    orderNumber: 'ORD-10242',
    customerName: 'National Learning Center',
    origin: 'Delhi Warehouse',
    destination: 'Jaipur',
    carrier: 'Blue Dart',
    trackingNumber: 'BD458721845',
    status: 'DELAYED',
    dispatchDate: '2026-09-18',
    expectedDelivery: '2026-09-21',
    currentLocation: 'Gurugram Hub',
    lastUpdated: '23 Sep 2026, 09:35 AM',
  },
  {
    id: 'SHP-005',
    shipmentNumber: 'SHP-00568',
    orderNumber: 'ORD-10241',
    customerName: 'Central Government Institute',
    origin: 'Delhi Warehouse',
    destination: 'Agra',
    carrier: 'Delhivery',
    trackingNumber: 'DLV784521102',
    status: 'DELIVERED',
    dispatchDate: '2026-09-18',
    expectedDelivery: '2026-09-22',
    currentLocation: 'Agra',
    lastUpdated: '23 Sep 2026, 07:55 AM',
  },
  {
    id: 'SHP-006',
    shipmentNumber: 'SHP-00567',
    orderNumber: 'ORD-10240',
    customerName: 'State Education Department',
    origin: 'Delhi Warehouse',
    destination: 'Meerut',
    carrier: 'DTDC',
    trackingNumber: 'DT458963018',
    status: 'IN_TRANSIT',
    dispatchDate: '2026-09-21',
    expectedDelivery: '2026-09-24',
    currentLocation: 'Ghaziabad',
    lastUpdated: '23 Sep 2026, 10:05 AM',
  },
  {
    id: 'SHP-007',
    shipmentNumber: 'SHP-00566',
    orderNumber: 'ORD-10239',
    customerName: 'Sunrise Education Group',
    origin: 'Delhi Warehouse',
    destination: 'Mathura',
    carrier: 'Blue Dart',
    trackingNumber: 'BD458721712',
    status: 'RETURNED',
    dispatchDate: '2026-09-17',
    expectedDelivery: '2026-09-20',
    currentLocation: 'Delhi Warehouse',
    lastUpdated: '23 Sep 2026, 08:25 AM',
  },
];