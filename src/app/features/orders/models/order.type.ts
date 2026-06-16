export interface Order {

  id: number;

  purchaseMode: string;

  proposal: string;

  poNumber: string | null;

  orderDate: string;

  status: string;

  totalAmount: number;

  shippingAddress: string;

  salesPerson?: {
    name: string;
  };

  clientAccount?: {
    organization_name: string;
  };

}

export interface OrderResponse {

  success: boolean;

  message: string;

  data: Order[];

}