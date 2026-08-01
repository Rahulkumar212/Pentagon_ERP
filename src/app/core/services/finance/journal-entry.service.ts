import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { JournalEntry } from '../../models/finance/journal-entry.model';
import { BaseApiService } from '../base-api/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class JournalEntryService extends BaseApiService {

  createJournalEntry(
    payload: FormData
  ): Observable<any> {

    return this.http.post(
      `${this.API_URL}/createJournalEntry`,
      payload
    );

  }

  getJournalEntries(): Observable<any> {

    return this.http.get(
      `${this.API_URL}/fetchJournalEntry`
    );

  }

  getJournalEntryById(
    id: string
  ): Observable<any> {

    return this.http.get(
      `${this.API_URL}/fetchJournalEntry/${id}`
    );

  }

  // ===========================
  // View Journal Attachment
  // ===========================

  viewJournalAttachment(
    id: string
  ): Observable<Blob> {

    return this.http.get(
      `${this.API_URL}/viewJournalAttachment/${1}`,
      {
        responseType: 'blob'
      }
    );

  }

  updateJournalEntry(
    id: string,
    payload: Partial<JournalEntry>
  ): Observable<any> {

    return this.http.patch(
      `${this.API_URL}/updateJournalEntry/${id}`,
      payload
    );

  }

  deleteJournalEntry(
    id: string
  ): Observable<any> {

    return this.http.delete(
      `${this.API_URL}/deleteJournalEntry/${id}`
    );

  }

  getGeneralLedger(): Observable<any> {

    return this.http.get(
      `${this.API_URL}/fetchJournalEntrys`
    );

  }

  getTrialBalance(): Observable<any> {

    return this.http.get(
      `${this.API_URL}/fetchTrialBalance`
    );

  }

}