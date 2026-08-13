import {
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs';

import {
  SalesVisitPayload,
  SalesVisitResponse
} from '../models/client-crm/sales-visit.type';

import {
  TelecallingPayload,
  TelecallingResponse
} from '../models/client-crm/telecalling.type';

import {
  BaseApiService
} from './base-api/base-api.service';


@Injectable({
  providedIn: 'root'
})
export class OrganizationService extends BaseApiService {

  // =====================================================
  // CREATE SALES PHYSICAL MEETING
  // POST /createSalesVisit
  // =====================================================

  createSalesVisit(
    payload: SalesVisitPayload
  ): Observable<SalesVisitResponse> {

    return this.http.post<SalesVisitResponse>(
      `${this.API_URL}/createSalesVisit`,
      payload
    );
  }


  // =====================================================
  // FETCH SALES PHYSICAL MEETINGS
  // GET /fetchSalesVisits
  // =====================================================

  fetchSalesVisits(): Observable<SalesVisitResponse> {

    return this.http.get<SalesVisitResponse>(
      `${this.API_URL}/fetchSalesVisits`
    );
  }


  // =====================================================
  // CREATE TELECALLING
  // POST /createTelecalling
  // =====================================================

  createTelecalling(
    payload: TelecallingPayload
  ): Observable<TelecallingResponse> {

    return this.http.post<TelecallingResponse>(
      `${this.API_URL}/createTelecalling`,
      payload
    );
  }


  // =====================================================
  // FETCH TELECALLING
  // GET /fetchTelecalling
  // =====================================================

  fetchTelecalling(): Observable<TelecallingResponse> {

    return this.http.get<TelecallingResponse>(
      `${this.API_URL}/fetchAllTelecalling`
    );
  }


  // =====================================================
  // FETCH CLIENT NAMES
  // GET /fetchclientname
  // =====================================================

  fetchClientName(): Observable<any> {

    return this.http.get<any>(
      `${this.API_URL}/fetchclientname`
    );
  }

}