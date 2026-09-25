
export type ReportType =
  | 'ALL'
  | 'INVENTORY'
  | 'STOCK_MOVEMENT'
  | 'ORDERS'
  | 'DELIVERIES'
  | 'DELAYED_SHIPMENTS';

export type ReportStatus =
  | 'ALL'
  | 'COMPLETED'
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'DELAYED'
  | 'CANCELLED';

export interface ReportFilters {
  search: string;
  reportType: ReportType;
  status: ReportStatus;
  fromDate: string;
  toDate: string;
}

export const DEFAULT_REPORT_FILTERS: ReportFilters = {
  search: '',
  reportType: 'ALL',
  status: 'ALL',
  fromDate: '',
  toDate: '',
};

