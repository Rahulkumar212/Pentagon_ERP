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
  environment
} from '../../../environments/environment';

import {
  CallDiscussionPayload,
  CallDiscussionResponse,
  SalesVisit,
  SalesVisitPayload,
  SalesVisitResponse,
  UpdateSalesVisitPayload
} from '../models/client-crm.type';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private readonly http = inject(HttpClient);

  private readonly API_URL = environment.apiUrl;

  createSalesVisit(
    payload: SalesVisitPayload
  ): Observable<SalesVisit> {

    return this.http.post<SalesVisit>(
      `${this.API_URL}/create`,
      payload
    );
  }

  getSalesVisits(): Observable<SalesVisitResponse> {

    return this.http.get<SalesVisitResponse>(
      `${this.API_URL}/fetchLeads`
    );
  }

  getSalesVisitById(
    id: number
  ): Observable<SalesVisit> {

    return this.http.get<SalesVisit>(
      `${this.API_URL}/${id}`
    );
  }

  updateSalesVisit(
    id: number,
    payload: UpdateSalesVisitPayload
  ): Observable<SalesVisit> {

    return this.http.put<SalesVisit>(
      `${this.API_URL}/update/${id}`,
      payload
    );
  }

  saveCallDiscussion(
  visitId: number,
  payload: CallDiscussionPayload
): Observable<CallDiscussionResponse> {

  return this.http.post<CallDiscussionResponse>(
    `${this.API_URL}/call-discussion/${visitId}`,
    payload
  );

}


getCallDiscussionHistory(
  salesVisitId: number
) {

  return this.http.get<CallDiscussionResponse>(
    `${this.API_URL}/sales-visits/${salesVisitId}/call-discussions`
  );

}


  

  deleteSalesVisit(
    id: number
  ): Observable<void> {

    return this.http.delete<void>(
      `${this.API_URL}/${id}`
    );
  }
}