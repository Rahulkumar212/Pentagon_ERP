export type DispatchFilterStatus =
  | 'ALL'
  | 'READY'
  | 'PACKING'
  | 'READY_TO_DISPATCH'
  | 'DISPATCHED'
  | 'ON_HOLD';

export type DispatchFilterSource =
  | 'ALL'
  | 'SALES'
  | 'GEM'
  | 'SALES_DIRECTOR';

export type DispatchFilterPriority =
  | 'ALL'
  | 'HIGH'
  | 'MEDIUM'
  | 'LOW';

export interface DispatchFilter {
  search: string;
  status: DispatchFilterStatus;
  source: DispatchFilterSource;
  priority: DispatchFilterPriority;
  carrier: string;
  dispatchDate: string;
}

export const DEFAULT_DISPATCH_FILTER: DispatchFilter = {
  search: '',
  status: 'ALL',
  source: 'ALL',
  priority: 'ALL',
  carrier: 'ALL',
  dispatchDate: '',
};

export const DISPATCH_STATUS_OPTIONS: {
  label: string;
  value: DispatchFilterStatus;
}[] = [
  {
    label: 'All Status',
    value: 'ALL',
  },
  {
    label: 'Ready',
    value: 'READY',
  },
  {
    label: 'Packing',
    value: 'PACKING',
  },
  {
    label: 'Ready to Dispatch',
    value: 'READY_TO_DISPATCH',
  },
  {
    label: 'Dispatched',
    value: 'DISPATCHED',
  },
  {
    label: 'On Hold',
    value: 'ON_HOLD',
  },
];

export const DISPATCH_SOURCE_OPTIONS: {
  label: string;
  value: DispatchFilterSource;
}[] = [
  {
    label: 'All Sources',
    value: 'ALL',
  },
  {
    label: 'Sales',
    value: 'SALES',
  },
  {
    label: 'GEM',
    value: 'GEM',
  },
  {
    label: 'Sales Director',
    value: 'SALES_DIRECTOR',
  },
];

export const DISPATCH_PRIORITY_OPTIONS: {
  label: string;
  value: DispatchFilterPriority;
}[] = [
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
];

export const DISPATCH_CARRIER_OPTIONS: string[] = [
  'ALL',
  'Blue Dart',
  'Delhivery',
  'DTDC',
];