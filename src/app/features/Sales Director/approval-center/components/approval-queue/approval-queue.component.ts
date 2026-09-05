import {
  Component,
  OnInit,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ApproveConfirmationComponent
} from '../../forms/approve-confirmation/approve-confirmation.component';

import {
  RejectRequestComponent
} from '../../forms/reject-request/reject-request.component';

import {
  ApprovalDetailComponent
} from '../approval-detail/approval-detail.component';

import {
  ApprovalConfirmationData
} from '../../utils/approve-confirmation.util';

import {
  RejectRequestData
} from '../../utils/reject-request.util';

import {
  APPROVAL_DETAIL,
  ApprovalDetail
} from '../../utils/approval-detail.util';

import {
  OrganizationService
} from '../../../../../core/services/organization.service';

import {
  SalesVisit,
  SalesVisitResponse,
  ApprovalDetailStatus
} from '../../../../../core/models/client-crm/sales-visit.type';


// =====================================================
// APPROVAL QUEUE ITEM
// =====================================================

export interface ApprovalQueueItem {

  id: string;

  title: string;

  description: string;

  category: string;

  icon: string;

  requestedBy: string;

  requestedDate: string;

  amount: number;

  priority: 'high' | 'medium' | 'low';

  status?: string;

  requesterRole?: string;

  department?: string;

  approvalLevel?: string;

  currentApprover?: string;

  // Actual Sales Visit ID
  salesVisitId: number;
}


// =====================================================
// COMPONENT
// =====================================================

@Component({
  selector: 'app-approval-queue',

  standalone: true,

  imports: [
    CommonModule,
    ApproveConfirmationComponent,
    RejectRequestComponent,
    ApprovalDetailComponent,
  ],

  templateUrl: './approval-queue.component.html',
})
export class ApprovalQueueComponent
  implements OnInit {


  // =====================================================
  // SERVICE
  // =====================================================

  private readonly organizationService =
    inject(OrganizationService);


  // =====================================================
  // APPROVAL QUEUE
  // =====================================================

  requests: ApprovalQueueItem[] = [];

  isLoadingSalesVisits = false;

  errorMessage = '';


  // =====================================================
  // APPROVAL DETAIL
  // =====================================================

  showApprovalDetail = false;

  selectedDetailRequest:
    ApprovalDetail | null = null;


  // =====================================================
  // APPROVE MODAL
  // =====================================================

  showApproveConfirmation = false;

  selectedRequest:
    ApprovalConfirmationData | null = null;


  // =====================================================
  // REJECT MODAL
  // =====================================================

  showRejectRequest = false;

  selectedRejectRequest:
    RejectRequestData | null = null;


  // =====================================================
  // INIT
  // =====================================================

  ngOnInit(): void {

    this.loadApprovalQueue();

  }


  // =====================================================
  // LOAD APPROVAL QUEUE
  // =====================================================

  loadApprovalQueue(): void {

    this.isLoadingSalesVisits = true;

    this.errorMessage = '';


    this.organizationService
      .fetchSalesVisits()
      .subscribe({

        next: (
          response: SalesVisitResponse
        ) => {

          console.log(
            'Sales Visit API Response:',
            response
          );


          const salesVisits =
            response.data ?? [];


          // ------------------------------------------------
          // Convert SalesVisit -> ApprovalQueueItem
          // ------------------------------------------------

          this.requests =
            salesVisits.map(
              (visit: SalesVisit) =>
                this.mapSalesVisitToApprovalQueue(
                  visit
                )
            );


          this.isLoadingSalesVisits = false;


          console.log(
            'Approval Queue:',
            this.requests
          );

        },


        error: (error) => {

          console.error(
            'Failed to load Sales Visits:',
            error
          );


          this.requests = [];


          this.errorMessage =
            'Unable to load approval requests.';


          this.isLoadingSalesVisits = false;

        }

      });

  }


  // =====================================================
  // MAP SALES VISIT -> APPROVAL QUEUE
  // =====================================================

  private mapSalesVisitToApprovalQueue(
    visit: SalesVisit
  ): ApprovalQueueItem {

    return {

      // --------------------------------------------------
      // ID
      // --------------------------------------------------

      id:
        String(visit.id),


      // --------------------------------------------------
      // ACTUAL SALES VISIT ID
      // --------------------------------------------------

      salesVisitId:
        visit.id,


      // --------------------------------------------------
      // TITLE
      // --------------------------------------------------

      title:
        `Sales Visit - ${visit.customer_name}`,


      // --------------------------------------------------
      // DESCRIPTION
      // --------------------------------------------------

      description:
        visit.discussion_summary
        || visit.additional_remarks
        || visit.remarks
        || 'Sales visit requires approval.',


      // --------------------------------------------------
      // CATEGORY
      // --------------------------------------------------

      category:
        'Sales Visit',


      // --------------------------------------------------
      // ICON
      // --------------------------------------------------

      icon:
        '📋',


      // --------------------------------------------------
      // REQUESTED BY
      // --------------------------------------------------

      requestedBy:
        visit.executive_name,


      // --------------------------------------------------
      // REQUESTED DATE
      // --------------------------------------------------

      requestedDate:
        visit.visit_date,


      // --------------------------------------------------
      // AMOUNT
      // --------------------------------------------------

      amount:
        visit.basic_amount
        ?? visit.expected_business_value
        ?? 0,


      // --------------------------------------------------
      // PRIORITY
      // --------------------------------------------------

      priority:
        this.getPriority(
          visit.lead_priority
        ),


      // --------------------------------------------------
      // STATUS
      // --------------------------------------------------

      status:
        this.getApprovalStatus(
          visit.status
        ),


      // --------------------------------------------------
      // REQUESTER ROLE
      // --------------------------------------------------

      requesterRole:
        'Sales Executive',


      // --------------------------------------------------
      // DEPARTMENT
      // --------------------------------------------------

      department:
        'Sales',


      // --------------------------------------------------
      // APPROVAL LEVEL
      // --------------------------------------------------

      approvalLevel:
        'Sales Director',


      // --------------------------------------------------
      // CURRENT APPROVER
      // --------------------------------------------------

      currentApprover:
        'Sales Director',

    };

  }


  // =====================================================
  // APPROVAL STATUS
  // =====================================================

  private getApprovalStatus(
    status: string | null | undefined
  ): ApprovalDetailStatus {

    switch (
      status?.trim().toUpperCase()
    ) {

      case 'APPROVED':
        return 'approved';


      case 'REJECTED':
        return 'rejected';


      case 'CHANGES_REQUESTED':

      case 'CHANGES-REQUESTED':

      case 'REQUEST_CHANGES':
        return 'changes-requested';


      case 'PENDING':

      case 'OPEN':

      case 'IN_PROGRESS':

      case 'FOLLOW_UP':

      case 'NEGOTIATION':

      case 'CONVERTED':

      case 'FAILED':

      case undefined:

      case null:

      case '':

      default:

        // Default approval status
        return 'pending';

    }

  }


  // =====================================================
  // PRIORITY
  // =====================================================

  private getPriority(
    priority: string | undefined
  ): 'high' | 'medium' | 'low' {

    switch (
      priority?.toUpperCase()
    ) {

      case 'HOT':
        return 'high';

      case 'WARM':
        return 'medium';

      case 'COLD':
        return 'low';

      default:
        return 'medium';

    }

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
  // REVIEW REQUEST
  // =====================================================

  reviewRequest(
    request: ApprovalQueueItem
  ): void {

    console.log(
      'Review clicked:',
      request
    );


    this.selectedDetailRequest = {

      ...APPROVAL_DETAIL,


      // -------------------------------------------------
      // ID
      // -------------------------------------------------

      id:
        request.id,


      // -------------------------------------------------
      // BASIC INFORMATION
      // -------------------------------------------------

      requestTitle:
        request.title,

      description:
        request.description,

      category:
        request.category,

      requestedBy:
        request.requestedBy,

      requestedDate:
        request.requestedDate,

      amount:
        request.amount,

      priority:
        request.priority,


      // -------------------------------------------------
      // STATUS
      // -------------------------------------------------

      status:
        this.getApprovalStatus(
          request.status
        ),


      // -------------------------------------------------
      // ADDITIONAL APPROVAL INFORMATION
      // -------------------------------------------------

      requesterRole:
        request.requesterRole ?? '',

      department:
        request.department ?? '',

      approvalLevel:
        request.approvalLevel ?? '',

      currentApprover:
        request.currentApprover ?? '',

    };


    this.showApprovalDetail = true;

  }


  // =====================================================
  // CLOSE APPROVAL DETAIL
  // =====================================================

  closeApprovalDetail(): void {

    this.showApprovalDetail = false;

    this.selectedDetailRequest = null;

  }


  // =====================================================
  // VIEW ALL REQUESTS
  // =====================================================

  viewAllRequests(): void {

    this.showApprovalDetail = false;

    this.selectedDetailRequest = null;

  }


  // =====================================================
  // APPROVE REQUEST
  // =====================================================

  approveRequest(
    request: ApprovalQueueItem
  ): void {

    console.log(
      'Approve clicked:',
      request
    );


    this.selectedRequest = {

      id:
        request.id,

      requestTitle:
        request.title,

      requestedBy:
        request.requestedBy,

      category:
        request.category,

      amount:
        request.amount,

    };


    this.showApproveConfirmation = true;

  }


  // =====================================================
  // CONFIRM APPROVAL
  // =====================================================

  confirmApproval(): void {

    if (!this.selectedRequest) {
      return;
    }


    console.log(
      'Approval approved:',
      this.selectedRequest.id
    );


    /*
     * ===================================================
     * APPROVAL API
     * ===================================================
     *
     * Future:
     *
     * this.organizationService
     *   .approveSalesVisit(
     *      Number(this.selectedRequest.id)
     *   )
     *   .subscribe(...)
     *
     * ===================================================
     */


    this.showApproveConfirmation = false;

    this.selectedRequest = null;


    this.loadApprovalQueue();

  }


  // =====================================================
  // CLOSE APPROVE MODAL
  // =====================================================

  closeApproveConfirmation(): void {

    this.showApproveConfirmation = false;

    this.selectedRequest = null;

  }


  // =====================================================
  // REJECT REQUEST
  // =====================================================

  rejectRequest(
    request: ApprovalQueueItem
  ): void {

    console.log(
      'Reject clicked:',
      request
    );


    this.selectedRejectRequest = {

      id:
        request.id,

      requestTitle:
        request.title,

      requestedBy:
        request.requestedBy,

      category:
        request.category,

      amount:
        request.amount,

    };


    this.showRejectRequest = true;

  }


  // =====================================================
  // HANDLE REJECTION
  // =====================================================

  handleReject(
    event: {
      request: RejectRequestData;
      reason: string;
    }
  ): void {

    console.log(
      'Request rejected:',
      event.request.id
    );


    console.log(
      'Rejection reason:',
      event.reason
    );


    /*
     * ===================================================
     * REJECTION API
     * ===================================================
     *
     * Future:
     *
     * this.organizationService
     *   .rejectSalesVisit(
     *      Number(event.request.id),
     *      event.reason
     *   )
     *   .subscribe(...)
     *
     * ===================================================
     */


    this.showRejectRequest = false;

    this.selectedRejectRequest = null;


    this.loadApprovalQueue();

  }


  // =====================================================
  // CLOSE REJECT MODAL
  // =====================================================

  closeRejectRequest(): void {

    this.showRejectRequest = false;

    this.selectedRejectRequest = null;

  }

}