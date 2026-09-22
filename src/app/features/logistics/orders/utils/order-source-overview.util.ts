export type OrderSource =
  | 'SALES'
  | 'GEM'
  | 'SALES_DIRECTOR';

export interface OrderSourceOverview {
  source: OrderSource;
  label: string;
  description: string;
  totalOrders: number;
  newOrders: number;
  processing: number;
  readyForDispatch: number;
  dispatched: number;
  inTransit: number;
  delivered: number;
  delayed: number;
  icon: string;
}

export const ORDER_SOURCE_OVERVIEW: OrderSourceOverview[] = [
  {
    source: 'SALES',
    label: 'Sales',
    description: 'Orders received from Sales',
    totalOrders: 112,
    newOrders: 8,
    processing: 19,
    readyForDispatch: 13,
    dispatched: 15,
    inTransit: 14,
    delivered: 40,
    delayed: 3,
    icon: '💼',
  },

  {
    source: 'GEM',
    label: 'GEM',
    description: 'Government e-Marketplace orders',
    totalOrders: 86,
    newOrders: 6,
    processing: 14,
    readyForDispatch: 9,
    dispatched: 10,
    inTransit: 11,
    delivered: 34,
    delayed: 2,
    icon: '🏛️',
  },

  {
    source: 'SALES_DIRECTOR',
    label: 'Sales Director',
    description: 'Orders received from Sales Director',
    totalOrders: 50,
    newOrders: 4,
    processing: 9,
    readyForDispatch: 5,
    dispatched: 5,
    inTransit: 6,
    delivered: 25,
    delayed: 1,
    icon: '👤',
  },
];