export interface OrderItem {
  description: string;
  quantity: number;
  unitPrice: number;
}

export type DeliveryStage =
  | 'PENDING'
  | 'IN_PRODUCTION'
  | 'DISPATCHED'
  | 'DELIVERED'
  | 'CANCELLED';

export type PaymentStatus =
  | 'ALL'
  | 'PAID'
  | 'PARTIALLY_PAID'
  | 'UNPAID';

export type PaymentTransactionStatus =
  | 'SUCCESS'
  | 'PENDING'
  | 'FAILED';

export type SortBy =
  | 'NEWEST'
  | 'OLDEST'
  | 'AMOUNT_HIGH'
  | 'AMOUNT_LOW';

export type ViewMode =
  | 'LIST'
  | 'GRID';

export interface OrderFilterState {
  search: string;
  paymentStatus: PaymentStatus;
  deliveryStage: DeliveryStage | 'ALL';
  sortBy: SortBy;
  viewMode: ViewMode;
}

export interface Order {
  id: number;
  orderNumber: string;
  customerName: string;
  phone: string;
  email: string;
  orderDate: string;
  deliveryTargetDate: string;
  deliveryStage: DeliveryStage;
  items: OrderItem[];
  totalAmount: number;
  receivedAmount: number;
  balanceDue: number;
  termsAndNotes?: string;
  paymentCount?: number;
}

export interface PaymentHistory {
  id: number;
  orderId?: number;
  paymentDate: string;
  amount: number;
  paymentMode: string;
  transactionReference?: string;
  status: PaymentTransactionStatus;
  remarks?: string;
}