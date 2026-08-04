export interface InvoiceItem {

  description: string;

  quantity: number;

  price: number;

}

export interface CreateInvoicePayload {

  invoiceId: string;

  customer: string;

  dueDate: string;

  totalAmount: number;

  items: InvoiceItem[];

}

export interface UpdateInvoicePayload {

  status: 'Draft' | 'Outstanding' | 'Paid' | 'Overdue';

  bankAccount: string;

}

export interface Invoice {

   id: number;
   
  invoiceId: string;

  customer: string;

  dueDate: string;

  totalAmount: number;

  status: 'Draft' | 'Outstanding' | 'Paid' | 'Overdue';

  items: InvoiceItem[];

  createdAt?: string;

  updatedAt?: string;

}