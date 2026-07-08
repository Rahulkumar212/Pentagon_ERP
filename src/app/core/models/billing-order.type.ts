export interface BillingOrder {

  id: string;

  // Billing Information
  date: string;
  particulars: string;
  item_details: string;
  taxable_amount: number;
  business_value: number;

  // Customer
  customer_name: string;

  // Customer Contact (Purchase Order)
  po_contact_name: string;
  po_contact_email: string;
  po_contact_phone: string;

  // Billing Contact
  billing_contact_name: string;
  billing_contact_email: string;
  billing_contact_phone: string;

  // Invoice Recipient
  recipient_name: string;
  recipient_email: string;
  recipient_phone: string;

  // Accounts / Payment Contact
  accounts_phone: string;

  // Project Execution Contact
  execution_phone: string;

  // Post Implementation Support Contact
  support_phone: string;

  // Partner / Support Reference
  support_name: string;
  support_contact_phone: string;

}

export interface CreateBillingOrderPayload {

  // Billing Information
  date: string;
  particulars: string;
  item_details: string;
  taxable_amount: number;
  business_value: number;

  // Customer
  customer_name: string;

  // Customer Contact (Purchase Order)
  po_contact_name: string;
  po_contact_email: string;
  po_contact_phone: string;

  // Billing Contact
  billing_contact_name: string;
  billing_contact_email: string;
  billing_contact_phone: string;

  // Invoice Recipient
  recipient_name: string;
  recipient_email: string;
  recipient_phone: string;

  // Accounts / Payment Contact
  accounts_phone: string;

  // Project Execution Contact
  execution_phone: string;

  // Post Implementation Support Contact
  support_phone: string;

  // Partner / Support Reference
  support_name: string;
  support_contact_phone: string;

}

export interface UpdateBillingOrderPayload {

  date?: string;
  particulars?: string;
  item_details?: string;
  taxable_amount?: number;
  business_value?: number;

  customer_name?: string;

  po_contact_name?: string;
  po_contact_email?: string;
  po_contact_phone?: string;

  billing_contact_name?: string;
  billing_contact_email?: string;
  billing_contact_phone?: string;

  recipient_name?: string;
  recipient_email?: string;
  recipient_phone?: string;

  accounts_phone?: string;

  execution_phone?: string;

  support_phone?: string;

  support_name?: string;
  support_contact_phone?: string;

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