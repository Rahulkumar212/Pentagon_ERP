
import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  RejectRequestData,
  REJECTION_REASONS,
  REJECT_REQUEST_CONTENT,
  formatRejectAmount
} from '../../utils/reject-request.util';

@Component({
  selector: 'app-reject-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reject-request.component.html'
})
export class RejectRequestComponent {

  @Input() isOpen = false;

  @Input() request: RejectRequestData | null = null;

  @Output() close = new EventEmitter<void>();

  @Output() reject = new EventEmitter<{
    request: RejectRequestData;
    reason: string;
  }>();

  readonly content = REJECT_REQUEST_CONTENT;

  readonly rejectionReasons = REJECTION_REASONS;

  selectedReason = '';

  customReason = '';

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
    this.reset();
    this.close.emit();
  }

  onReject(): void {

    if (!this.request || !this.isValid) {
      return;
    }

    this.reject.emit({
      request: this.request,
      reason: this.finalReason
    });

    this.reset();
  }

  private reset(): void {
    this.selectedReason = '';
    this.customReason = '';
  }
}

