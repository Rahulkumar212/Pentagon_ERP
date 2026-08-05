// expense-claim.model.ts

export interface ExpenseClaim {
  id: number;
  claimId: string;
  employee: string;
  category: string;
  date: string;
  amount: number;
  status: string;
  workflow?: string | null;
  description: string;
  decision?: string | null;
  remarks?: string | null;
}

export interface CreateExpenseClaimRequest {
  employee: string;
  category: string;
  date: string;
  amount: number;
  description: string;
  workflow?: string;
}

export interface UpdateExpenseClaimRequest {
  employee?: string;
  category?: string;
  date?: string;
  amount?: number;
  status?: string;
  workflow?: string;
  description?: string;
  decision?: string;
  remarks?: string;
}

export interface ExpenseClaimResponse {
  success: boolean;
  message: string;
  data: ExpenseClaim;
}

export interface ExpenseClaimListResponse {
  success: boolean;
  message: string;
  data: ExpenseClaim[];
}

export interface DeleteExpenseClaimResponse {
  success: boolean;
  message: string;
}