import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';

import {
  ApiResponse,
  DashboardOverview
} from '../models/stats.model';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private readonly http = inject(HttpClient);

  private readonly API_URL = environment.apiUrl;

  // =========================
  // Dashboard Overview
  // =========================

  getDashboardOverview(): Observable<ApiResponse<DashboardOverview>> {

    return this.http.get<ApiResponse<DashboardOverview>>(
      `${this.API_URL}/dashboard/leave-stats`
    );

  }

}