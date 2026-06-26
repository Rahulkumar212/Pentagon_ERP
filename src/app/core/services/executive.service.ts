import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import {
  DashboardStatsResponse,
  NotificationResponse
} from '../models/executive.type';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  private readonly http = inject(HttpClient);

  private readonly API_URL = `${environment.apiUrl}`;

  // Dashboard Stats
  getStats(): Observable<DashboardStatsResponse> {
    return this.http.get<DashboardStatsResponse>(
      `${this.API_URL}/dashboard/stats`
    );
  }

  // Lead Discussion
  leadDiscussion(
    leadId: number | string,
    payload: any
  ): Observable<any> {
    return this.http.patch(
      `${this.API_URL}/${leadId}/discusion`,
      payload
    );
  }

  convertLead(
  leadId: number | string
) {
  return this.http.patch(
    `${this.API_URL}/${leadId}/converted`,
    {
      outcome: 'Converted'
    }
  );
}

 getNotifications(): Observable<NotificationResponse> {
  return this.http.get<NotificationResponse>(
    `${this.API_URL}/notices`
  );
}
}