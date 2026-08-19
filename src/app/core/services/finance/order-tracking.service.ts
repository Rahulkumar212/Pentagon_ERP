import {
    Injectable
} from '@angular/core';

import {
    Observable
} from 'rxjs';

import {
    Order,
    CreateOrderPayload
} from '../../models/finance/order-tracking.model';

import {
    BaseApiService
} from '../base-api/base-api.service';


@Injectable({
    providedIn: 'root'
})
export class OrderTrackingService
    extends BaseApiService {


    // =====================================================
    // CREATE ORDER
    // =====================================================

    createOrder(
        payload: CreateOrderPayload
    ): Observable<Order> {

        return this.http.post<Order>(
            `${this.API_URL}/orderCreate`,
            payload
        );

    }


    // =====================================================
    // FETCH ORDERS
    // =====================================================

    fetchOrders(): Observable<Order[]> {

        return this.http.get<Order[]>(
            `${this.API_URL}/fetchOrders`
        );

    }


    // =====================================================
    // DELETE ORDER
    // =====================================================

    deleteOrder(
        id: number
    ): Observable<void> {

        return this.http.delete<void>(
            `${this.API_URL}/deleteOrder/${id}`
        );

    }

}