import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  RejectRequestData,
  REJECTION_REASONS,
  REJECT_REQUEST_CONTENT,
  formatRejectAmount
} from '../../utils/reject-request.util';

import {
  OrganizationService
} from '../../../../../core/services/organization.service';

@Component({
  selector: 'app-reject-request',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './reject-request.component.html'
})
export class RejectRequestComponent {

  private readonly organizationService =
    inject(OrganizationService);

  @Input()
  isOpen = false;

  @Input()
  request: RejectRequestData | null = null;

  @Output()
  close = new EventEmitter<void>();

  @Output()
  reject = new EventEmitter<{
    request: RejectRequestData;
    reason: string;
  }>();

  readonly content = REJECT_REQUEST_CONTENT;

  readonly rejectionReasons = REJECTION_REASONS;

  selectedReason = '';

  customReason = '';

  isSubmitting = false;

  get finalReason(): string {

    if (this.selectedReason === 'Other') {
      return this.customReason.trim();
    }

    return this.selectedReason.trim();
  }

  get isValid(): boolean {
    return this.finalReason.length > 0;
  }

  formatAmount(value: number): string {
    return formatRejectAmount(value);
  }

  selectReason(reason: string): void {

    this.selectedReason = reason;

    if (reason !== 'Other') {
      this.customReason = '';
    }
  }

  onCustomReasonChange(value: string): void {
    this.customReason = value;
  }

  onClose(): void {

    if (this.isSubmitting) {
      return;
    }

    this.reset();

    this.close.emit();
  }

  onReject(): void {

    if (!this.request || !this.isValid) {
      return;
    }

    if (this.isSubmitting) {
      return;
    }

    const salesVisitId =
      Number(this.request.id);

    const reason =
      this.finalReason;

    if (
      !salesVisitId ||
      Number.isNaN(salesVisitId)
    ) {
      console.error(
        'Invalid Sales Visit ID:',
        this.request.id
      );

      return;
    }

    if (!reason) {
      return;
    }

    this.isSubmitting = true;

    console.log(
      'Rejecting Sales Visit:',
      salesVisitId
    );

    console.log(
      'Rejection Reason:',
      reason
    );

    this.organizationService
      .updateSalesVisitStatus(
        salesVisitId,
        'REJECTED',
        reason
      )
      .subscribe({

        next: (response) => {

          console.log(
            'Sales Visit Rejected Successfully:',
            response
          );

          /*
           * Parent ko bhi notify kar rahe hain
           * taaki approval queue refresh ho sake.
           */
          this.reject.emit({
            request: this.request!,
            reason
          });

          this.isSubmitting = false;

          this.reset();

          this.close.emit();
        },

        error: (error) => {

          console.error(
            'Failed to reject Sales Visit:',
            error
          );

          this.isSubmitting = false;
        }

      });
  }

  private reset(): void {

    this.selectedReason = '';

    this.customReason = '';
  }
}