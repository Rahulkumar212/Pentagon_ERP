import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApiService } from '../base-api.service';
import {
  CreateInvoicePayload,
  Invoice
} from '../../models/finance/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService extends BaseApiService {

  createInvoice(
    payload: CreateInvoicePayload
  ): Observable<any> {

    return this.http.post(
      `${this.API_URL}/createInvoiceItem`,
      payload
    );

  }

  getAllInvoices(): Observable<any> {

    return this.http.get(
      `${this.API_URL}/fetchAllInvoiceItem`
    );

  }

}