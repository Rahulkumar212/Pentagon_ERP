import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderResponse } from '../../features/orders/models/order.type';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private http = inject(HttpClient);

  getOrders(): Observable<OrderResponse> {
    return this.http.get<OrderResponse>('http://localhost:5000/orders');
  }
}
