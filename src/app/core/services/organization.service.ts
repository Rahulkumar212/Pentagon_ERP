import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  SalesVisitPayload,
  SalesVisitResponse
} from '../models/client-crm/sales-visit.type';

import {
  TelecallingPayload,
  TelecallingResponse
} from '../models/client-crm/telecalling.type';

import { BaseApiService } from './base-api/base-api.service';

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
  // FETCH APPROVED SALES VISITS
  // GET /fetch/approved
  // =====================================================
  fetchApprovedSalesVisits(): Observable<SalesVisitResponse> {

    return this.http.get<SalesVisitResponse>(
      `${this.API_URL}/fetch/approved`
    );
  }


  // =====================================================
  // FETCH REJECTED SALES VISITS
  // GET /fetch/reject
  // =====================================================
  fetchRejectedSalesVisits(): Observable<SalesVisitResponse> {

    return this.http.get<SalesVisitResponse>(
      `${this.API_URL}/fetch/reject`
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
  // GET /fetchAllTelecalling
  // =====================================================
  fetchTelecalling(): Observable<TelecallingResponse> {

    return this.http.get<TelecallingResponse>(
      `${this.API_URL}/fetchAllTelecalling`
    );
  }


  // =====================================================
  // FETCH APPROVED TELECALLING
  // GET /getApprovedTelecalling
  // =====================================================
  fetchApprovedTelecalling(): Observable<TelecallingResponse> {

    return this.http.get<TelecallingResponse>(
      `${this.API_URL}/getApprovedTelecalling`
    );
  }


  // =====================================================
// FETCH REJECTED TELECALLING
// GET /getRejectedTelecalling
// =====================================================
fetchRejectedTelecalling(): Observable<TelecallingResponse> {
  return this.http.get<TelecallingResponse>(
    `${this.API_URL}/getRejectedTelecalling`
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


  // =====================================================
  // UPDATE SALES VISIT APPROVAL STATUS
  // PATCH /updateApprovedStatus
  // =====================================================
  updateSalesVisitStatus(
    id: number,
    status: 'APPROVED' | 'REJECTED',
    reason?: string
  ): Observable<SalesVisitResponse> {

    return this.http.patch<SalesVisitResponse>(
      `${this.API_URL}/updateApprovedStatus`,
      {
        id,
        status,
        reason
      }
    );
  }


  getCallDiscussionAndTelecalling(): Observable<any> {
  return this.http.get<any>(
    `${this.API_URL}/getCallDiscussionAndTelecalling`
  );
}

getApprovedSalesVisits(): Observable<any> {
  return this.http.get<any>(
    `${this.API_URL}/getApprovedSalesVisits`
  );
}

  // =====================================================
  // UPDATE TELECALLING
  // PATCH /updateTelecalling/:id
  // =====================================================
  updateTelecalling(
    id: number,
    status: 'APPROVED' | 'REJECTED',
    reason?: string
  ): Observable<TelecallingResponse> {

    return this.http.patch<TelecallingResponse>(
      `${this.API_URL}/updateTelecalling/${id}`,
      {
        status,
        reason
      }
    );
  }

}