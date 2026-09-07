import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  CallDiscussion,
  CallDiscussionResponse,
  CallDiscussionSalesVisit
} from '../../../../../core/models/client-crm/call-discussion.type';

import {
  CallDiscussionService
} from '../../../../../core/services/call-discussion.service';

@Component({
  selector: 'app-call-follow-up',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './call-follow-up.component.html'
})
export class CallFollowUpComponent implements OnInit {

  // =====================================================
  // OUTPUT
  // =====================================================

  /**
   * Parent component ko close event bhejne ke liye.
   */
  @Output()
  close = new EventEmitter<void>();


  // =====================================================
  // DATA
  // =====================================================

  /**
   * API se aane wale saare Call Discussions.
   */
  callDiscussions: CallDiscussion[] = [];


  /**
   * Currently selected Call Discussion.
   *
   * Agar kisi particular record ko detail me dikhana ho
   * to isme selected record store hoga.
   */
  selectedCallDiscussion: CallDiscussion | null = null;


  /**
   * Selected Call Discussion ke andar
   * nested Sales Visit data.
   */
  selectedSalesVisit: CallDiscussionSalesVisit | null = null;


  // =====================================================
  // STATES
  // =====================================================

  isLoading = false;

  errorMessage = '';


  // =====================================================
  // SERVICE
  // =====================================================

  private readonly callDiscussionService =
    inject(CallDiscussionService);


  // =====================================================
  // INIT
  // =====================================================

  ngOnInit(): void {
    this.loadCallFollowUps();
  }


  // =====================================================
  // FETCH ALL CALL DISCUSSIONS
  // =====================================================

  loadCallFollowUps(): void {

    this.isLoading = true;
    this.errorMessage = '';

    this.callDiscussionService
      .getAllCallDiscussions()
      .subscribe({

        next: (response: CallDiscussionResponse) => {

          console.log(
            'All Call Follow-up API Response:',
            response
          );

          /**
           * Backend response.data ko array maan rahe hain
           * kyunki endpoint ka naam getAllCallDiscussions hai.
           */
          this.callDiscussions =
            response.data ?? [];

          this.isLoading = false;
        },

        error: (error) => {

          console.error(
            'Failed to load Call Follow-ups:',
            error
          );

          this.callDiscussions = [];

          this.selectedCallDiscussion = null;
          this.selectedSalesVisit = null;

          this.errorMessage =
            'Unable to load Call Follow-up details.';

          this.isLoading = false;
        }

      });
  }


  // =====================================================
  // SELECT CALL FOLLOW-UP
  // =====================================================

  selectCallDiscussion(
    discussion: CallDiscussion
  ): void {

    this.selectedCallDiscussion = discussion;

    this.selectedSalesVisit =
      discussion.salesVisit ?? null;
  }


  // =====================================================
  // CLEAR SELECTION
  // =====================================================

  clearSelection(): void {

    this.selectedCallDiscussion = null;

    this.selectedSalesVisit = null;
  }


  // =====================================================
  // CLOSE
  // =====================================================

  onClose(): void {

    this.close.emit();

  }


  // =====================================================
  // FORMAT DATE
  // =====================================================

  formatDate(
    value: string | null | undefined
  ): string {

    if (!value) {
      return '-';
    }

    return new Date(value).toLocaleDateString(
      'en-IN',
      {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }
    );
  }


  // =====================================================
  // FORMAT DATE TIME
  // =====================================================

  formatDateTime(
    value: string | null | undefined
  ): string {

    if (!value) {
      return '-';
    }

    return new Date(value).toLocaleString(
      'en-IN',
      {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
    );
  }


  // =====================================================
  // FORMAT CURRENCY
  // =====================================================

  formatCurrency(
    value: number | null | undefined
  ): string {

    return new Intl.NumberFormat(
      'en-IN',
      {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }
    ).format(value ?? 0);
  }


  // =====================================================
  // DISPLAY VALUE
  // =====================================================

  displayValue(
    value: unknown
  ): string {

    if (
      value === null ||
      value === undefined ||
      value === ''
    ) {
      return '-';
    }

    return String(value);
  }


  // =====================================================
  // STATUS CLASS
  // =====================================================

  getStatusClass(
    status: string | null | undefined
  ): string {

    switch ((status ?? '').toUpperCase()) {

      case 'APPROVED':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';

      case 'REJECTED':
        return 'bg-red-50 text-red-700 border-red-200';

      case 'PENDING':
        return 'bg-amber-50 text-amber-700 border-amber-200';

      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  }


  // =====================================================
  // TRACK BY
  // =====================================================

  trackById(
    index: number,
    item: CallDiscussion
  ): number {

    return item.id;

  }
}