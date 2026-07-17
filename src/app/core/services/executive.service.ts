import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

import {
  DashboardStatsResponse,
  NotificationResponse
} from '../models/executive.type';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})

export class DashboardService extends BaseApiService {


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