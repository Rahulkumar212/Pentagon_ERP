export type BalanceType = 'Debit' | 'Credit';

export interface ChartAccount {

  id: number;

  code: string;

  accountName: string;

  classification: string;

  subClassification: string;

  balanceType: 'Debit' | 'Credit';

  openingBalance: number;

  status: 'Active' | 'Inactive';

  description: string;

  createdAt?: string;

  updatedAt?: string;

}