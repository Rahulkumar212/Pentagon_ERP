import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { CommonModule } from '@angular/common';


// =====================================================
// TELECALLING REJECT DATA
// =====================================================

export interface TelecallingRejectRequestData {
  id: string;
  customerName: string;
  contactPerson: string;
  contactNumber: string;
  executiveName: string;
  city: string;
  visitDate: string;
  leadPriority: string;
  remarks: string;
}


// =====================================================
// REJECT EVENT
// =====================================================

export interface TelecallingRejectEvent {
  request: TelecallingRejectRequestData;
  reason: string;
}


// =====================================================
// COMPONENT
// =====================================================

@Component({
  selector: 'app-telecalling-reject-request',

  standalone: true,

  imports: [
    CommonModule,
  ],

  templateUrl:
    './telecalling-reject-request.component.html',
})
export class TelecallingRejectRequestComponent {

  // =====================================================
  // INPUT
  // =====================================================

  @Input()
  isOpen = false;

  @Input()
  request:
    TelecallingRejectRequestData | null = null;


  // =====================================================
  // OUTPUT
  // =====================================================

  @Output()
  close = new EventEmitter<void>();

  @Output()
  reject =
    new EventEmitter<TelecallingRejectEvent>();


  // =====================================================
  // STATE
  // =====================================================

  selectedReason = '';

  customReason = '';

  isSubmitting = false;


  // =====================================================
  // REJECTION REASONS
  // =====================================================

  readonly rejectionReasons: string[] = [
    'Incomplete Information',
    'Invalid Customer Details',
    'Not a Suitable Lead',
    'Duplicate Request',
    'Incorrect Information',
    'Other',
  ];


  // =====================================================
  // FINAL REASON
  // =====================================================

  get finalReason(): string {

    if (this.selectedReason === 'Other') {
      return this.customReason.trim();
    }

    return this.selectedReason.trim();
  }


  // =====================================================
  // VALIDATION
  // =====================================================

  get isValid(): boolean {
    return this.finalReason.length > 0;
  }


  // =====================================================
  // SELECT REASON
  // =====================================================

  selectReason(reason: string): void {

    this.selectedReason = reason;

    if (reason !== 'Other') {
      this.customReason = '';
    }
  }


  // =====================================================
  // CUSTOM REASON
  // =====================================================

  onCustomReasonChange(value: string): void {
    this.customReason = value;
  }


  // =====================================================
  // CLOSE
  // =====================================================

  onClose(): void {

    if (this.isSubmitting) {
      return;
    }

    this.reset();

    this.close.emit();
  }


  // =====================================================
  // REJECT
  // =====================================================

  onReject(): void {

    if (!this.request || !this.isValid) {
      return;
    }

    if (this.isSubmitting) {
      return;
    }

    const reason = this.finalReason;

    if (!reason) {
      return;
    }

    this.isSubmitting = true;

    console.log(
      'Rejecting Telecalling:',
      this.request
    );

    console.log(
      'Rejection Reason:',
      reason
    );


    // Parent ko reject event bhejenge.
    // Actual Telecalling Reject API parent/service
    // me connect ki jayegi.

    this.reject.emit({
      request: this.request,
      reason,
    });

    this.isSubmitting = false;

    this.reset();

    this.close.emit();
  }


  // =====================================================
  // RESET
  // =====================================================

  private reset(): void {

    this.selectedReason = '';

    this.customReason = '';
  }
}