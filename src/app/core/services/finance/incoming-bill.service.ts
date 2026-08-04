import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api/base-api.service';
import {
  CreateIncomingBillPayload,
  IncomingBill,
  UpdateIncomingBillPayload
} from '../../models/finance/incoming-bill.model';

@Injectable({
  providedIn: 'root'
})
export class IncomingBillService extends BaseApiService {

  createIncomingBill(
    payload: CreateIncomingBillPayload
  ): Observable<IncomingBill> {

    return this.http.post<IncomingBill>(
      `${this.API_URL}/createIncomingBill`,
      payload
    );

  }

  getAllIncomingBills(): Observable<any> {

    return this.http.get<any>(
      `${this.API_URL}/fetchAllIncomingBills`
    );

  }

  getIncomingBillById(
    id: number | string
  ): Observable<IncomingBill> {

    return this.http.get<IncomingBill>(
      `${this.API_URL}/fetchIncomingBillById/${id}`
    );

  }

  updateIncomingBill(
    id: number | string,
    payload: UpdateIncomingBillPayload
  ): Observable<IncomingBill> {

    return this.http.patch<IncomingBill>(
      `${this.API_URL}/updateIncomingBill/${id}`,
      payload
    );

  }

  deleteIncomingBill(
    id: number | string
  ): Observable<any> {

    return this.http.delete<any>(
      `${this.API_URL}/deleteIncomingBill/${id}`
    );

  }

}