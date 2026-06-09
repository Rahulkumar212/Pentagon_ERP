import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import {
  Organization,
  OrganizationPayload
} from '../models/client-crm.type';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private http = inject(HttpClient);

  private readonly API_URL =
    `${environment.apiUrl}`;

  constructor() {}

  createOrganization(
    payload: OrganizationPayload
  ): Observable<Organization> {

    return this.http.post<Organization>(
      `${this.API_URL}/createLead`,
      payload
    );
  }

  getOrganizations():
    Observable<Organization[]> {

    return this.http.get<Organization[]>(
      `${this.API_URL}/fetchLeads`
    );
  }

  getOrganizationById(
    id: number
  ): Observable<Organization> {

    return this.http.get<Organization>(
      `${this.API_URL}/${id}`
    );
  }

  updateOrganization(
    id: number,
    payload: OrganizationPayload
  ): Observable<Organization> {

    return this.http.put<Organization>(
      `${this.API_URL}/${id}`,
      payload
    );
  }

  deleteOrganization(
    id: number
  ): Observable<void> {

    return this.http.delete<void>(
      `${this.API_URL}/${id}`
    );
  }
}