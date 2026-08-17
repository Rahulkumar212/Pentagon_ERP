import {
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs';

import {
  CallDiscussionPayload,
  CallDiscussionResponse
} from '../models/client-crm/call-discussion.type';

import {
  BaseApiService
} from './base-api/base-api.service';


@Injectable({
  providedIn: 'root'
})
export class CallDiscussionService
  extends BaseApiService {

  // =====================================================
  // CREATE CALL DISCUSSION
  // =====================================================

  createCallDiscussion(
    payload: CallDiscussionPayload
  ): Observable<CallDiscussionResponse> {

    return this.http.post<CallDiscussionResponse>(
      `${this.API_URL}/createCallDiscussion`,
      payload
    );

  }


  // =====================================================
  // GET CALL DISCUSSION HISTORY
  // =====================================================

  getCallDiscussionHistory(
    salesVisitId: number
  ): Observable<CallDiscussionResponse> {

    return this.http.get<CallDiscussionResponse>(
      `${this.API_URL}/call-discussion/${salesVisitId}`
    );

  }

}