import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ApprovalConfirmationData,
  APPROVE_CONFIRMATION_CONTENT,
  formatApprovalAmount
} from '../../utils/approve-confirmation.util';

import {
  OrganizationService
} from '../../../../../core/services/organization.service';

@Component({
  selector: 'app-approve-confirmation',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './approve-confirmation.component.html',
})
export class ApproveConfirmationComponent {

  // =====================================================
  // SERVICE
  // =====================================================

  private readonly organizationService =
    inject(OrganizationService);


  // =====================================================
  // INPUT
  // =====================================================

  @Input()
  approval: ApprovalConfirmationData | null = null;


  // =====================================================
  // OUTPUT
  // =====================================================

  @Output()
  confirmed = new EventEmitter<void>();

  @Output()
  cancelled = new EventEmitter<void>();


  // =====================================================
  // STATIC CONTENT
  // =====================================================

  readonly content =
    APPROVE_CONFIRMATION_CONTENT;


  // =====================================================
  // LOADING STATE
  // =====================================================

  isSubmitting = false;


  // =====================================================
  // FORMAT AMOUNT
  // =====================================================

  formatAmount(value: number): string {

    return formatApprovalAmount(value);

  }


  // =====================================================
  // CLOSE MODAL
  // =====================================================

  onClose(): void {

    if (this.isSubmitting) {
      return;
    }

    this.cancelled.emit();

  }


  // =====================================================
  // CONFIRM APPROVAL
  // =====================================================

  onConfirm(): void {

    // -----------------------------------------------
    // Approval data check
    // -----------------------------------------------

    if (!this.approval) {
      return;
    }


    // -----------------------------------------------
    // Prevent duplicate API call
    // -----------------------------------------------

    if (this.isSubmitting) {
      return;
    }


    // -----------------------------------------------
    // Sales Visit ID
    // -----------------------------------------------

    const salesVisitId =
      Number(this.approval.id);


    // -----------------------------------------------
    // Validate ID
    // -----------------------------------------------

    if (
      !salesVisitId ||
      Number.isNaN(salesVisitId)
    ) {

      console.error(
        'Invalid Sales Visit ID:',
        this.approval.id
      );

      return;
    }


    // -----------------------------------------------
    // Start loading
    // -----------------------------------------------

    this.isSubmitting = true;


    console.log(
      'Approving Sales Visit:',
      salesVisitId
    );


    // -----------------------------------------------
    // PATCH API
    // -----------------------------------------------

    this.organizationService
      .updateSalesVisitStatus(
        salesVisitId,
        'APPROVED'
      )
      .subscribe({

        // =============================================
        // SUCCESS
        // =============================================

        next: (response) => {

          console.log(
            'Sales Visit Approved Successfully:',
            response
          );


          this.isSubmitting = false;


          // Parent ko notify karo
          // ki approval successfully ho gaya
          this.confirmed.emit();

        },


        // =============================================
        // ERROR
        // =============================================

        error: (error) => {

          console.error(
            'Failed to approve Sales Visit:',
            error
          );


          this.isSubmitting = false;

        }

      });

  }

}