import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { LeadResponse } from '../models/client-crm.type';

@Injectable({
  providedIn: 'root'
})
export class ClientCrmService {

  private readonly http = inject(HttpClient);

  private readonly API_URL = environment.apiUrl;

  getConvertedLeads(): Observable<LeadResponse> {

    return this.http.get<LeadResponse>(
      `${this.API_URL}/account`
    );

  }

}