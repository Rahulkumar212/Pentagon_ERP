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
  CreateInstitutionVisitPayload,
  InstitutionVisitListResponse,
  InstitutionVisitResponse
} from '../models/institution-visit.type';

@Injectable({
  providedIn: 'root'
})
export class InstitutionVisitService {

  private readonly http =
    inject(HttpClient);

  private readonly API =
    `${environment.apiUrl}/InstitutionVisit`;

  // ==========================
  // Create Institution Visit
  // ==========================

  createInstitutionVisit(
    payload: CreateInstitutionVisitPayload
  ): Observable<InstitutionVisitResponse> {

    return this.http.post<InstitutionVisitResponse>(
      `${this.API}/create`,
      payload
    );

  }

  // ==========================
  // Fetch All Institution Visits
  // ==========================

  getInstitutionVisits():
    Observable<InstitutionVisitListResponse> {

    return this.http.get<InstitutionVisitListResponse>(
      this.API
    );

  }

  // ==========================
  // Update Institution Visit
  // ==========================

  updateInstitutionVisit(

    id: number | string,

    payload: Partial<CreateInstitutionVisitPayload>

  ): Observable<InstitutionVisitResponse> {

    return this.http.put<InstitutionVisitResponse>(

      `${this.API}/Visitupdate/${id}`,

      payload

    );

  }

  // ==========================
  // Delete Institution Visit
  // ==========================

  deleteInstitutionVisit(

    id: number | string

  ): Observable<InstitutionVisitResponse> {

    return this.http.delete<InstitutionVisitResponse>(

      `${this.API}/delete/${id}`

    );

  }

}