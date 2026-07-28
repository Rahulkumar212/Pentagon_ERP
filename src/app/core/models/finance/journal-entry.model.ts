export interface JournalEntry {

  _id?: string;

  voucherNo: string;

  journalDate: string;

  reference: string;

  description: string;

  debitAccount: string;

  creditAccount: string;

  amount: number;

  narration: string;

  attachment?: string;

  createdAt?: string;

  updatedAt?: string;

}



export interface LedgerEntry {

  date: string;

  reference: string;

  account: string;

  description: string;

  debit: number;

  credit: number;

  balance: number;

}



export interface TrialBalance {

  accountCode: string;

  accountName: string;

  debit: number;

  credit: number;

}