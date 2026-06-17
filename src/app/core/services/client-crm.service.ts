import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import {
  LeadResponse
} from '../models/client-crm.type';

import {
  OrderResponse
} from '../../features/orders/models/order.type';

@Injectable({
  providedIn: 'root',
})
export class ClientCrmService {

  private readonly http = inject(HttpClient);

  private readonly API_URL = environment.apiUrl;

  // Get Converted Client Accounts
  getConvertedLeads(): Observable<LeadResponse> {
    return this.http.get<LeadResponse>(
      `${this.API_URL}/account`
    );
  }

  // Create Order
  createOrder(payload: any): Observable<any> {
    return this.http.post(
      `${this.API_URL}/createOrder`,
      payload
    );
  }

  // Get Orders
  getOrders(): Observable<OrderResponse> {
    return this.http.get<OrderResponse>(
      `${this.API_URL}/fetchOrders`
    );
  }

}