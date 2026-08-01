import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApiService } from '../base-api/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService extends BaseApiService {

  /**
   * Fetch All Bank Accounts
   */
  getBankAccounts(): Observable<any> {

    return this.http.get(
      `${this.API_URL}/fetchBankAccounts`
    );

  }

}