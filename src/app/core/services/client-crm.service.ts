import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import {
  SalesVisit,
  SalesVisitPayload,
  SalesVisitResponse,
  UpdateSalesVisitPayload
} from '../models/client-crm.type';

@Injectable({
  providedIn: 'root'
})
export class ClientCrmService {

  private readonly http = inject(HttpClient);

  private readonly API_URL = `${environment.apiUrl}`;

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