import {
  Injectable
} from '@angular/core';


import {
  Observable
} from 'rxjs';

import {
  BillingOrderResponse,
  BillingResponse,
  CreateBillingOrderPayload,
  UpdateBillingOrderPayload
} from '../models/billing-order.type';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class BillingOrderService extends BaseApiService {

   
  createBilling(

    payload: CreateBillingOrderPayload

  ): Observable<BillingResponse> {

    return this.http.post<BillingResponse>(

      `${this.API_URL}/billing/create`,

      payload

    );

  }

  // ===========================
  // Get All Billings
  // ===========================

  getBillings(): Observable<BillingOrderResponse> {

    return this.http.get<BillingOrderResponse>(

      `${this.API_URL}/fetchBillings`

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

      `${this.API_URL}/updates/${id}`,

      payload

    );

  }

}