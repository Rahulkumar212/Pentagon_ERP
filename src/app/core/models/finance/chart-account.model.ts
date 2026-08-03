export type BalanceType = 'Debit' | 'Credit';

export type AccountType =
  | 'Bank'
  | 'Cash'
  | 'Customer'
  | 'Vendor'
  | 'Expense'
  | 'Revenue'
  | 'Asset'
  | 'Liability'
  | 'Equity'
  | 'Tax'
  | 'Loan'
  | 'Other';

export type OwnerType =
  | 'Company'
  | 'Customer'
  | 'Vendor'
  | 'Employee'
  | 'Government'
  | 'Other';

export interface ChartAccount {

  id: number;

  code: string;

  accountName: string;

  classification: string;

  subClassification: string;

  accountType: AccountType;

  ownerType: OwnerType;

  normalBalance: BalanceType;

  openingBalance: number;

  status: 'Active' | 'Inactive';

  description: string;

  createdAt?: string;

  updatedAt?: string;

}