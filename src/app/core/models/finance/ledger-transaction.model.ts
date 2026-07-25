export interface LedgerTransaction {

  id: number;

  transactionId: string;

  date: string;

  type: 'credit' | 'debit';

  description: string;

  category: string;

  amount: number;

  account: string;

  createdAt?: string;

  updatedAt?: string;

}