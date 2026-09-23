export type DeliveryTrackingStatus =
  | 'ALL'
  | 'IN_TRANSIT'
  | 'OUT_FOR_DELIVERY'
  | 'DELIVERED'
  | 'DELAYED'
  | 'RETURNED';

export type DeliveryPriority =
  | 'ALL'
  | 'HIGH'
  | 'MEDIUM'
  | 'LOW';

export interface TrackingFilterOptions {
  statuses: {
    label: string;
    value: DeliveryTrackingStatus;
  }[];

  carriers: string[];

  priorities: {
    label: string;
    value: DeliveryPriority;
  }[];
}

export const TRACKING_FILTER_OPTIONS: TrackingFilterOptions = {
  statuses: [
    {
      label: 'All Status',
      value: 'ALL',
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
  ],

  carriers: [
    'All Carriers',
    'Blue Dart',
    'Delhivery',
    'DTDC',
    'FedEx',
    'DHL',
  ],

  priorities: [
    {
      label: 'All Priority',
      value: 'ALL',
    },
    {
      label: 'High',
      value: 'HIGH',
    },
    {
      label: 'Medium',
      value: 'MEDIUM',
    },
    {
      label: 'Low',
      value: 'LOW',
    },
  ],
};