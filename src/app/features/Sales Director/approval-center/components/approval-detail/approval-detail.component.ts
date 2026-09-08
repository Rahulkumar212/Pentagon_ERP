import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  inject,
  ChangeDetectorRef,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  APPROVAL_DETAIL,
  ApprovalDetail,
} from '../../utils/approval-detail.util';

import {
  ApproveConfirmationComponent
} from '../../forms/approve-confirmation/approve-confirmation.component';

import {
  ApprovalTimelineComponent
} from '../../forms/approval-timeline/approval-timeline.component';

import {
  RequestChangesComponent
} from '../../forms/request-changes/request-changes.component';

import {
  RequestChangesData
} from '../../utils/request-changes.util';

import {
  OrganizationService
} from '../../../../../core/services/organization.service';

import {
  SalesVisit
} from '../../../../../core/models/client-crm/sales-visit.type';


@Component({
  selector: 'app-approval-detail',

  standalone: true,

  imports: [
    CommonModule,
    ApproveConfirmationComponent,
    ApprovalTimelineComponent,
    RequestChangesComponent,
  ],

  templateUrl: './approval-detail.component.html',
})
export class ApprovalDetailComponent
  implements OnChanges {


  // =====================================================
  // SERVICES
  // =====================================================

  private readonly organizationService =
    inject(OrganizationService);

  private readonly cdr =
  inject(ChangeDetectorRef);


  // =====================================================
  // INPUT
  // =====================================================

  @Input()
  approval: ApprovalDetail = APPROVAL_DETAIL;


  // =====================================================
  // OUTPUT
  // =====================================================

  @Output()
  back = new EventEmitter<void>();


  // =====================================================
  // SALES VISIT
  // =====================================================

  salesVisit: SalesVisit | null = null;

  isLoadingSalesVisit = false;

  salesVisitError = '';


  // =====================================================
  // MODAL STATE
  // =====================================================

  showApproveConfirmation = false;

  showRequestChanges = false;


  // =====================================================
  // REQUEST CHANGES DATA
  // =====================================================

  requestChangesData: RequestChangesData = {

    requestId: '',

    requestTitle: '',

    requestedBy: '',

    currentStatus: '',

  };


  // =====================================================
  // INPUT CHANGE
  // =====================================================

  ngOnChanges(
    changes: SimpleChanges
  ): void {

    if (changes['approval']) {

      // Update approval related data
      this.updateRequestChangesData();

      // Fetch SalesVisit data
      this.loadSalesVisit();

    }

  }


  // =====================================================
  // LOAD SALES VISIT
  // =====================================================

  loadSalesVisit(): void {

  const salesVisitId =
    Number(this.approval.id);


  // =============================================
  // VALIDATE ID
  // =============================================

  if (
    !salesVisitId ||
    Number.isNaN(salesVisitId)
  ) {

    this.salesVisit = null;

    this.salesVisitError =
      'Invalid Sales Visit ID.';

    this.cdr.detectChanges();

    return;
  }


  // =============================================
  // RESET STATE
  // =============================================

  this.salesVisitError = '';

  this.salesVisit = null;


  // =============================================
  // FETCH SALES VISITS
  // =============================================

  this.organizationService
    .fetchSalesVisits()
    .subscribe({

      next: (response) => {

        console.log(
          'All Sales Visits:',
          response.data
        );


        // =============================================
        // FIND SELECTED SALES VISIT
        // =============================================

        const selectedVisit =
          response.data?.find(
            (visit: SalesVisit) =>
              visit.id === salesVisitId
          );


        // =============================================
        // RECORD NOT FOUND
        // =============================================

        if (!selectedVisit) {

          this.salesVisit = null;

          this.salesVisitError =
            'Sales Visit not found.';


          // Force UI Update
          this.cdr.detectChanges();

          return;
        }


        // =============================================
        // SET DATA
        // =============================================

        console.log(
          'Selected Sales Visit:',
          selectedVisit
        );

        this.salesVisit =
          selectedVisit;


        // =============================================
        // FORCE CHANGE DETECTION
        // =============================================

        this.cdr.detectChanges();

      },


      // =============================================
      // API ERROR
      // =============================================

      error: (error) => {

        console.error(
          'Failed to fetch Sales Visits:',
          error
        );

        this.salesVisit = null;

        this.salesVisitError =
          'Unable to load Sales Visit details.';


        // Force UI Update
        this.cdr.detectChanges();

      }

    });

}


  // =====================================================
  // UPDATE REQUEST CHANGES DATA
  // =====================================================

  private updateRequestChangesData(): void {

    this.requestChangesData = {

      requestId:
        this.approval.id,

      requestTitle:
        this.approval.requestTitle,

      requestedBy:
        this.approval.requestedBy,

      currentStatus:
        this.approval.status ?? 'pending',

    };

  }


  // =====================================================
  // CLOSE DETAIL
  // =====================================================

  closeDetail(): void {

    this.back.emit();

  }


  // =====================================================
  // CURRENCY
  // =====================================================

  formatCurrency(
    value: number
  ): string {

    return new Intl.NumberFormat(
      'en-IN',
      {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
      }
    ).format(value);

  }


  // =====================================================
  // APPROVE
  // =====================================================

  approveRequest(): void {

    this.showApproveConfirmation = true;

  }


  // =====================================================
  // CONFIRM APPROVAL
  // =====================================================

  confirmApproval(): void {

    console.log(
      'Approval approved:',
      this.approval.id
    );


    // =================================================
    // API CALL WILL COME HERE
    // =================================================

    this.approval.status =
      'approved';


    this.updateRequestChangesData();

    this.showApproveConfirmation =
      false;

  }


  // =====================================================
  // CLOSE APPROVE
  // =====================================================

  closeApproveConfirmation(): void {

    this.showApproveConfirmation =
      false;

  }


  // =====================================================
  // REQUEST CHANGES
  // =====================================================

  requestChanges(): void {

    this.updateRequestChangesData();

    this.showRequestChanges =
      true;

  }


  // =====================================================
  // CLOSE REQUEST CHANGES
  // =====================================================

  closeRequestChanges(): void {

    this.showRequestChanges =
      false;

  }


  // =====================================================
  // SUBMIT REQUEST CHANGES
  // =====================================================

  submitRequestChanges(
    event: {
      request: RequestChangesData;
      reason: string;
      message: string;
    }
  ): void {

    console.log(
      'Changes requested:',
      event.request.requestId
    );


    console.log(
      'Reason:',
      event.reason
    );


    console.log(
      'Message:',
      event.message
    );


    // =================================================
    // API CALL WILL COME HERE
    // =================================================

    this.approval.status =
      'changes-requested';


    this.updateRequestChangesData();

    this.showRequestChanges =
      false;

  }


  // =====================================================
  // REJECT
  // =====================================================

  rejectRequest(): void {

    console.log(
      'Approval rejected:',
      this.approval.id
    );


    // =================================================
    // API CALL WILL COME HERE
    // =================================================

    this.approval.status =
      'rejected';


    this.updateRequestChangesData();

  }


  // =====================================================
  // DOCUMENT
  // =====================================================

  downloadDocument(
    documentName: string
  ): void {

    console.log(
      'Download document:',
      documentName
    );

  }

}