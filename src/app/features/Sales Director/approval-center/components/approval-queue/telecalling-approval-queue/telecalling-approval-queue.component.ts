
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { OrganizationService } from '../../../../../../core/services/organization.service';

import {
  Telecalling,
  TelecallingResponse,
} from '../../../../../../core/models/client-crm/telecalling.type';

import {
  TelecallingApproveConfirmationComponent,
  TelecallingApprovalConfirmationData,
} from '../../../forms/telecalling-approve-confirmation/telecalling-approve-confirmation.component';

import {
  TelecallingRejectRequestComponent,
  TelecallingRejectRequestData,
  TelecallingRejectEvent,
} from '../../../forms/telecalling-reject-request/telecalling-reject-request.component';

import {
  TelecallingApprovalDetailComponent,
} from '../../telecalling-approval-detail/telecalling-approval-detail.component';

// =====================================================
// TELECALLING QUEUE ITEM
// =====================================================

export interface TelecallingApprovalQueueItem {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;

  requestedBy: string;
  requestedDate: string;

  customerName: string;
  contactPerson: string;
  contactNumber: string;
  customerEmail: string;
  city: string;

  leadPriority: string;
  priority: 'high' | 'medium' | 'low';

  status?: string;

  telecallingId: number;
}

// =====================================================
// COMPONENT
// =====================================================

@Component({
  selector: 'app-telecalling-approval-queue',
  standalone: true,

  imports: [
    CommonModule,
    TelecallingApproveConfirmationComponent,
    TelecallingRejectRequestComponent,
    TelecallingApprovalDetailComponent,
  ],

  templateUrl:
    './telecalling-approval-queue.component.html',

  changeDetection:
    ChangeDetectionStrategy.OnPush,
})
export class TelecallingApprovalQueueComponent
  implements OnInit {

  // =====================================================
  // SERVICES
  // =====================================================

  private readonly organizationService =
    inject(OrganizationService);

  private readonly cdr =
    inject(ChangeDetectorRef);

  // =====================================================
  // DATA
  // =====================================================

  requests: TelecallingApprovalQueueItem[] = [];

  errorMessage = '';

  // =====================================================
  // REVIEW DETAIL
  // =====================================================

  showApprovalDetail = false;

  selectedDetailRequest:
    Telecalling | null = null;

  // =====================================================
  // APPROVE
  // =====================================================

  showApproveConfirmation = false;

  selectedRequest:
    TelecallingApprovalConfirmationData | null = null;

  // =====================================================
  // REJECT
  // =====================================================

  showRejectRequest = false;

  selectedRejectRequest:
    TelecallingRejectRequestData | null = null;

  // =====================================================
  // INIT
  // =====================================================

  ngOnInit(): void {
    this.loadTelecallingQueue();
  }

  // =====================================================
  // FETCH TELECALLING
  // =====================================================

  loadTelecallingQueue(): void {
    this.errorMessage = '';

    this.organizationService
      .fetchTelecalling()
      .subscribe({
        next: (
          response: TelecallingResponse
        ) => {

          const records: Telecalling[] =
            response.data ?? [];

          this.requests =
            records.map(
              (record: Telecalling) =>
                this.mapTelecallingToQueue(record)
            );

          console.log(
            'Telecalling Approval Queue:',
            this.requests
          );

          this.cdr.markForCheck();
        },

        error: (error) => {

          console.error(
            'Failed to load Telecalling:',
            error
          );

          this.requests = [];

          this.errorMessage =
            'Unable to load telecalling approval requests.';

          this.cdr.markForCheck();
        },
      });
  }

  // =====================================================
  // MAP API DATA TO QUEUE DATA
  // =====================================================

  private mapTelecallingToQueue(
    record: Telecalling
  ): TelecallingApprovalQueueItem {

    return {
      id: String(record.id),

      telecallingId:
        record.id,

      title:
        `Telecalling - ${
          record.customer_name || 'Customer'
        }`,

      description:
        record.remarks ||
        'Telecalling requires approval.',

      category:
        'Telecalling',

      icon:
        '📞',

      requestedBy:
        record.executive_name ||
        'Sales Executive',

      requestedDate:
        record.visit_date ||
        record.createdAt ||
        '',

      customerName:
        record.customer_name,

      contactPerson:
        record.contact_person,

      contactNumber:
        record.contact_number,

      customerEmail:
        record.customer_email,

      city:
        record.city,

      leadPriority:
        record.lead_priority,

      priority:
        this.getPriority(
          record.lead_priority
        ),

      status:
        record.status ?? 'Pending',
    };
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
      case 'HOT_PROSPECTS':
        return 'high';

      case 'WARM':
      case 'WARM_PROSPECTS':
        return 'medium';

      case 'COLD':
      case 'COLD_PROSPECTS':
        return 'low';

      default:
        return 'medium';
    }
  }

  // =====================================================
  // PRIORITY CSS CLASS
  // =====================================================

  getPriorityClass(
    priority: string | undefined
  ): string {

    const value =
      priority?.toUpperCase() ?? '';

    if (value.includes('HOT')) {
      return 'bg-red-100 text-red-700';
    }

    if (value.includes('WARM')) {
      return 'bg-yellow-100 text-yellow-700';
    }

    if (value.includes('COLD')) {
      return 'bg-green-100 text-green-700';
    }

    return 'bg-gray-100 text-gray-600';
  }

  // =====================================================
  // REVIEW REQUEST
  // =====================================================

  reviewRequest(
    request: TelecallingApprovalQueueItem
  ): void {

    console.log(
      'Review Telecalling:',
      request
    );

    const selectedRecord: Telecalling = {
      id: request.telecallingId,

      executive_name:
        request.requestedBy,

      visit_date:
        request.requestedDate,

      customer_name:
        request.customerName,

      contact_person:
        request.contactPerson,

      contact_number:
        request.contactNumber,

      customer_email:
        request.customerEmail,

      city:
        request.city,

      lead_priority:
        request.leadPriority as any,

      remarks:
        request.description,

      status:
        request.status,
    };

    this.selectedDetailRequest =
      selectedRecord;

    this.showApprovalDetail =
      true;

    this.cdr.markForCheck();
  }

  // =====================================================
  // CLOSE REVIEW DETAIL
  // =====================================================

  closeApprovalDetail(): void {

    this.showApprovalDetail =
      false;

    this.selectedDetailRequest =
      null;

    this.cdr.markForCheck();
  }

  // =====================================================
  // APPROVE REQUEST
  // =====================================================

  approveRequest(
    request: TelecallingApprovalQueueItem
  ): void {

    console.log(
      'Approve button clicked:',
      request
    );

    this.selectedRequest = {

      id:
        request.id,

      customerName:
        request.customerName,

      contactPerson:
        request.contactPerson,

      contactNumber:
        request.contactNumber,

      executiveName:
        request.requestedBy,

      city:
        request.city,

      visitDate:
        request.requestedDate,

      leadPriority:
        request.leadPriority,

      remarks:
        request.description,
    };

    this.showApproveConfirmation =
      true;
  }

  // =====================================================
  // CONFIRM APPROVAL
  // =====================================================

  confirmApproval(): void {

    if (!this.selectedRequest) {
      return;
    }

    console.log(
      'Telecalling Approved:',
      this.selectedRequest
    );

    /*
      API approval logic yahan add karna hai.

      Example:
      this.organizationService
        .updateTelecallingStatus(
          Number(this.selectedRequest.id),
          'APPROVED'
        )
        .subscribe(...)
    */

    this.showApproveConfirmation =
      false;

    this.selectedRequest =
      null;

    this.loadTelecallingQueue();
  }

  // =====================================================
  // CLOSE APPROVE CONFIRMATION
  // =====================================================

  closeApproveConfirmation(): void {

    this.showApproveConfirmation =
      false;

    this.selectedRequest =
      null;
  }

  // =====================================================
  // REJECT REQUEST
  // =====================================================

  rejectRequest(
    request: TelecallingApprovalQueueItem
  ): void {

    console.log(
      'Reject button clicked:',
      request
    );

    this.selectedRejectRequest = {

      id:
        request.id,

      customerName:
        request.customerName,

      contactPerson:
        request.contactPerson,

      contactNumber:
        request.contactNumber,

      executiveName:
        request.requestedBy,

      city:
        request.city,

      visitDate:
        request.requestedDate,

      leadPriority:
        request.leadPriority,

      remarks:
        request.description,
    };

    this.showRejectRequest =
      true;
  }

  // =====================================================
  // HANDLE REJECT
  // =====================================================

  handleReject(
    event: TelecallingRejectEvent
  ): void {

    console.log(
      'Telecalling Rejected:',
      event
    );

    /*
      API rejection logic yahan add karna hai.

      Example:
      this.organizationService
        .updateTelecallingStatus(
          Number(event.request.id),
          'REJECTED',
          event.reason
        )
        .subscribe(...)
    */

    this.showRejectRequest =
      false;

    this.selectedRejectRequest =
      null;

    this.loadTelecallingQueue();
  }

  // =====================================================
  // CLOSE REJECT
  // =====================================================

  closeRejectRequest(): void {

    this.showRejectRequest =
      false;

    this.selectedRejectRequest =
      null;
  }
}


