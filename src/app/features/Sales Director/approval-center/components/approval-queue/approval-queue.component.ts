
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ApprovalQueueItem,
  SALES_DIRECTOR_APPROVAL_QUEUE,
} from '../../utils/approval-queue.data';

import { ApproveConfirmationComponent } from '../../forms/approve-confirmation/approve-confirmation.component';
import { ApprovalConfirmationData } from '../../utils/approve-confirmation.util';

import { RejectRequestComponent } from '../../forms/reject-request/reject-request.component';
import { RejectRequestData } from '../../utils/reject-request.util';

import { ApprovalDetailComponent } from '../approval-detail/approval-detail.component';
import { APPROVAL_DETAIL, ApprovalDetail } from '../../utils/approval-detail.util';

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
export class ApprovalQueueComponent {

  // =====================================================
  // APPROVAL QUEUE
  // =====================================================

  requests: ApprovalQueueItem[] =
    SALES_DIRECTOR_APPROVAL_QUEUE;


  // =====================================================
  // APPROVAL DETAIL STATE
  // =====================================================

  showApprovalDetail = false;

  selectedDetailRequest: ApprovalDetail | null = null;


  // =====================================================
  // APPROVE MODAL STATE
  // =====================================================

  showApproveConfirmation = false;

  selectedRequest: ApprovalConfirmationData | null = null;


  // =====================================================
  // REJECT MODAL STATE
  // =====================================================

  showRejectRequest = false;

  selectedRejectRequest: RejectRequestData | null = null;


  // =====================================================
  // CURRENCY
  // =====================================================

  formatCurrency(value: number): string {

    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);

  }


  // =====================================================
  // REVIEW REQUEST
  // =====================================================

 reviewRequest(request: ApprovalQueueItem): void {
  console.log('Review clicked:', request.id);

  this.selectedDetailRequest = {
    ...APPROVAL_DETAIL,

    id: request.id,
    requestTitle: request.title,
    description: request.description,
    category: request.category,
    requestedBy: request.requestedBy,
    requestedDate: request.requestedDate,
    amount: request.amount,
    priority: request.priority,
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
      request.id
    );

    this.selectedRequest = {

      id: request.id,

      requestTitle: request.title,

      requestedBy: request.requestedBy,

      category: request.category,

      amount: request.amount,

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

    // =================================================
    // API CALL
    // =================================================
    // API call baad mein yaha add kar sakte ho.


    this.showApproveConfirmation = false;

    this.selectedRequest = null;

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
      request.id
    );

    this.selectedRejectRequest = {

      id: request.id,

      requestTitle: request.title,

      requestedBy: request.requestedBy,

      category: request.category,

      amount: request.amount,

    };

    this.showRejectRequest = true;

  }


  // =====================================================
  // HANDLE REJECTION
  // =====================================================

  handleReject(event: {
    request: RejectRequestData;
    reason: string;
  }): void {

    console.log(
      'Request rejected:',
      event.request.id
    );

    console.log(
      'Rejection reason:',
      event.reason
    );

    // =================================================
    // API CALL
    // =================================================
    // API call baad mein yaha add kar sakte ho.


    this.showRejectRequest = false;

    this.selectedRejectRequest = null;

  }


  // =====================================================
  // CLOSE REJECT MODAL
  // =====================================================

  closeRejectRequest(): void {

    this.showRejectRequest = false;

    this.selectedRejectRequest = null;

  }

}

