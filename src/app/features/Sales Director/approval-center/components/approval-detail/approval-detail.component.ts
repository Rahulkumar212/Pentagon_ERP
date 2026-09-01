
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  APPROVAL_DETAIL,
  ApprovalDetail,
} from '../../utils/approval-detail.util';

import { ApproveConfirmationComponent } from '../../forms/approve-confirmation/approve-confirmation.component';

import { ApprovalTimelineComponent } from '../../forms/approval-timeline/approval-timeline.component';

import { RequestChangesComponent } from '../../forms/request-changes/request-changes.component';

import { RequestChangesData } from '../../utils/request-changes.util';

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
export class ApprovalDetailComponent {

  // =====================================================
  // INPUT
  // =====================================================

  @Input() approval: ApprovalDetail = APPROVAL_DETAIL;

  // =====================================================
  // OUTPUT
  // =====================================================

  @Output() back = new EventEmitter<void>();

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
  // INPUT CHANGE HANDLER
  // =====================================================

  ngOnChanges(): void {
    this.updateRequestChangesData();
  }

  // =====================================================
  // UPDATE REQUEST CHANGES DATA
  // =====================================================

  private updateRequestChangesData(): void {
    this.requestChangesData = {
      requestId: this.approval.id,
      requestTitle: this.approval.requestTitle,
      requestedBy: this.approval.requestedBy,
      currentStatus: this.approval.status,
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

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  }

  // =====================================================
  // APPROVE BUTTON
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
    // API CALL YAHAN AAYEGA
    // =================================================

    this.approval.status = 'approved';

    this.updateRequestChangesData();

    this.showApproveConfirmation = false;
  }

  // =====================================================
  // CLOSE APPROVE MODAL
  // =====================================================

  closeApproveConfirmation(): void {
    this.showApproveConfirmation = false;
  }

  // =====================================================
  // REQUEST CHANGES BUTTON
  // =====================================================

  requestChanges(): void {
    this.updateRequestChangesData();

    this.showRequestChanges = true;
  }

  // =====================================================
  // CLOSE REQUEST CHANGES MODAL
  // =====================================================

  closeRequestChanges(): void {
    this.showRequestChanges = false;
  }

  // =====================================================
  // SUBMIT REQUEST CHANGES
  // =====================================================

  submitRequestChanges(event: {
    request: RequestChangesData;
    reason: string;
    message: string;
  }): void {

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
    // API CALL YAHAN AAYEGA
    // =================================================

    this.approval.status = 'changes-requested';

    this.updateRequestChangesData();

    this.showRequestChanges = false;
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
    // API CALL YAHAN AAYEGA
    // =================================================

    this.approval.status = 'rejected';

    this.updateRequestChangesData();
  }

  // =====================================================
  // DOCUMENT
  // =====================================================

  downloadDocument(documentName: string): void {
    console.log(
      'Download document:',
      documentName
    );
  }
}

