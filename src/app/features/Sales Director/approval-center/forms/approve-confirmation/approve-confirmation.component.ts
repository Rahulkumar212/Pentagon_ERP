import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ApprovalConfirmationData,
  APPROVE_CONFIRMATION_CONTENT,
  formatApprovalAmount,
} from '../../utils/approve-confirmation.util';

@Component({
  selector: 'app-approve-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approve-confirmation.component.html',
})
export class ApproveConfirmationComponent {

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

  readonly content = APPROVE_CONFIRMATION_CONTENT;

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
    this.cancelled.emit();
  }

  // =====================================================
  // CONFIRM APPROVAL
  // =====================================================

  onConfirm(): void {

    if (!this.approval) {
      return;
    }

    this.confirmed.emit();
  }
}