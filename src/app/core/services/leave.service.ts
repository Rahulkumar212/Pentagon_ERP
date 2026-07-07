import { Injectable, inject } from '@angular/core';

import {
  HttpClient,
  HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';

import {
  Leave,
  CreateLeaveRequest,
  UpdateLeaveRequest,
  ApiResponse
} from '../models/leave.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private readonly http = inject(HttpClient);

  private readonly API_URL = environment.apiUrl;


  createLeave(
    data: CreateLeaveRequest
  ): Observable<ApiResponse<Leave>> {

    return this.http.post<ApiResponse<Leave>>(
      `${this.API_URL}/createLeave`,
      data
    );

  }


  getLeaves(): Observable<ApiResponse<Leave[]>> {

    return this.http.get<ApiResponse<Leave[]>>(
      `${this.API_URL}/fetchLeave`
    );

  }

  getLeaveById(
    id: number
  ): Observable<ApiResponse<Leave>> {

    return this.http.get<ApiResponse<Leave>>(
      `${this.API_URL}/fetchLeave/${id}`
    );

  }

  getLeaveApplicants(): Observable<ApiResponse<Leave[]>> {

  return this.http.get<ApiResponse<Leave[]>>(
    `${this.API_URL}/fetchsLeave`
  );

}



  updateLeave(
    id: number,
    data: UpdateLeaveRequest
  ): Observable<ApiResponse<Leave>> {

    return this.http.patch<ApiResponse<Leave>>(
      `${this.API_URL}/updateLeave/${id}`,
      data
    );

  }

  deleteLeave(
    id: number
  ): Observable<ApiResponse<void>> {

    return this.http.delete<ApiResponse<void>>(
      `${this.API_URL}/deleteLeave/${id}`
    );

  }

  getLeaveByDate(
    fromDate: string,
    toDate: string
  ): Observable<ApiResponse<Leave[]>> {

    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate);

    return this.http.get<ApiResponse<Leave[]>>(
      `${this.API_URL}/fetchLeaveByDate`,
      {
        params
      }
    );

  }

}