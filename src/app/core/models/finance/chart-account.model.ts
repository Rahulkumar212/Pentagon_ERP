export type BalanceType = 'Debit' | 'Credit';

export interface ChartAccount {

  _id?: string;

  code: string;

  accountName: string;

  classification: string;

  subClassification: string;

  balanceType: BalanceType;

  openingBalance: number;

  status: 'Active' | 'Inactive';

  description: string;

  createdAt?: string;

  updatedAt?: string;

}