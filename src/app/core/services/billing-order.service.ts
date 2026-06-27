import {
  Injectable,
  inject
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  BillingOrderResponse,
  BillingResponse,
  CreateBillingOrderPayload,
  UpdateBillingOrderPayload
} from '../models/billing-order.type';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BillingOrderService {

  private readonly http =
    inject(HttpClient);

  private readonly API = `${environment.apiUrl}`;
   
  createBilling(

    payload: CreateBillingOrderPayload

  ): Observable<BillingResponse> {

    return this.http.post<BillingResponse>(

      `${this.API}/billing/create`,

      payload

    );

  }

  // ===========================
  // Get All Billings
  // ===========================

  getBillings(): Observable<BillingOrderResponse> {

    return this.http.get<BillingOrderResponse>(

      `${this.API}/fetchBillings`

    );

  }

  // ===========================
  // Update Billing
  // ===========================

  updateBilling(

    id: string,

    payload: UpdateBillingOrderPayload

  ): Observable<BillingResponse> {

    return this.http.put<BillingResponse>(

      `${this.API}/updates/${id}`,

      payload

    );

  }

}