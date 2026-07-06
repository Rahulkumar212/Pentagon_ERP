import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';

import {
  Notice,
  CreateNoticeRequest,
  NoticeResponse
} from '../models/notice.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private readonly http = inject(HttpClient);

  private readonly API_URL = environment.apiUrl;

  getNotices(): Observable<NoticeResponse> {

  return this.http.get<NoticeResponse>(
    `${this.API_URL}/notices`
  );

}
  createNotice(
    data: CreateNoticeRequest
  ): Observable<Notice> {

    return this.http.post<Notice>(
      `${this.API_URL}/notice/createNotice`,
      data
    );

  }

  deleteNotice(id: string): Observable<void> {

    return this.http.delete<void>(
      `${this.API_URL}/notice/${id}`
    );

  }

  getNoticeByType(
    type: string
  ): Observable<Notice[]> {

    const params = new HttpParams()
      .set('type', type);

    return this.http.get<Notice[]>(
      `${this.API_URL}/notice/filter`,
      { params }
    );

  }

}