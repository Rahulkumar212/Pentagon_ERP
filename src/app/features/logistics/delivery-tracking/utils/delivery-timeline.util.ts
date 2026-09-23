export type DeliveryTimelineStatus =
  | 'COMPLETED'
  | 'CURRENT'
  | 'PENDING'
  | 'DELAYED';

export interface DeliveryTimelineItem {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  status: DeliveryTimelineStatus;
  icon: string;
}

export const DELIVERY_TIMELINE_DATA: DeliveryTimelineItem[] = [
  {
    id: 'timeline-001',
    title: 'Order Dispatched',
    description: 'Shipment has been dispatched from the warehouse.',
    location: 'Main Warehouse, Delhi',
    date: '2026-09-21',
    time: '09:30 AM',
    status: 'COMPLETED',
    icon: 'inventory_2',
  },

  {
    id: 'timeline-002',
    title: 'Shipment Picked Up',
    description: 'Carrier has picked up the shipment from the warehouse.',
    location: 'Delhi Hub',
    date: '2026-09-21',
    time: '02:15 PM',
    status: 'COMPLETED',
    icon: 'local_shipping',
  },

  {
    id: 'timeline-003',
    title: 'In Transit',
    description: 'Shipment is currently moving towards the destination.',
    location: 'Agra Transit Hub',
    date: '2026-09-22',
    time: '11:45 AM',
    status: 'CURRENT',
    icon: 'route',
  },

  {
    id: 'timeline-004',
    title: 'Out for Delivery',
    description: 'Shipment will be assigned to the delivery executive.',
    location: 'Destination Hub',
    date: '2026-09-24',
    time: '09:00 AM',
    status: 'PENDING',
    icon: 'delivery_dining',
  },

  {
    id: 'timeline-005',
    title: 'Delivered',
    description: 'Shipment will be delivered to the customer.',
    location: 'Customer Location',
    date: '2026-09-24',
    time: 'Expected',
    status: 'PENDING',
    icon: 'check_circle',
  },
];