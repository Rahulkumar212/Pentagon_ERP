import { Injectable} from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  Notice,
  CreateNoticeRequest,
  NoticeResponse
} from '../models/notice.model';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends BaseApiService {


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