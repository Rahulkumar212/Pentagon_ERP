import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BalanceType, ChartAccount } from '../../models/finance/chart-account.model';
import { BaseApiService } from '../base-api.service';

@Injectable({
  providedIn: 'root'
})
export class ChartAccountService extends BaseApiService {

  

  /**
   * Create Chart Account
   */
  createChartAccount(
    payload: ChartAccount
  ): Observable<any> {

    return this.http.post(
      `${this.API_URL}/createChartAccount`,
      payload
    );

  }

  /**
   * Get All Chart Accounts
   */
  getChartAccounts(): Observable<any> {

    return this.http.get(
      `${this.API_URL}/getChartAccounts`
    );

  }

  /**
   * Get Chart Account By Id
   */
  getChartAccountById(
    id: string
  ): Observable<any> {

    return this.http.get(
      `${this.API_URL}/getChartAccount/${id}`
    );

  }

 getChartByAccount(balanceType: BalanceType) {

  return this.http.get<ChartAccount[]>(
    `${this.API_URL}/getChartByAccount`,
    {
      params: {
        balanceType
      }
    }
  );

}

  /**
   * Update Chart Account
   */
  updateChartAccount(
    id: string,
    payload: Partial<ChartAccount>
  ): Observable<any> {

    return this.http.patch(
      `${this.API_URL}/updateChartAccount/${id}`,
      payload
    );

  }

  /**
   * Delete Chart Account
   */
  deleteChartAccount(
    id: string
  ): Observable<any> {

    return this.http.delete(
      `${this.API_URL}/deleteChartAccount/${id}`
    );

  }

}