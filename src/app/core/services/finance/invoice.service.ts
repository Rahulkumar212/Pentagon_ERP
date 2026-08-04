import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api/base-api.service';
import {
  CreateInvoicePayload,
  Invoice,
  UpdateInvoicePayload
} from '../../models/finance/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService extends BaseApiService {

  createInvoice(
    payload: CreateInvoicePayload
  ): Observable<Invoice> {

    return this.http.post<Invoice>(
      `${this.API_URL}/createInvoiceItem`,
      payload
    );

  }

  getAllInvoices(): Observable<any> {

    return this.http.get<any>(
      `${this.API_URL}/fetchAllInvoiceItem`
    );

  }

  updateInvoice(
    id: number | string,
    payload: UpdateInvoicePayload
  ): Observable<Invoice> {

    return this.http.patch<Invoice>(
      `${this.API_URL}/updateInvoiceItem/${id}`,
      payload
    );

  }

}