import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SalesVisit,
  SalesVisitResponse
} from '../../../../core/models/client-crm/sales-visit.type';

import {
  CallDiscussion,
  CallDiscussionResponse
} from '../../../../core/models/client-crm/call-discussion.type';

import {
  OrganizationService
} from '../../../../core/services/organization.service';

import {
  CallDiscussionFormComponent
} from '../call-discussion-form/call-discussion-form.component';

import {
  CallDiscussionViewComponent
} from '../call-discussion-view/call-discussion-view.component';

import {
  CallDiscussionService
} from '../../../../core/services/call-discussion.service';


@Component({
  selector: 'app-physical-meeting-table',

  standalone: true,

  imports: [
    CommonModule,
    CallDiscussionFormComponent,
    CallDiscussionViewComponent
  ],

  templateUrl: './physical-meeting-table.html'
})
export class PhysicalMeetingTable implements OnInit {


  // =====================================================
  // INPUTS
  // =====================================================

  @Input()
  canEdit = false;


  /**
   * APPROVED
   * REJECTED
   */
  @Input()
fetchType:
  | 'ALL_VISITS'
  | 'APPROVED'
  | 'REJECTED'
  = 'ALL_VISITS';


  // =====================================================
  // STATE
  // =====================================================

  salesVisits: SalesVisit[] = [];


  selectedVisit:
    SalesVisit | null = null;


  selectedDiscussion:
    CallDiscussion | null = null;


  showCallModal = false;


  showViewModal = false;


  // =====================================================
  // SERVICES
  // =====================================================

  private readonly organizationService =
    inject(OrganizationService);


  private readonly callDiscussionService =
    inject(CallDiscussionService);


  private readonly cdr =
    inject(ChangeDetectorRef);


  // =====================================================
  // INIT
  // =====================================================

  ngOnInit(): void {

    this.loadSalesVisits();

  }


  // =====================================================
  // LOAD SALES VISITS
  // =====================================================

 
 loadSalesVisits(): void {

  if (this.fetchType === 'APPROVED') {
    this.loadApprovedSalesVisits();
    return;
  }

  if (this.fetchType === 'REJECTED') {
    this.loadRejectedSalesVisits();
    return;
  }

  // ALL_VISITS
  this.organizationService
    .fetchSalesVisits()
    .subscribe({
      next: (response: SalesVisitResponse) => {
        this.salesVisits = response.data ?? [];
        this.cdr.detectChanges();
      },

      error: (error) => {
        console.error(
          'Failed to load all sales visits:',
          error
        );

        this.salesVisits = [];
        this.cdr.detectChanges();
      }
    });
}

  // =====================================================
  // LOAD APPROVED SALES VISITS
  // =====================================================

  private loadApprovedSalesVisits(): void {

    this.organizationService
      .fetchApprovedSalesVisits()
      .subscribe({

        // =================================================
        // SUCCESS
        // =================================================

        next: (
          response: SalesVisitResponse
        ) => {

          // Backend se status aur data dono aa rahe hain
          this.salesVisits =
            response.data ?? [];


          this.cdr.detectChanges();

        },


        // =================================================
        // ERROR
        // =================================================

        error: (error) => {

          console.error(
            'Failed to load approved sales visits:',
            error
          );

          this.salesVisits = [];

          this.cdr.detectChanges();

        }

      });

  }


  // =====================================================
  // LOAD REJECTED SALES VISITS
  // =====================================================

  private loadRejectedSalesVisits(): void {

    this.organizationService
      .fetchRejectedSalesVisits()
      .subscribe({

        // =================================================
        // SUCCESS
        // =================================================

        next: (
          response: SalesVisitResponse
        ) => {

          // Backend se status, reason aur data aa raha hai
          this.salesVisits =
            response.data ?? [];


          this.cdr.detectChanges();

        },


        // =================================================
        // ERROR
        // =================================================

        error: (error) => {

          console.error(
            'Failed to load rejected sales visits:',
            error
          );

          this.salesVisits = [];

          this.cdr.detectChanges();

        }

      });

  }


  // =====================================================
  // ADD CALL
  // =====================================================

  addCall(
    visit: SalesVisit
  ): void {

    this.selectedVisit =
      visit;

    this.showCallModal =
      true;

  }


  // =====================================================
  // CLOSE CALL MODAL
  // =====================================================

  closeCallModal(): void {

    this.showCallModal =
      false;

    this.selectedVisit =
      null;

  }


  // =====================================================
  // VIEW CALL HISTORY
  // =====================================================

  viewHistory(visit: SalesVisit): void {

  this.callDiscussionService
    .getAllCallDiscussions()
    .subscribe({

      next: (response: CallDiscussionResponse) => {

        console.log(
          'All Call Discussions:',
          response
        );

        const discussions = response.data ?? [];

        /**
         * Current Sales Visit ke liye
         * Call Discussion find kar rahe hain.
         */
        const discussion = discussions.find(
          item => item.sales_visit_id === visit.id
        );

        if (discussion) {

          this.selectedDiscussion = discussion;
          this.showViewModal = true;

        } else {

          this.selectedDiscussion = null;
          this.showViewModal = false;

          console.warn(
            `No call discussion found for Sales Visit ID: ${visit.id}`
          );

        }
      },

      error: (error: any) => {

        console.error(
          'Failed to load call discussion history:',
          error
        );

        this.selectedDiscussion = null;
        this.showViewModal = false;
      }

    });
}


  // =====================================================
  // CLOSE VIEW MODAL
  // =====================================================

  closeViewModal(): void {

    this.showViewModal =
      false;

    this.selectedDiscussion =
      null;

  }


  // =====================================================
  // AFTER CALL UPDATED
  // =====================================================

  onUpdated(): void {

    this.closeCallModal();

    this.loadSalesVisits();

  }

}