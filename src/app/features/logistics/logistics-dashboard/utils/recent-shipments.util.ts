export type ShipmentStatus =
  | 'DELIVERED'
  | 'IN_TRANSIT'
  | 'PENDING'
  | 'DELAYED';

export interface RecentShipment {
  shipmentId: string;
  orderId: string;
  customer: string;
  destination: string;
  status: ShipmentStatus;
  expectedDelivery: string;
}

export const RECENT_SHIPMENTS: RecentShipment[] = [
  {
    shipmentId: 'SHP-00582',
    orderId: 'ORD-10248',
    customer: 'ABC Technologies',
    destination: 'Delhi',
    status: 'IN_TRANSIT',
    expectedDelivery: '24 Sep 2026',
  },
  {
    shipmentId: 'SHP-00581',
    orderId: 'ORD-10247',
    customer: 'XYZ Solutions',
    destination: 'Mumbai',
    status: 'DELIVERED',
    expectedDelivery: '21 Sep 2026',
  },
  {
    shipmentId: 'SHP-00580',
    orderId: 'ORD-10246',
    customer: 'Global Enterprises',
    destination: 'Bangalore',
    status: 'PENDING',
    expectedDelivery: '25 Sep 2026',
  },
  {
    shipmentId: 'SHP-00579',
    orderId: 'ORD-10245',
    customer: 'TechNova Pvt Ltd',
    destination: 'Pune',
    status: 'DELAYED',
    expectedDelivery: '20 Sep 2026',
  },
  {
    shipmentId: 'SHP-00578',
    orderId: 'ORD-10244',
    customer: 'Smart Systems',
    destination: 'Hyderabad',
    status: 'IN_TRANSIT',
    expectedDelivery: '26 Sep 2026',
  },
];