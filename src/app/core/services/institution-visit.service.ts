import {
  Injectable
} from '@angular/core';


import {
  Observable
} from 'rxjs';


import {
  CreateInstitutionVisitPayload,
  InstitutionVisitListResponse,
  InstitutionVisitResponse
} from '../models/institution-visit.type';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class InstitutionVisitService extends BaseApiService {

 

  // ==========================
  // Create Institution Visit
  // ==========================

  createInstitutionVisit(
    payload: CreateInstitutionVisitPayload
  ): Observable<InstitutionVisitResponse> {

    return this.http.post<InstitutionVisitResponse>(
      `${this.API_URL}/InstitutionVisit/create`,
      payload
    );

  }

  // ==========================
  // Fetch All Institution Visits
  // ==========================

  getInstitutionVisits():
    Observable<InstitutionVisitListResponse> {

    return this.http.get<InstitutionVisitListResponse>(
      `${this.API_URL}/InstitutionVisit`
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

      `${this.API_URL}/InstitutionVisit/Visitupdate/${id}`,

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

      `${this.API_URL}/InstitutionVisit/delete/${id}`

    );

  }

}