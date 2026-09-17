import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { CommonModule } from '@angular/common';


// =====================================================
// TELECALLING APPROVAL DATA
// =====================================================

export interface TelecallingApprovalConfirmationData {
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
// COMPONENT
// =====================================================

@Component({
  selector: 'app-telecalling-approve-confirmation',

  standalone: true,

  imports: [
    CommonModule,
  ],

  templateUrl:
    './telecalling-approve-confirmation.component.html',
})
export class TelecallingApproveConfirmationComponent {

  // =====================================================
  // INPUT
  // =====================================================

  @Input()
  approval:
    TelecallingApprovalConfirmationData | null = null;


  // =====================================================
  // OUTPUT
  // =====================================================

  @Output()
  confirmed = new EventEmitter<void>();

  @Output()
  cancelled = new EventEmitter<void>();


  // =====================================================
  // CLOSE
  // =====================================================

  onClose(): void {
    this.cancelled.emit();
  }


  // =====================================================
  // CONFIRM
  // =====================================================

  onConfirm(): void {

    if (!this.approval) {
      return;
    }

    console.log(
      'Telecalling approval confirmed:',
      this.approval
    );

    this.confirmed.emit();
  }
}