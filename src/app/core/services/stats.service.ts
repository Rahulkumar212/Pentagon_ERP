import { Injectable} from '@angular/core';

import { Observable } from 'rxjs';


import {
  ApiResponse,
  DashboardOverview
} from '../models/stats.model';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService extends BaseApiService{


  // =========================
  // Dashboard Overview
  // =========================

  getDashboardOverview(): Observable<ApiResponse<DashboardOverview>> {

    return this.http.get<ApiResponse<DashboardOverview>>(
      `${this.API_URL}/dashboard/leave-stats`
    );

  }

}