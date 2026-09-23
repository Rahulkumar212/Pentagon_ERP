export type ShipmentFilterStatus =
  | 'ALL'
  | 'DISPATCHED'
  | 'IN_TRANSIT'
  | 'OUT_FOR_DELIVERY'
  | 'DELIVERED'
  | 'DELAYED'
  | 'RETURNED';

export interface ShipmentFilter {
  search: string;
  status: ShipmentFilterStatus;
  carrier: string;
  destination: string;
  fromDate: string;
  toDate: string;
}

export const DEFAULT_SHIPMENT_FILTER: ShipmentFilter = {
  search: '',
  status: 'ALL',
  carrier: 'ALL',
  destination: 'ALL',
  fromDate: '',
  toDate: '',
};

export const SHIPMENT_STATUS_OPTIONS: {
  label: string;
  value: ShipmentFilterStatus;
}[] = [
  {
    label: 'All Status',
    value: 'ALL',
  },
  {
    label: 'Dispatched',
    value: 'DISPATCHED',
  },
  {
    label: 'In Transit',
    value: 'IN_TRANSIT',
  },
  {
    label: 'Out for Delivery',
    value: 'OUT_FOR_DELIVERY',
  },
  {
    label: 'Delivered',
    value: 'DELIVERED',
  },
  {
    label: 'Delayed',
    value: 'DELAYED',
  },
  {
    label: 'Returned',
    value: 'RETURNED',
  },
];

export const SHIPMENT_CARRIER_OPTIONS: string[] = [
  'ALL',
  'Blue Dart',
  'Delhivery',
  'DTDC',
];

export const SHIPMENT_DESTINATION_OPTIONS: string[] = [
  'ALL',
  'Lucknow',
  'Noida',
  'Gurugram',
  'Jaipur',
  'Agra',
  'Meerut',
];