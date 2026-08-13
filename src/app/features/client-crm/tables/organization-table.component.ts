import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  SalesVisit,
  SalesVisitResponse
} from '../../../core/models/client-crm/sales-visit.type';

import {
  CallDiscussion,
  CallDiscussionResponse
} from '../../../core/models/client-crm/call-discussion.type';

import {
  OrganizationService
} from '../../../core/services/organization.service';

import {
  CallDiscussionFormComponent
} from './call-discussion-form/call-discussion-form.component';

import {
  CallDiscussionViewComponent
} from './call-discussion-view/call-discussion-view.component';
import { CallDiscussionService } from '../../../core/services/call-discussion.service';


@Component({
  selector: 'app-organization-table',
  standalone: true,

  imports: [
    CommonModule,
    CallDiscussionFormComponent,
    CallDiscussionViewComponent
  ],

  templateUrl: './organization-table.component.html'
})
export class OrganizationTableComponent
  implements OnInit {

  // =====================================================
  // INPUTS
  // =====================================================

  @Input()
  canEdit = false;

  @Input()
  status?: 'FAILED' | 'CONVERTED';

  @Input()
  fetchType:
    'MY_VISITS' | 'ALL_VISITS' = 'MY_VISITS';


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

    this.organizationService
      .fetchSalesVisits()
      .subscribe({

        // -----------------------------------------------
        // SUCCESS
        // -----------------------------------------------

        next: (
          response: SalesVisitResponse
        ) => {

          let salesVisits =
            response.data ?? [];


          // ---------------------------------------------
          // NON EDITOR USERS
          // ---------------------------------------------
          //
          // Agar user editor nahi hai,
          // to sirf CONVERTED / FAILED records
          // dikhayenge.
          //

          if (!this.canEdit) {

            salesVisits =
              salesVisits.filter(
                visit =>
                  visit.status === 'CONVERTED' ||
                  visit.status === 'FAILED'
              );

          }


          // ---------------------------------------------
          // STATUS FILTER
          // ---------------------------------------------
          //
          // Parent se status diya gaya hai
          // to uske according filter karenge.
          //

          if (this.status) {

            salesVisits =
              salesVisits.filter(
                visit =>
                  visit.status === this.status
              );

          }


          // ---------------------------------------------
          // SET DATA
          // ---------------------------------------------

          this.salesVisits =
            salesVisits;


          // ---------------------------------------------
          // CHANGE DETECTION
          // ---------------------------------------------

          this.cdr.detectChanges();

        },


        // -----------------------------------------------
        // ERROR
        // -----------------------------------------------

        error: (
          error
        ) => {

          console.error(
            'Failed to load sales visits:',
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

  viewHistory(
    visit: SalesVisit
  ): void {

    this.callDiscussionService
      .getCallDiscussionHistory(visit.id)
      .subscribe({

        // -----------------------------------------------
        // SUCCESS
        // -----------------------------------------------

        next: (
          response: CallDiscussionResponse
        ) => {

          this.selectedDiscussion =
            response.data?.[0] ?? null;

          this.showViewModal =
            this.selectedDiscussion !== null;

        },


        // -----------------------------------------------
        // ERROR
        // -----------------------------------------------

        error: (
          error
        ) => {

          console.error(
            'Failed to load call discussion history:',
            error
          );

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