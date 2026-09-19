import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { OrganizationService } from '../../../../../core/services/organization.service';


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
  // CONSTRUCTOR
  // =====================================================
  constructor(
    private organizationService: OrganizationService
  ) {}


  // =====================================================
  // CLOSE
  // =====================================================
  onClose(): void {
    this.cancelled.emit();
  }


  // =====================================================
  // CONFIRM APPROVAL
  // PATCH /updateTelecalling/:id
  // =====================================================
  onConfirm(): void {

    if (!this.approval) {
      return;
    }

    const id = Number(this.approval.id);

    if (!id) {
      console.error('Invalid telecalling ID');
      return;
    }

    this.organizationService
      .updateTelecalling(id, 'APPROVED')
      .subscribe({

        next: (response) => {

          console.log(
            'Telecalling approved successfully:',
            response
          );

          // Parent ko success batana
          this.confirmed.emit();
        },

        error: (error) => {

          console.error(
            'Failed to approve telecalling:',
            error
          );

        }

      });
  }

}