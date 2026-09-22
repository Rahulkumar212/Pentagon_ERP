export interface OrderOverviewData {
  month: string;
  orders: number;
  shipments: number;
}

export const ORDER_OVERVIEW_DATA: OrderOverviewData[] = [
  {
    month: 'Apr',
    orders: 168,
    shipments: 142,
  },
  {
    month: 'May',
    orders: 192,
    shipments: 161,
  },
  {
    month: 'Jun',
    orders: 205,
    shipments: 178,
  },
  {
    month: 'Jul',
    orders: 187,
    shipments: 169,
  },
  {
    month: 'Aug',
    orders: 221,
    shipments: 194,
  },
  {
    month: 'Sep',
    orders: 248,
    shipments: 215,
  },
];