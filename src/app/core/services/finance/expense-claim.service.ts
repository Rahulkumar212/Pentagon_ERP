import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  ExpenseClaimResponse,
  ExpenseClaimListResponse,
  CreateExpenseClaimRequest,
  UpdateExpenseClaimRequest,
  DeleteExpenseClaimResponse,
} from '../../models/finance/expense-claim.model';
import { BaseApiService } from '../base-api/base-api.service';

@Injectable({
  providedIn: 'root',
})
export class ExpenseClaimService extends BaseApiService {

  /**
   * Create Expense Claim
   * POST /createExpenseClaim
   */
  createExpenseClaim(
    payload: CreateExpenseClaimRequest
  ): Observable<ExpenseClaimResponse> {
    return this.http.post<ExpenseClaimResponse>(
      `${this.API_URL}/createExpenseClaim`,  
      payload
    );
  }

  /**
   * Get All Expense Claims
   * GET /fetchAllExpenseClaims
   */
  fetchAllExpenseClaims(): Observable<ExpenseClaimListResponse> {
    return this.http.get<ExpenseClaimListResponse>(
      `${this.API_URL}/fetchAllExpenseClaims`
    );
  }

  /**
   * Get Expense Claim By Id
   * GET /fetchExpenseClaim/:id
   */
  fetchExpenseClaimById(
    id: number
  ): Observable<ExpenseClaimResponse> {
    return this.http.get<ExpenseClaimResponse>(
      `${this.API_URL}/fetchExpenseClaim/${id}`
    );
  }

  /**
   * Update Expense Claim
   * PATCH /updateExpenseClaim/:id
   */
  updateExpenseClaim(
    id: number,
    payload: UpdateExpenseClaimRequest
  ): Observable<ExpenseClaimResponse> {
    return this.http.patch<ExpenseClaimResponse>(
      `${this.API_URL}/updateExpenseClaim/${id}`,
      payload
    );
  }

  /**
   * Delete Expense Claim
   * DELETE /deleteExpenseClaim
   */
  deleteExpenseClaim(
    id: number
  ): Observable<DeleteExpenseClaimResponse> {
    return this.http.delete<DeleteExpenseClaimResponse>(
      `${this.API_URL}/deleteExpenseClaim`,
      {
        body: { id },
      }
    );
  }
}