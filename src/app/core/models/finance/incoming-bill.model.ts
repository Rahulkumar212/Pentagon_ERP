export interface CreateIncomingBillPayload {

  vendor: string;

  dueDate: string;

  costCategory: string;

  invoiceValue: string;

}

export interface UpdateIncomingBillPayload {

  vendor?: string;

  dueDate?: string;

  costCategory?: string;

  invoiceValue?: string;

  status?: 'Paid' | 'Due Soon' | 'Overdue';

  bankAccount?: string;

}

export interface IncomingBill {

  id?: number;

  vendor: string;

  dueDate: string;

  costCategory: string;

  invoiceValue: string;

  createdAt?: string;

  updatedAt?: string;

}


