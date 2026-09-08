import {
  Component,
  OnInit,
  inject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ApproveConfirmationComponent,
} from '../../forms/approve-confirmation/approve-confirmation.component';

import {
  RejectRequestComponent,
} from '../../forms/reject-request/reject-request.component';

import {
  ApprovalDetailComponent,
} from '../approval-detail/approval-detail.component';

import {
  ApprovalConfirmationData,
} from '../../utils/approve-confirmation.util';

import {
  RejectRequestData,
} from '../../utils/reject-request.util';

import {
  APPROVAL_DETAIL,
  ApprovalDetail,
} from '../../utils/approval-detail.util';

import {
  OrganizationService,
} from '../../../../../core/services/organization.service';

import {
  SalesVisit,
  SalesVisitResponse,
  ApprovalDetailStatus,
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

  changeDetection:
    ChangeDetectionStrategy.OnPush,
})
export class ApprovalQueueComponent
  implements OnInit {


  // =====================================================
  // SERVICES
  // =====================================================

  private readonly organizationService =
    inject(OrganizationService);

  private readonly cdr =
    inject(ChangeDetectorRef);


  // =====================================================
  // APPROVAL QUEUE
  // =====================================================

  requests: ApprovalQueueItem[] = [];

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
  // ONLY GET API
  // =====================================================

  loadApprovalQueue(): void {

    this.errorMessage = '';


    this.organizationService
      .fetchSalesVisits()
      .subscribe({

        next: (
          response: SalesVisitResponse
        ) => {

          const salesVisits =
            response.data ?? [];


          this.requests =
            salesVisits.map(
              (visit: SalesVisit) =>
                this.mapSalesVisitToApprovalQueue(
                  visit
                )
            );


          // OnPush change detection
          this.cdr.markForCheck();


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


          // OnPush change detection
          this.cdr.markForCheck();

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

      id:
        String(visit.id),


      salesVisitId:
        visit.id,


      title:
        `Sales Visit - ${visit.customer_name}`,


      description:
        visit.discussion_summary
        || visit.additional_remarks
        || visit.remarks
        || 'Sales visit requires approval.',


      category:
        'Sales Visit',


      icon:
        '📋',


      requestedBy:
        visit.executive_name,


      requestedDate:
        visit.visit_date,


      amount:
        visit.basic_amount
        ?? visit.expected_business_value
        ?? 0,


      priority:
        this.getPriority(
          visit.lead_priority
        ),


      status:
        this.getApprovalStatus(
          visit.status
        ),


      requesterRole:
        'Sales Executive',


      department:
        'Sales',


      approvalLevel:
        'Sales Director',


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


      default:
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

    this.selectedDetailRequest = {

      ...APPROVAL_DETAIL,


      id:
        request.id,


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


      status:
        this.getApprovalStatus(
          request.status
        ),


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


    this.cdr.markForCheck();

  }


  // =====================================================
  // CLOSE APPROVAL DETAIL
  // =====================================================

  closeApprovalDetail(): void {

    this.showApprovalDetail = false;

    this.selectedDetailRequest = null;


    this.cdr.markForCheck();

  }


  // =====================================================
  // VIEW ALL REQUESTS
  // =====================================================

  viewAllRequests(): void {

    this.showApprovalDetail = false;

    this.selectedDetailRequest = null;


    this.cdr.markForCheck();

  }


  // =====================================================
  // APPROVE REQUEST
  // =====================================================

  approveRequest(
    request: ApprovalQueueItem
  ): void {

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


    this.cdr.markForCheck();

  }


  // =====================================================
  // CONFIRM APPROVAL
  // =====================================================

  confirmApproval(): void {

    if (!this.selectedRequest) {
      return;
    }


    console.log(
      'Approval confirmed:',
      this.selectedRequest.id
    );


    // NO API CALL HERE
    // ONLY UI STATE UPDATE


    this.showApproveConfirmation = false;

    this.selectedRequest = null;


    this.cdr.markForCheck();

  }


  // =====================================================
  // CLOSE APPROVE MODAL
  // =====================================================

  closeApproveConfirmation(): void {

    this.showApproveConfirmation = false;

    this.selectedRequest = null;


    this.cdr.markForCheck();

  }


  // =====================================================
  // REJECT REQUEST
  // =====================================================

  rejectRequest(
    request: ApprovalQueueItem
  ): void {

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


    this.cdr.markForCheck();

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


    // NO API CALL HERE
    // ONLY UI STATE UPDATE


    this.showRejectRequest = false;

    this.selectedRejectRequest = null;


    this.cdr.markForCheck();

  }


  // =====================================================
  // CLOSE REJECT MODAL
  // =====================================================

  closeRejectRequest(): void {

    this.showRejectRequest = false;

    this.selectedRejectRequest = null;


    this.cdr.markForCheck();

  }

}