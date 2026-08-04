import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { LedgerTransaction } from '../../models/finance/ledger-transaction.model';
import { BaseApiService } from '../base-api/base-api.service';


@Injectable({
  providedIn: 'root'
})
export class LedgerTransactionService extends BaseApiService{

  
  createLedgerTransaction(
    payload: LedgerTransaction
  ): Observable<any> {

    return this.http.post(
      `${this.API_URL}/createLedgerTransaction`,
      payload
    );

  }

  getLedgerTransactions(): Observable<LedgerTransaction[]> {

    return this.http.get<LedgerTransaction[]>(
      `${this.API_URL}/getLedgerTransactions`
    );

  }

  getLedgerTransactionById(
    id: string
  ): Observable<LedgerTransaction> {

    return this.http.get<LedgerTransaction>(
      `${this.API_URL}/getLedgerTransaction/${id}`
    );

  }

  updateLedgerTransaction(
    id: string,
    payload: LedgerTransaction
  ): Observable<any> {

    return this.http.put(
      `${this.API_URL}/updateLedgerTransaction/${id}`,
      payload
    );

  }

  deleteLedgerTransaction(
    id: string
  ): Observable<any> {

    return this.http.delete(
      `${this.API_URL}/deleteLedgerTransaction/${id}`
    );

  }

}