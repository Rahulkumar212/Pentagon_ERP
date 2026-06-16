export interface Order {
  id: number;
  purchaseMode: string;
  proposal: string;
  poNumber: string;
  totalAmount: number;
  status: string;
  orderDate: string;

  salesPerson?: {
    name: string;
  };

  clientAccount?: {
    organization_name: string;
  };
}

export interface OrderResponse {
  success: boolean;
  data: Order[];
}
