export type ShipmentTimelineStatus =
  | 'COMPLETED'
  | 'CURRENT'
  | 'PENDING'
  | 'DELAYED';

export interface ShipmentTimelineEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  status: ShipmentTimelineStatus;
  icon: string;
}

export const SHIPMENT_TIMELINE_DATA: ShipmentTimelineEvent[] = [
  {
    id: 'EVT-001',
    title: 'Shipment Dispatched',
    description: 'Shipment successfully dispatched from warehouse',
    location: 'Delhi Warehouse',
    date: '23 Sep 2026',
    time: '08:15 AM',
    status: 'COMPLETED',
    icon: '📤',
  },
  {
    id: 'EVT-002',
    title: 'Shipment In Transit',
    description: 'Shipment is currently moving towards destination',
    location: 'Gurugram Hub',
    date: '23 Sep 2026',
    time: '09:40 AM',
    status: 'CURRENT',
    icon: '🚚',
  },
  {
    id: 'EVT-003',
    title: 'Reached Transit Hub',
    description: 'Shipment reached the next transit location',
    location: 'Kanpur Hub',
    date: '23 Sep 2026',
    time: '11:20 AM',
    status: 'PENDING',
    icon: '📍',
  },
  {
    id: 'EVT-004',
    title: 'Out for Delivery',
    description: 'Shipment will be handed over to delivery executive',
    location: 'Lucknow',
    date: '24 Sep 2026',
    time: 'Expected',
    status: 'PENDING',
    icon: '🛵',
  },
  {
    id: 'EVT-005',
    title: 'Delivered',
    description: 'Shipment will be delivered to customer',
    location: 'Lucknow',
    date: '25 Sep 2026',
    time: 'Expected',
    status: 'PENDING',
    icon: '✓',
  },
];