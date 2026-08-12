import {
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs';

import {
  SalesVisit,
  SalesVisitResponse,
  UpdateSalesVisitPayload,
  SalesVisitPayload
} from '../models/client-crm/sales-visit.type';



import {
  TelecallingPayload
} from '../models/client-crm/telecalling.type';

import {
  BaseApiService
} from './base-api/base-api.service';
import { CallDiscussionPayload, CallDiscussionResponse } from '../models/client-crm/call-discussion.type';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService extends BaseApiService {

  // =====================================================
  // CREATE SALES VISIT / TELECALLING
  // =====================================================

 createSalesVisit(
  payload: SalesVisitPayload | TelecallingPayload
): Observable<SalesVisit> {

  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {

    if (key === 'meeting_photo') {

      if (value instanceof File) {
        formData.append('meeting_photo', value);
      }

      return;
    }

    if (value !== null && value !== undefined) {
      formData.append(key, String(value));
    }
  });

  return this.http.post<SalesVisit>(
    `${this.API_URL}/create`,
    formData
  );
}

  // =====================================================
  // GET SALES VISITS
  // =====================================================

  getSalesVisits(): Observable<SalesVisitResponse> {

    return this.http.get<SalesVisitResponse>(
      `${this.API_URL}/fetchLeads`
    );
  }

  // =====================================================
  // GET SALES VISIT BY ID
  // =====================================================

  getSalesVisitById(
    id: number
  ): Observable<SalesVisit> {

    return this.http.get<SalesVisit>(
      `${this.API_URL}/${id}`
    );
  }

  // =====================================================
  // UPDATE SALES VISIT
  // =====================================================

  updateSalesVisit(
    id: number,
    payload: UpdateSalesVisitPayload
  ): Observable<SalesVisit> {

    return this.http.put<SalesVisit>(
      `${this.API_URL}/update/${id}`,
      payload
    );
  }

  // =====================================================
  // CALL DISCUSSION
  // =====================================================

  saveCallDiscussion(
    visitId: number,
    payload: CallDiscussionPayload
  ): Observable<unknown> {

    return this.http.post(
      `${this.API_URL}/call-discussion/${visitId}`,
      payload
    );
  }

  // =====================================================
  // CALL DISCUSSION HISTORY
  // =====================================================

  getCallDiscussionHistory(
  salesVisitId: number
): Observable<CallDiscussionResponse> {

  return this.http.get<CallDiscussionResponse>(
    `${this.API_URL}/sales-visits/${salesVisitId}/call-discussions`
  );

}

  // =====================================================
  // DELETE
  // =====================================================

  deleteSalesVisit(
    id: number
  ): Observable<void> {

    return this.http.delete<void>(
      `${this.API_URL}/${id}`
    );
  }
}