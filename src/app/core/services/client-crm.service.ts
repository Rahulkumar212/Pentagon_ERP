import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

import {
  SalesVisit,
  SalesVisitPayload,
  SalesVisitResponse,
  UpdateSalesVisitPayload
} from '../models/client-crm.type';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientCrmService extends BaseApiService {


  // ✅ CREATE SALES VISIT
  createSalesVisit(payload: SalesVisitPayload): Observable<SalesVisit> {
    return this.http.post<SalesVisit>(
      `${this.API_URL}/createSalesVisit`,
      payload
    );
  }

  // ✅ GET SALES VISITS (FIXED)
  getSalesVisits(): Observable<SalesVisitResponse> {
    return this.http.get<SalesVisitResponse>(
      `${this.API_URL}/my-visits`
    );
  }



  // ✅ GET SALES VISITS (FIXED)
  getSalesAllVisits(): Observable<SalesVisitResponse> {
    return this.http.get<SalesVisitResponse>(
      `${this.API_URL}/get`
    );
  }

 updateSalesVisit(
  id: number,
  payload: UpdateSalesVisitPayload
) {
  return this.http.put(
    `${this.API_URL}/update/${id}`,
    payload
  );
}

getConvertedSalesVisits(): Observable<SalesVisitResponse> {

  return this.http.get<SalesVisitResponse>(
    `${this.API_URL}/convert`
  );

}

getFailedSalesVisits(): Observable<SalesVisitResponse> {

  return this.http.get<SalesVisitResponse>(
    `${this.API_URL}/failed`
  );

}
}