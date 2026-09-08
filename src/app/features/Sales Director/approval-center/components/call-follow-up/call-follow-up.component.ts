import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
  templateUrl: './call-follow-up.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallFollowUpComponent implements OnInit {


  // =====================================================
  // OUTPUT
  // =====================================================

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
   */
  selectedCallDiscussion: CallDiscussion | null = null;


  /**
   * Selected Call Discussion ke nested Sales Visit data.
   */
  selectedSalesVisit: CallDiscussionSalesVisit | null = null;


  // =====================================================
  // STATES
  // =====================================================

  errorMessage = '';


  // =====================================================
  // SERVICES
  // =====================================================

  private readonly callDiscussionService =
    inject(CallDiscussionService);


  private readonly cdr =
    inject(ChangeDetectorRef);


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

    this.errorMessage = '';

    this.callDiscussionService
      .getAllCallDiscussions()
      .subscribe({

        // =================================================
        // SUCCESS
        // =================================================

        next: (response: CallDiscussionResponse) => {

          console.log(
            'All Call Follow-up API Response:',
            response
          );


          this.callDiscussions =
            response?.data ?? [];


          // OnPush ke liye UI update
          this.cdr.detectChanges();
        },


        // =================================================
        // ERROR
        // =================================================

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


          // OnPush ke liye UI update
          this.cdr.detectChanges();
        }

      });
  }


  // =====================================================
  // SELECT CALL FOLLOW-UP
  // =====================================================

  selectCallDiscussion(
    discussion: CallDiscussion
  ): void {

    this.selectedCallDiscussion =
      discussion;


    this.selectedSalesVisit =
      discussion.salesVisit ?? null;


    this.cdr.detectChanges();
  }


  // =====================================================
  // CLEAR SELECTION
  // =====================================================

  clearSelection(): void {

    this.selectedCallDiscussion =
      null;


    this.selectedSalesVisit =
      null;


    this.cdr.detectChanges();
  }


  // =====================================================
  // CLOSE COMPONENT
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


    const date = new Date(value);


    if (isNaN(date.getTime())) {
      return '-';
    }


    return date.toLocaleDateString(
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


    const date = new Date(value);


    if (isNaN(date.getTime())) {
      return '-';
    }


    return date.toLocaleString(
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


    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }


    return String(value);
  }


  // =====================================================
  // STATUS CLASS
  // =====================================================

  getStatusClass(
    status: string | null | undefined
  ): string {

    switch (
      (status ?? '').toUpperCase()
    ) {

      case 'APPROVED':

        return `
          bg-emerald-50
          text-emerald-700
          border-emerald-200
        `;


      case 'REJECTED':

        return `
          bg-red-50
          text-red-700
          border-red-200
        `;


      case 'PENDING':

        return `
          bg-amber-50
          text-amber-700
          border-amber-200
        `;


      case 'IN_PROGRESS':

        return `
          bg-blue-50
          text-blue-700
          border-blue-200
        `;


      case 'COMPLETED':

        return `
          bg-emerald-50
          text-emerald-700
          border-emerald-200
        `;


      default:

        return `
          bg-slate-50
          text-slate-700
          border-slate-200
        `;
    }
  }


  // =====================================================
  // TRACK BY
  // =====================================================

  trackById(
    index: number,
    item: CallDiscussion
  ): number | string {

    return item.id ?? index;
  }

}