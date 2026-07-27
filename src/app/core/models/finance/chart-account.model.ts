export interface ChartAccount {

  _id?: string;

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