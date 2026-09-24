export type StockCategory =
  | 'ALL'
  | 'DISPLAY'
  | 'COMPUTER'
  | 'ACCESSORIES'
  | 'NETWORKING'
  | 'FURNITURE'
  | 'OTHER';


export type StockStatus =
  | 'ALL'
  | 'AVAILABLE'
  | 'LOW_STOCK'
  | 'OUT_OF_STOCK'
  | 'RESERVED';


export type StockCondition =
  | 'ALL'
  | 'NEW'
  | 'GOOD'
  | 'DAMAGED'
  | 'FAULTY';


export interface StockFilterOptions {

  categories: {
    label: string;
    value: StockCategory;
  }[];

  statuses: {
    label: string;
    value: StockStatus;
  }[];

  conditions: {
    label: string;
    value: StockCondition;
  }[];

}


export const STOCK_FILTER_OPTIONS: StockFilterOptions = {

  categories: [
    {
      label: 'All Categories',
      value: 'ALL',
    },
    {
      label: 'Display',
      value: 'DISPLAY',
    },
    {
      label: 'Computer',
      value: 'COMPUTER',
    },
    {
      label: 'Accessories',
      value: 'ACCESSORIES',
    },
    {
      label: 'Networking',
      value: 'NETWORKING',
    },
    {
      label: 'Furniture',
      value: 'FURNITURE',
    },
    {
      label: 'Other',
      value: 'OTHER',
    },
  ],


  statuses: [
    {
      label: 'All Status',
      value: 'ALL',
    },
    {
      label: 'Available',
      value: 'AVAILABLE',
    },
    {
      label: 'Low Stock',
      value: 'LOW_STOCK',
    },
    {
      label: 'Out of Stock',
      value: 'OUT_OF_STOCK',
    },
    {
      label: 'Reserved',
      value: 'RESERVED',
    },
  ],


  conditions: [
    {
      label: 'All Conditions',
      value: 'ALL',
    },
    {
      label: 'New',
      value: 'NEW',
    },
    {
      label: 'Good',
      value: 'GOOD',
    },
    {
      label: 'Damaged',
      value: 'DAMAGED',
    },
    {
      label: 'Faulty',
      value: 'FAULTY',
    },
  ],

};