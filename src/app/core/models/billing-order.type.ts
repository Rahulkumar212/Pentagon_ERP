export interface BillingOrder {

  id: string;

  date: string;

  particulars: string;

  item_details: string;

  taxable_amount: number;

  support_of: string;

  monthly_business: number;

}

export interface CreateBillingOrderPayload {

  date: string;

  particulars: string;

  item_details: string;

  taxable_amount: number;

  support_of: string;

  monthly_business: number;

}

export interface UpdateBillingOrderPayload {

  date?: string;

  particulars?: string;

  item_details?: string;

  taxable_amount?: number;

  support_of?: string;

  quarterly_business?: number;

}

export interface BillingOrderResponse {

  success: boolean;

  message: string;

  data: BillingOrder[];

}

export interface BillingResponse {

  success: boolean;

  message: string;

  data: BillingOrder;

}